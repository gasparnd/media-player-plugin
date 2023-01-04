const VERSION = "v1";

self.addEventListener("install", (event) => {
  event.waitUntil(precache());
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  //get
  if (request.method !== "GET") {
    return;
  }
  //search on cache
  event.responseWhit(cacheResponse(request));

  //update cache

  event.waitUntil(updateCache(request));
});

const precache = async () => {
  const cache = await caches.open("VERSION");
  return cache.addAll([
    "/",
    "/index.html",
    "/assests/index.js",
    "/assests/MediaPlayer.js",
    "/assests/plugins/AutoPlay.js",
    "/assests/plugins/AutoPause.js",
    "/assests/index.css",
    "/assests/BigBuckBunny.mp4",
  ]);
};

const cacheResponse = async (request) => {
  const cache = await caches.open("VERSION");
  const response = await cache.match(request);
  return response || fetch(request);
};

const updateCache = async (request) => {
  const cache = await caches.open("VERSION");
  const response = await fetch(request);
  return cache.put(request, response);
};
