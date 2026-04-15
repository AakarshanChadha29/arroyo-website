import { company, quickActions } from '@/content/site';

export function FloatingActions() {
  const whatsappHref = `https://wa.me/${quickActions.whatsappNumber.replace(/[^\d]/g, '')}`;

  return (
    <div className="floating-actions" aria-label="Quick contact action">
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
