// SW "suicida" — se desregistra a sí mismo y limpia TODAS las cachés.
// Este archivo existe solo para que los dispositivos que ya tienen el SW
// instalado reciban esta "actualización" y queden limpios.
// Una vez que todos los dispositivos hayan cargado esta versión, este
// archivo puede eliminarse en el futuro.

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.map((key) => caches.delete(key)))
    ).then(() => self.clients.claim())
     .then(() => self.registration.unregister())
  );
});
