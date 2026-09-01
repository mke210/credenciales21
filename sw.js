// Service Worker mínimo para el Sistema de Credenciales Escolares.
// Su única función es cumplir con el requisito de los navegadores para poder
// "Instalar" la app (en Android) o crear un acceso directo (en Windows).
// No guarda nada en caché: cada vez que abras la app se carga la versión más
// reciente desde tu sitio, tal como ya funciona ahora.

const CACHE_NAME = 'credenciales-v1';

self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim());
});

// Requisito técnico: el navegador exige que exista un manejador de "fetch"
// para considerar la app instalable. Simplemente deja pasar cada solicitud
// tal cual, sin interceptar ni almacenar nada.
self.addEventListener('fetch', (event) => {
    event.respondWith(fetch(event.request));
});
