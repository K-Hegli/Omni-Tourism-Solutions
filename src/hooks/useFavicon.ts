import { useEffect, useCallback } from 'react';
import { 
  updateFavicon, 
  updateThemeColor, 
  updateTitle,
  updateDescription,
  preloadFavicons,
  createNotificationFavicon,
  resetFavicon,
  FaviconConfig, 
  defaultFaviconConfig 
} from '../utils/favicon';

/**
 * Hook to manage favicon and theme colors
 */
export function useFavicon(config: Partial<FaviconConfig> = {}) {
  const faviconConfig = { ...defaultFaviconConfig, ...config };

  useEffect(() => {
    // Set initial favicon and theme
    updateFavicon(faviconConfig.favicon);
    updateThemeColor(faviconConfig.themeColor);
    
    // Preload favicon resources for better performance
    preloadFavicons(faviconConfig);
  }, [faviconConfig.favicon, faviconConfig.themeColor]);

  return {
    updateFavicon: useCallback((iconPath: string) => updateFavicon(iconPath), []),
    updateThemeColor: useCallback((color: string) => updateThemeColor(color), []),
    updateTitle: useCallback((title: string) => updateTitle(title), []),
    updateDescription: useCallback((description: string) => updateDescription(description), []),
    resetFavicon: useCallback(() => resetFavicon(), []),
    config: faviconConfig,
  };
}

/**
 * Hook for dynamic favicon changes (notifications, status, etc.)
 */
export function useDynamicFavicon(defaultIcon?: string) {
  const defaultPath = defaultIcon || defaultFaviconConfig.favicon;

  const setFavicon = useCallback((iconPath: string) => {
    updateFavicon(iconPath);
  }, []);

  const resetToDefault = useCallback(() => {
    updateFavicon(defaultPath);
  }, [defaultPath]);

  const setNotificationBadge = useCallback((count: number) => {
    const notificationIcon = createNotificationFavicon(count);
    updateFavicon(notificationIcon);
  }, []);

  const clearNotificationBadge = useCallback(() => {
    resetToDefault();
  }, [resetToDefault]);

  return { 
    setFavicon, 
    resetToDefault, 
    setNotificationBadge, 
    clearNotificationBadge 
  };
}

/**
 * Hook for page-specific SEO management
 */
export function usePageSEO(config: {
  title?: string;
  description?: string;
  themeColor?: string;
}) {
  useEffect(() => {
    if (config.title) {
      updateTitle(config.title);
    }
    if (config.description) {
      updateDescription(config.description);
    }
    if (config.themeColor) {
      updateThemeColor(config.themeColor);
    }
  }, [config.title, config.description, config.themeColor]);
}