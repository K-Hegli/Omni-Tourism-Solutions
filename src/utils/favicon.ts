/**
 * Favicon utility functions for dynamic favicon management
 */

export interface FaviconConfig {
  favicon: string;
  appleTouchIcon: string;
  androidChrome192: string;
  androidChrome512: string;
  manifestPath: string;
  themeColor: string;
  backgroundColor: string;
}

export const defaultFaviconConfig: FaviconConfig = {
  favicon: '/favicons/favicon.ico',
  appleTouchIcon: '/favicons/apple-touch-icon.png',
  androidChrome192: '/favicons/android-chrome-192x192.png',
  androidChrome512: '/favicons/android-chrome-512x512.png',
  manifestPath: '/favicons/site.webmanifest',
  themeColor: '#ff5c33',
  backgroundColor: '#06121a',
};

/**
 * Updates favicon dynamically (useful for notifications, status changes, etc.)
 */
export function updateFavicon(iconPath: string): void {
  const faviconLink = document.querySelector('link[rel="icon"][type="image/x-icon"]') as HTMLLinkElement;
  if (faviconLink) {
    faviconLink.href = iconPath;
  }
}

/**
 * Updates theme color dynamically
 */
export function updateThemeColor(color: string): void {
  const themeColorMeta = document.querySelector('meta[name="theme-color"]') as HTMLMetaElement;
  if (themeColorMeta) {
    themeColorMeta.content = color;
  }
}

/**
 * Updates page title dynamically
 */
export function updateTitle(title: string): void {
  document.title = title;
}

/**
 * Updates meta description
 */
export function updateDescription(description: string): void {
  const metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement;
  if (metaDescription) {
    metaDescription.content = description;
  }
}

/**
 * Preloads favicon resources for better performance
 */
export function preloadFavicons(config: FaviconConfig = defaultFaviconConfig): void {
  const preloadLinks = [
    config.favicon,
    config.appleTouchIcon,
    config.androidChrome192,
    config.androidChrome512,
  ];

  preloadLinks.forEach(href => {
    const existingLink = document.querySelector(`link[rel="preload"][href="${href}"]`);
    if (!existingLink) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = href;
      document.head.appendChild(link);
    }
  });
}

/**
 * Sets up dynamic favicon for notifications (e.g., unread messages)
 */
export function createNotificationFavicon(count: number): string {
  const canvas = document.createElement('canvas');
  canvas.width = 32;
  canvas.height = 32;
  const ctx = canvas.getContext('2d');

  if (!ctx) return defaultFaviconConfig.favicon;

  // Draw a simple notification badge
  ctx.fillStyle = '#ff5c33';
  ctx.beginPath();
  ctx.arc(24, 8, 8, 0, 2 * Math.PI);
  ctx.fill();

  // Draw count text
  if (count > 0) {
    ctx.fillStyle = 'white';
    ctx.font = 'bold 10px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(count.toString(), 24, 12);
  }

  return canvas.toDataURL();
}

/**
 * Reset favicon to default
 */
export function resetFavicon(): void {
  updateFavicon(defaultFaviconConfig.favicon);
}