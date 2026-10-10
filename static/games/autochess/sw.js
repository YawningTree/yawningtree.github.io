const CACHE_NAME = 'sot-pwa-v6';

const corePaths = [
  '',
  'index.html',
  'manifest.webmanifest',
  'icons/favicon-32.png',
  'icons/apple-touch-icon.png',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'fonts/fusion-pixel/Fusion-Pixel-12px-Proportional-Simplified-Chinese.css',
  'assets/decor/corner.svg',
  'assets/decor/engraving.svg',
  'assets/decor/grain.svg',
  'assets/decor/moonlit-tavern.webp',
  'assets/effects/acid.webp',
  'assets/effects/aging.webp',
  'assets/effects/badLuck.webp',
  'assets/effects/blast.webp',
  'assets/effects/blind.webp',
  'assets/effects/critical.webp',
  'assets/effects/curse.webp',
  'assets/effects/deathCloud.webp',
  'assets/effects/deathStare.webp',
  'assets/effects/disease.webp',
  'assets/effects/dispel.webp',
  'assets/effects/drain.webp',
  'assets/effects/entangle.webp',
  'assets/effects/fear.webp',
  'assets/effects/fireShield.webp',
  'assets/effects/goodLuck.webp',
  'assets/effects/paralyze.webp',
  'assets/effects/poison.webp',
  'assets/effects/protectionAir.webp',
  'assets/effects/protectionEarth.webp',
  'assets/effects/protectionFire.webp',
  'assets/effects/protectionWater.webp',
  'assets/effects/regen.webp',
  'assets/effects/resurrection.webp',
  'assets/effects/summon.webp',
  'assets/effects/thunder.webp',
  'assets/effects/weakness.webp',
];

const scopeUrl = new URL(self.registration.scope);
const cacheableResponse = (response) => response.ok && response.status === 200;

const cacheUrls = async (cache, urls) => {
  const unique = [...new Set(urls)];
  for (let index = 0; index < unique.length; index += 20) {
    const chunk = unique.slice(index, index + 20);
    await Promise.allSettled(chunk.map(async (url) => {
      const response = await fetch(url, { cache: 'reload' });
      if (cacheableResponse(response) && !response.headers.has('content-range')) await cache.put(url, response);
    }));
  }
};

const collectAssetUrls = (value) => {
  if (typeof value === 'string') {
    return value.startsWith('assets/') || value.startsWith('audio/') ? [value] : [];
  }
  if (Array.isArray(value)) return value.flatMap(collectAssetUrls);
  if (value && typeof value === 'object') return Object.values(value).flatMap(collectAssetUrls);
  return [];
};

const cacheCore = async () => {
  const cache = await caches.open(CACHE_NAME);
  await Promise.allSettled(corePaths.map((path) => cache.add(new Request(new URL(path, scopeUrl), { cache: 'reload' }))));
  try {
    const indexUrl = new URL('index.html', scopeUrl);
    const indexResponse = await fetch(indexUrl, { cache: 'reload' });
    if (!cacheableResponse(indexResponse)) return;
    const html = await indexResponse.clone().text();
    await cache.put(indexUrl, indexResponse);
    const resources = [...html.matchAll(/(?:src|href)="([^"]+)"/g)]
      .map((match) => match[1])
      .filter((value) => !value.startsWith('data:') && !value.startsWith('http'))
      .map((value) => new URL(value, indexUrl).href);
    await cacheUrls(cache, resources);
    const fontCssUrl = new URL('fonts/fusion-pixel/Fusion-Pixel-12px-Proportional-Simplified-Chinese.css', scopeUrl);
    const fontCssResponse = await fetch(fontCssUrl, { cache: 'reload' });
    if (cacheableResponse(fontCssResponse)) {
      const fontCss = await fontCssResponse.clone().text();
      await cache.put(fontCssUrl, fontCssResponse);
      const fontUrls = [...fontCss.matchAll(/url\(([^)]+)\)/g)]
        .map((match) => match[1].replace(/^['"]|['"]$/g, ''))
        .filter((value) => !value.startsWith('data:') && !value.startsWith('http'))
        .map((value) => new URL(value, fontCssUrl).href);
      await cacheUrls(cache, fontUrls);
    }
  } catch {
    // The runtime fetch handler still fills the cache when the shell is online.
  }

  try {
    const manifestPaths = ['assets/h3/manifest.json', 'assets/ui/manifest.json', 'audio/manifest.json'];
    const manifests = await Promise.all(manifestPaths.map(async (path) => {
      const response = await fetch(new URL(path, scopeUrl), { cache: 'reload' });
      if (!cacheableResponse(response)) return null;
      const value = await response.clone().json();
      await cache.put(new URL(path, scopeUrl), response);
      return value;
    }));
    const assetUrls = manifests.flatMap((manifest) => manifest ? collectAssetUrls(manifest) : [])
      .map((path) => new URL(path, scopeUrl).href);
    await cacheUrls(cache, assetUrls);
  } catch {
    // Individual assets are still cached by the runtime fetch handler.
  }
};

const networkFirst = async (request, fallbackUrl) => {
  const cache = await caches.open(CACHE_NAME);
  try {
    const response = await fetch(new Request(request, { cache: 'no-store' }));
    if (cacheableResponse(response)) await cache.put(request, response.clone());
    return response;
  } catch {
    const cached = await cache.match(request, { ignoreVary: true });
    if (cached) return cached;
    if (fallbackUrl) {
      const fallback = await cache.match(fallbackUrl, { ignoreVary: true });
      if (fallback) return fallback;
    }
    return Response.error();
  }
};

const cacheFirst = async (request) => {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request, { ignoreVary: true });
  if (cached) return cached;
  try {
    const response = await fetch(request);
    if (cacheableResponse(response) && !request.headers.has('range')) {
      await cache.put(request, response.clone());
    }
    return response;
  } catch {
    return Response.error();
  }
};

self.addEventListener('install', (event) => {
  event.waitUntil(cacheCore());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener('message', (event) => {
  if (event.data?.type === 'SKIP_WAITING') void self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  const isNavigation = request.mode === 'navigate';
  const isManifest = url.pathname.endsWith('/assets/h3/manifest.json') || url.pathname.endsWith('/audio/manifest.json');
  if (isNavigation || isManifest) {
    event.respondWith(networkFirst(request, new URL('index.html', scopeUrl)));
    return;
  }

  event.respondWith(cacheFirst(request));
});
