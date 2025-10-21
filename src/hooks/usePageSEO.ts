import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogType?: string;
  canonicalUrl?: string;
}

export const usePageSEO = ({
  title,
  description,
  keywords,
  ogType = 'website',
  canonicalUrl
}: SEOProps) => {
  useEffect(() => {
    // Update title
    document.title = title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const newMeta = document.createElement('meta');
      newMeta.name = 'description';
      newMeta.content = description;
      document.head.appendChild(newMeta);
    }
    
    // Update keywords if provided
    if (keywords) {
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      } else {
        const newMeta = document.createElement('meta');
        newMeta.name = 'keywords';
        newMeta.content = keywords;
        document.head.appendChild(newMeta);
      }
    }
    
    // Update Open Graph title
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }
    
    // Update Open Graph description
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }
    
    // Update Open Graph type
    const ogTypeElement = document.querySelector('meta[property="og:type"]');
    if (ogTypeElement) {
      ogTypeElement.setAttribute('content', ogType);
    }
    
    // Update canonical URL if provided
    if (canonicalUrl) {
      let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (canonicalLink) {
        canonicalLink.setAttribute('href', canonicalUrl);
      } else {
        canonicalLink = document.createElement('link') as HTMLLinkElement;
        canonicalLink.rel = 'canonical';
        canonicalLink.href = canonicalUrl;
        document.head.appendChild(canonicalLink);
      }
    }
  }, [title, description, keywords, ogType, canonicalUrl]);
};