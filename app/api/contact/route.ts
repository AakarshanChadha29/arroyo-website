/**
 * Production-ready contact endpoint:
 * - Server-side validation + honeypot check
 * - Lightweight in-memory rate limiting per IP
 * - Provider-ready delivery (Resend) with safe local fallback
 *
 * Required env vars for email delivery:
 * - RESEND_API_KEY
 * - CONTACT_FROM_EMAIL
 * - CONTACT_TO_EMAIL
 */

import { NextResponse } from 'next/server';
import { deliverContact, validateContactPayload } from '@/lib/contact';

const RATE_WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 8;
const rateLimitStore = new Map<string, number[]>();

function getClientIp(request: Request) {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    'unknown'
  );
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const existing = rateLimitStore.get(ip) ?? [];
  const recent = existing.filter((ts) => now - ts < RATE_WINDOW_MS);
  recent.push(now);
  rateLimitStore.set(ip, recent);
  return recent.length > MAX_REQUESTS_PER_WINDOW;
}

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { ok: false, message: 'Too many requests. Please try again in a few minutes.' },
        { status: 429 }
      );
    }

    const rawBody = await request.json();
    const validation = validateContactPayload(rawBody);
    if (!validation.ok) {
      return NextResponse.json({ ok: false, message: validation.errors[0] }, { status: 400 });
    }

    const record = {
      ...validation.sanitized,
      createdAt: new Date().toISOString(),
      source: 'website'
    };

    const delivery = await deliverContact(record);
    return NextResponse.json({
      ok: true,
      mode: delivery.mode
    });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
