export const GA_TRACKING_ID = 'TRACKING-FILL';

declare global {
  interface Window {
    gtag: (type: string, tracking: string, options: { page_path: string }) => void;
  }
}

export const pageView = (url: string) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};
