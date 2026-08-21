/**
 * Canonical origin used for metadata, Open Graph, robots.txt and sitemap.xml.
 *
 * Order matters. NEXT_PUBLIC_SITE_URL wins so a real custom domain can be set
 * explicitly. Failing that we fall back to the domain Vercel assigns, because
 * declaring an origin that does not resolve silently breaks link previews —
 * og:image is fetched from whatever origin is declared here, not from the host
 * actually serving the page.
 */
const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (vercelHost ? `https://${vercelHost}` : "https://swapnilrahate.com");
