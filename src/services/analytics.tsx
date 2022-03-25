export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID as string;

export type SendEventOptions = {
  action: string;
  category: string;
  label: string;
  value?: number;
};

// send pageview to google tag manager
export const sendPageview = (url: string) => {
  const hasWindow = typeof window !== "undefined";
  if (!hasWindow) return;

  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

// send event to google tag manager
export const sendEvent = (options: SendEventOptions) => {
  const hasWindow = typeof window !== "undefined";
  if (!hasWindow) return;

  window.gtag("event", options.action, {
    event_category: options.category,
    event_label: options.label,
    value: options.value,
  });
};
