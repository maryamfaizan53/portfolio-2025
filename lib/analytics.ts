type EventProps = Record<string, unknown>;

export function trackEvent(name: string, props?: EventProps) {
  try {
    // Push to dataLayer if available (GTM/Plausible or similar)
    (window as unknown as Record<string, unknown>).dataLayer = (window as unknown as Record<string, unknown>).dataLayer || [];
    ((window as unknown as Record<string, unknown>).dataLayer as unknown[]).push({ event: name, ...props });
  } catch {
    // SSR or blocked - no-op
  }

  // Fallback console log for debugging
  try {
    console.log("[analytics] event", name, props);
  } catch {}
}

export default { trackEvent };
