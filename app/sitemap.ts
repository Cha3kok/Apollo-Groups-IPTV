import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://apollogroupsiptv.com'

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${baseUrl}/channels-list`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        // Add more pages here as needed
    ]
}