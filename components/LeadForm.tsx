'use client';

import { useState } from 'react';
import { trackEvent } from '@/lib/tracking';

/**
 * Lead capture posts JSON to /api/contact.
 *
 * Production: replace or extend the API route to:
 * - Send email via Resend, Postmark, or SMTP (Nodemailer)
 * - POST to CRM (HubSpot, Zoho, custom webhook)
 * - Store in a database instead of contact-submissions.json
 *
 * Serverless note: many hosts use a read-only filesystem — file append will fail.
 * Use an external service for durable storage or delivery.
 */
export function LeadForm() {
  const [status, setStatus] = useState('');
  const [error, setError] = useState(false);
  const [pending, setPending] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('');
    setError(false);
    setPending(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        trackEvent('lead_form_submit_success', {
          form: 'lead_form',
          path: window.location.pathname
        });
        setStatus('Thank you. Our team will review your enquiry and get in touch shortly.');
        form.reset();
        return;
      }

      const data = await res.json().catch(() => ({}));
      setError(true);
      setStatus(
        data?.message || 'We could not submit your form. Please email or call us using the details on the contact page.'
      );
    } catch {
      setError(true);
      setStatus('We could not submit your form. Please email or call us using the details on the contact page.');
    } finally {
      setPending(false);
    }
  }

  return (
    <form className="lead-form card" onSubmit={handleSubmit} noValidate>
      <div className="grid two">
        <label>
          Name
          <input name="name" type="text" autoComplete="name" required aria-required="true" />
        </label>
        <label>
          Organization
          <input name="company" type="text" autoComplete="organization" />
        </label>
      </div>
      <div className="grid two">
        <label>
          Email
          <input name="email" type="email" autoComplete="email" required aria-required="true" />
        </label>
        <label>
          Phone
          <input name="phone" type="tel" autoComplete="tel" />
        </label>
      </div>
      <label>
        Product interest
        <select name="interest" defaultValue="Swimming Pool Ionization System">
          <option>Swimming Pool Ionization System</option>
          <option>IonEdge Portable Water Cleaning Device</option>
          <option>Whole-Home / Villa Mineral Water System</option>
          <option>Partnership / distribution</option>
        </select>
      </label>
      <label>
        Project brief
        <textarea
          name="message"
          rows={5}
          placeholder="Application, approximate scale, location, timeline, and any drawings or water tests available."
          aria-describedby={status ? 'lead-form-status' : undefined}
        />
      </label>
      <input
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="honeypot"
        aria-hidden="true"
      />
      <button className="button" type="submit" disabled={pending}>
        {pending ? 'Submitting...' : 'Get Your Quote Today'}
      </button>
      {status ? (
        <p id="lead-form-status" className={`status${error ? ' status--error' : ''}`} role="status">
          {status}
        </p>
      ) : null}
    </form>
  );
}
