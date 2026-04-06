type TrackPayload = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    lintrk?: (...args: unknown[]) => void;
  }
}

export function trackEvent(name: string, payload: TrackPayload = {}) {
  if (typeof window === 'undefined') return;

  const cleanPayload = Object.fromEntries(
    Object.entries(payload).filter(([, value]) => value !== undefined)
  ) as Record<string, string | number | boolean>;

  if (typeof window.gtag === 'function') {
    window.gtag('event', name, cleanPayload);
  }

  if (typeof window.fbq === 'function') {
    window.fbq('trackCustom', name, cleanPayload);
  }

  if (typeof window.lintrk === 'function') {
    window.lintrk('track', { conversion_id: name, ...cleanPayload });
  }
}
