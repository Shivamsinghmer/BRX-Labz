export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/',
        },
        sitemap: 'https://brxlabz.vercel.app/sitemap.xml',
    }
}
