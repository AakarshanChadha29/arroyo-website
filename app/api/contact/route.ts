/**
 * Contact API — development: appends JSON records to contact-submissions.json.
 *
 * Production checklist:
 * 1. Connect to email (e.g. Resend) or CRM webhook; return 200 only after successful handoff.
 * 2. Validate and sanitize payload server-side; consider rate limiting.
 * 3. On Vercel/serverless, avoid local file writes — use external storage or email.
 */

import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

const filePath = path.join(process.cwd(), 'contact-submissions.json');

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const record = {
      ...body,
      createdAt: new Date().toISOString()
    };

    let existing: unknown[] = [];
    try {
      const current = await fs.readFile(filePath, 'utf8');
      existing = JSON.parse(current);
    } catch {
      existing = [];
    }

    if (!Array.isArray(existing)) {
      existing = [];
    }

    existing.push(record);
    await fs.writeFile(filePath, JSON.stringify(existing, null, 2));

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
