'use client';

import { useEffect } from 'react';
import { trackEvent } from '@/lib/tracking';

export function TrackingBridge() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target as HTMLElement | null;
      if (!target) return;
      const el = target.closest<HTMLElement>('[data-track-event]');
      if (el) {
        const eventName = el.dataset.trackEvent;
        if (!eventName) return;

        trackEvent(eventName, {
          label: el.dataset.trackLabel,
          location: el.dataset.trackLocation
        });
        return;
      }

      const cta = target.closest<HTMLAnchorElement | HTMLButtonElement>('a.button, a.text-link, button.button');
      if (!cta) return;

      const label = cta.textContent?.trim() || 'CTA';
      const href = cta instanceof HTMLAnchorElement ? cta.getAttribute('href') || '' : '';
      if (href.startsWith('#')) return;

      trackEvent('cta_click', {
        label,
        href,
        location: window.location.pathname
      });
    }

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return null;
}
