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
            .then(response => response || fetch(event.request).catch(() => {
                // ถ้าไม่สามารถ-fetch-ได้ (ไม่มีการเชื่อมต่ออินเทอร์เน็ต)
                // ส่ง-Response-ที่เป็นfallback แทน
                return new Response('Network error occurred. Please try again later.', {
                    status: 408,
                    statusText: 'Request Timeout',
                    headers: new Headers({
                        'Content-Type': 'text/html'
                    })
                });
            }))
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