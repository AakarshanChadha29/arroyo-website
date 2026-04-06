import { promises as fs } from 'fs';
import path from 'path';

export type ContactPayload = {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  interest?: string;
  message: string;
  website?: string; // honeypot
};

export type ContactRecord = ContactPayload & {
  createdAt: string;
  source: string;
};

const filePath = path.join(process.cwd(), 'contact-submissions.json');

export function validateContactPayload(payload: Partial<ContactPayload>) {
  const errors: string[] = [];

  const name = String(payload.name ?? '').trim();
  const email = String(payload.email ?? '').trim();
  const phone = String(payload.phone ?? '').trim();
  const message = String(payload.message ?? '').trim();
  const website = String(payload.website ?? '').trim();

  if (!name || name.length < 2) errors.push('Name is required.');
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push('Valid email is required.');
  if (phone && !/^[+\d][\d\s()-]{6,}$/.test(phone)) errors.push('Phone format looks invalid.');
  if (!message || message.length < 10) errors.push('Project brief must be at least 10 characters.');
  if (website) errors.push('Spam detected.');

  return {
    ok: errors.length === 0,
    errors,
    sanitized: {
      name,
      company: String(payload.company ?? '').trim(),
      email,
      phone,
      interest: String(payload.interest ?? '').trim(),
      message
    }
  };
}

function contactEmailHtml(record: ContactRecord) {
  return `
  <h2>New Arroyo lead</h2>
  <p><strong>Name:</strong> ${record.name}</p>
  <p><strong>Company:</strong> ${record.company || '-'}</p>
  <p><strong>Email:</strong> ${record.email}</p>
  <p><strong>Phone:</strong> ${record.phone || '-'}</p>
  <p><strong>Interest:</strong> ${record.interest || '-'}</p>
  <p><strong>Source:</strong> ${record.source}</p>
  <p><strong>Submitted:</strong> ${record.createdAt}</p>
  <hr />
  <p><strong>Project brief</strong></p>
  <p>${record.message.replace(/\n/g, '<br/>')}</p>
  `;
}

async function deliverViaResend(record: ContactRecord) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !from || !to) return { ok: false as const, reason: 'missing_env' as const };

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from,
      to,
      subject: `New lead: ${record.interest || 'General inquiry'} | ${record.name}`,
      reply_to: record.email,
      html: contactEmailHtml(record)
    })
  });

  if (!response.ok) {
    return { ok: false as const, reason: 'provider_error' as const };
  }

  return { ok: true as const };
}

async function fallbackToLocalFile(record: ContactRecord) {
  let existing: unknown[] = [];
  try {
    const current = await fs.readFile(filePath, 'utf8');
    existing = JSON.parse(current);
  } catch {
    existing = [];
  }

  if (!Array.isArray(existing)) existing = [];
  existing.push(record);
  await fs.writeFile(filePath, JSON.stringify(existing, null, 2));
}

export async function deliverContact(record: ContactRecord) {
  const resend = await deliverViaResend(record);
  if (resend.ok) return { ok: true as const, mode: 'resend' as const };

  await fallbackToLocalFile(record);
  return { ok: true as const, mode: 'fallback_file' as const };
}
