declare global {
  interface Window {
    gtag: (type: string, tracking: string, options: { page_path: string }) => void;
  }
}
