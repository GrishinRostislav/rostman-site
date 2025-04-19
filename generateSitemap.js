const sitemap = require('sitemap');
const fs = require('fs');

const sitemapObj = sitemap.createSitemap({
  hostname: 'https://rostman.net', // Заменить на свой домен
  cacheTime: 600000, // 600 sec - cache purge period
  urls: [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/about', changefreq: 'monthly', priority: 0.8 },
    { url: '/services', changefreq: 'weekly', priority: 0.9 },
    // добавь другие страницы
  ],
});

// Записываем sitemap в файл
fs.writeFileSync('public/sitemap.xml', sitemapObj.toString());
console.log('Sitemap generated!');
