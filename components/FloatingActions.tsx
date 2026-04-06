import { company, quickActions } from '@/content/site';

export function FloatingActions() {
  const phone = company.phones[0]?.replace(/\s/g, '') ?? '';
  const whatsappHref = `https://wa.me/${quickActions.whatsappNumber.replace(/[^\d]/g, '')}`;

  return (
    <div className="floating-actions" aria-label="Quick contact actions">
      <a
        href={`tel:${phone}`}
        className="floating-action"
        data-track-event="call_click"
        data-track-label="Floating Call"
        data-track-location="global"
      >
        {quickActions.phoneLabel}
      </a>
      <a
        href={whatsappHref}
        className="floating-action"
        target="_blank"
        rel="noreferrer"
        data-track-event="whatsapp_click"
        data-track-label="Floating WhatsApp"
        data-track-location="global"
      >
        {quickActions.whatsappLabel}
      </a>
    </div>
  );
}
