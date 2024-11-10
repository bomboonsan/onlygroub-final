const CACHE_NAME = 'astro-pwa-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/manifest.json',
    '/icon-192x192.png',
    '/icon-512x512.png'
];

// ติดตั้งและแคชไฟล์
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

// ใช้แคชเมื่อไม่มีการเชื่อมต่ออินเทอร์เน็ต
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});

// อัพเดตแคชเมื่อมีการเปลี่ยนแปลง
self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames =>
            Promise.all(
                cacheNames.map(cacheName => {
                    if (!cacheWhitelist.includes(cacheName)) {
                        return caches.delete(cacheName);
                    }
                })
            )
        )
    );
});