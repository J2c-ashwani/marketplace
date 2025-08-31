import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetch all professionals, blog posts, conditions from your DB
  const professionals = [{ id: '123' }, { id: '456' }]; // Example
  const professionalUrls = professionals.map(p => ({
    url: `https://www.fitindia-marketplace.com/professionals/profile/${p.id}`,
    lastModified: new Date(),
  }));

  return [
    { url: 'https://www.fitindia-marketplace.com', lastModified: new Date() },
    // ...add other static and dynamic URLs
    ...professionalUrls,
  ];
}