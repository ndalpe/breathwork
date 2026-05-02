const CACHE_NAME = "breathwork-pwa-v3-voice-clips";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon.svg",
  "./VOICE-KIT.md",
  "./audio/inhale.mp3",
  "./audio/hold.mp3",
  "./audio/exhale.mp3",
  "./audio/one.mp3",
  "./audio/two.mp3",
  "./audio/three.mp3",
  "./audio/four.mp3",
  "./audio/five.mp3",
  "./audio/six.mp3",
  "./audio/seven.mp3",
  "./audio/eight.mp3",
  "./audio/nine.mp3",
  "./audio/ten.mp3",
  "./audio/eleven.mp3",
  "./audio/twelve.mp3",
  "./audio/thirteen.mp3",
  "./audio/fourteen.mp3",
  "./audio/fifteen.mp3",
  "./audio/sixteen.mp3",
  "./audio/seventeen.mp3",
  "./audio/eighteen.mp3",
  "./audio/nineteen.mp3",
  "./audio/twenty.mp3",
  "./audio/twenty-one.mp3",
  "./audio/twenty-two.mp3",
  "./audio/twenty-three.mp3",
  "./audio/twenty-four.mp3",
  "./audio/twenty-five.mp3",
  "./audio/twenty-six.mp3",
  "./audio/twenty-seven.mp3",
  "./audio/twenty-eight.mp3",
  "./audio/twenty-nine.mp3",
  "./audio/thirty.mp3"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS).catch(() => cache.addAll([
      "./",
      "./index.html",
      "./manifest.json",
      "./icon.svg",
      "./VOICE-KIT.md"
    ])))
  );
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(key => key !== CACHE_NAME ? caches.delete(key) : null))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      return cached || fetch(event.request).then(response => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
        return response;
      }).catch(() => caches.match("./index.html"));
    })
  );
});
