// App-shell service worker. The page: network first, revalidated with the server, so a deploy shows
// on the next open; offline, the cached shell. Hashed build assets: cache first, since their names
// change whenever their content does. Other static files: stale-while-revalidate. API calls go to
// another origin and are never cached: money is always live. The build stamps VERSION, so every
// deploy installs a new worker that takes over at once and drops the old caches. The old worker can
// still answer a request that was already on its way, and `caches.open` would bring its deleted
// cache back, so a worker only touches its own cache while that cache still exists.
const VERSION = "e83a46295bd41046";
const CACHE = `gmbet-${VERSION}`;
const SHELL = new URL("./", self.location.href).href;
// The build lists the first load and the offline Home; an unstamped copy lists nothing.
const PRECACHE = "assets/index-Byoe_mdm.css assets/index-Dp_UJn5c.js assets/state-names-CPBZzWwi.js assets/states-6_Vt0AKs.css assets/states-D5-qRqMX.js".split(" ").filter((f) => f.startsWith("assets/"));

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE)
      .then((c) =>
        c
          .addAll([new Request(SHELL, { cache: "reload" }), "./manifest.webmanifest"])
          .then(() => Promise.all(PRECACHE.map((f) => c.add(`./${f}`).catch(() => undefined)))),
      )
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then(() => self.clients.claim())
      .then(() => caches.keys())
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))),
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  const url = new URL(req.url);
  if (req.method !== "GET" || url.origin !== self.location.origin) return;
  if (req.mode === "navigate" || url.href === SHELL || url.pathname.endsWith(".html")) {
    event.respondWith(page(req));
  } else if (url.pathname.includes("/assets/")) {
    event.respondWith(cacheFirst(req));
  } else {
    event.respondWith(staleWhileRevalidate(req));
  }
});

async function ownCache() {
  return (await caches.has(CACHE)) ? caches.open(CACHE) : null;
}

async function page(req) {
  const cache = await ownCache();
  try {
    const res = await fetch(req, { cache: "no-cache" });
    if (res.ok) await cache?.put(SHELL, res.clone());
    return res;
  } catch {
    return (await cache?.match(SHELL)) ?? Response.error();
  }
}

async function cacheFirst(req) {
  const cache = await ownCache();
  // A hashed file is the same answer for every request, so `Vary: Origin` must not hide the copy
  // the install stored from the module request, which carries an Origin header.
  const hit = await cache?.match(req, { ignoreVary: true });
  if (hit) return hit;
  const res = await fetch(req);
  if (res.ok) await cache?.put(req, res.clone());
  return res;
}

async function staleWhileRevalidate(req) {
  const cache = await ownCache();
  const hit = await cache?.match(req);
  const fresh = fetch(req).then((res) => {
    if (res.ok) void cache?.put(req, res.clone());
    return res;
  });
  return hit ?? fresh;
}
