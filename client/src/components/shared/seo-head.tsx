import { useEffect } from "react";

interface SeoHeadProps {
  title?: string;
  description?: string;
  image?: string;
  canonicalUrl?: string;
}

export function SeoHead({ 
  title = "IVAPEO - La tienda de vapeo nº1 en España", 
  description = "Compra cigarrillos electrónicos, líquidos y accesorios de vapeo al mejor precio. Envíos gratis en 24h. Garantía de calidad IVAPEO.", 
  image = "/og-image.jpg",
  canonicalUrl 
}: SeoHeadProps) {
  const siteTitle = title.includes("IVAPEO") ? title : `${title} | IVAPEO`;
  const currentUrl = canonicalUrl || window.location.href;

  useEffect(() => {
    // Update Title
    document.title = siteTitle;

    // Update Meta Tags
    const updateMeta = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute("name", name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    const updateOgMeta = (property: string, content: string) => {
      let element = document.querySelector(`meta[property="${property}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute("property", property);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Description
    updateMeta("description", description);

    // Open Graph
    updateOgMeta("og:type", "website");
    updateOgMeta("og:url", currentUrl);
    updateOgMeta("og:title", siteTitle);
    updateOgMeta("og:description", description);
    updateOgMeta("og:image", image);

    // Twitter
    updateMeta("twitter:card", "summary_large_image");
    updateMeta("twitter:url", currentUrl);
    updateMeta("twitter:title", siteTitle);
    updateMeta("twitter:description", description);
    updateMeta("twitter:image", image);

    // Canonical
    let link = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", currentUrl);

  }, [siteTitle, description, image, currentUrl]);

  return null;
}
