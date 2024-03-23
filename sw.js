const cacheName = 'v8';
const RUNTIME = 'runtime'+cacheName;
var contentToCache = [
      "./",
      "./app.js",
      "./index.html",
      "./index.js",
      "./index.css",
      "./about/",
      "./about/index.html",
      "./about/about.js",
      "./about/about.css",
      "./settingsCheck.js",
      "./fastclick.js",
      "./inspect/",
      "./inspect/index.html",
      "./inspect/inspect.js",
      "./inspect/inspect.css",
      "./receiving/",
      "./receiving/index.html",
      "./receiving/receiving.js",
      "./receiving/receiving.css",
      "./receiving/custom/",
      "./receiving/custom/index.html",
      "./receiving/custom/custom.js",
      "./receiving/custom/custom.css",
      "./receiving/letterpractice/",
      "./receiving/letterpractice/index.html",
      "./receiving/letterpractice/letterpractice.js",
      "./receiving/letterpractice/letterpractice.css",
      "./receiving/letters/",
      "./receiving/letters/index.html",
      "./receiving/letters/letters.js",
      "./receiving/letters/letters.css",
      "./receiving/numbers/",
      "./receiving/numbers/index.html",
      "./receiving/numbers/numbers.js",
      "./receiving/numbers/numbers.css",
      "./receiving/punctuation/",
      "./receiving/punctuation/index.html",
      "./receiving/punctuation/punctuation.js",
      "./receiving/punctuation/punctuation.css",
      "./receiving/sentencepractice/",
      "./receiving/sentencepractice/index.html",
      "./receiving/sentencepractice/sentencepractice.js",
      "./receiving/sentencepractice/sentencepractice.css",
      "./receiving/wordpractice/",
      "./receiving/wordpractice/index.html",
      "./receiving/wordpractice/wordpractice.js",
      "./receiving/wordpractice/wordpractice.css",
      "./sending/",
      "./sending/index.html",
      "./sending/sending.js",
      "./sending/sending.css",
      "./sending/custom/",
      "./sending/custom/index.html",
      "./sending/custom/custom.js",
      "./sending/custom/custom.css",
      "./sending/letterpractice/",
      "./sending/letterpractice/index.html",
      "./sending/letterpractice/letterpractice.js",
      "./sending/letterpractice/letterpractice.css",
      "./sending/letters/",
      "./sending/letters/index.html",
      "./sending/letters/letters.js",
      "./sending/letters/letters.css",
      "./sending/numbers/",
      "./sending/numbers/index.html",
      "./sending/numbers/numbers.js",
      "./sending/numbers/numbers.css",
      "./sending/punctuation/",
      "./sending/punctuation/index.html",
      "./sending/punctuation/punctuation.js",
      "./sending/punctuation/punctuation.css",
      "./sending/sentencepractice/",
      "./sending/sentencepractice/index.html",
      "./sending/sentencepractice/sentencepractice.js",
      "./sending/sentencepractice/sentencepractice.css",
      "./sending/wordpractice/",
      "./sending/wordpractice/index.html",
      "./sending/wordpractice/wordpractice.js",
      "./sending/wordpractice/wordpractice.css",
      "./settings/",
      "./settings/index.html",
      "./settings/settings.js",
      "./settings/settings.css",
      "./translator/",
      "./translator/index.html",
      "./translator/translator.css",
      "./translator/translator.js"
]

self.addEventListener('install', (event) => {
  // prevents the waiting, meaning the service worker activates
  // as soon as it's finished installing
  // NOTE: don't use this if you don't want your sw to control pages
  // that were loaded with an older version
  self.skipWaiting();

  event.waitUntil((async () => {
    try {
      // self.cacheName and self.contentToCache are imported via a script
      const cache = await caches.open(self.cacheName);
      const total = self.contentToCache.length;
      let installed = 0;

      await Promise.all(self.contentToCache.map(async (url) => {
        let controller;

        try {
          controller = new AbortController();
          const { signal } = controller;
          // the cache option set to reload will force the browser to
          // request any of these resources via the network,
          // which avoids caching older files again
          const req = new Request(url, { cache: 'reload' });
          const res = await fetch(req, { signal });

          if (res && res.status === 200) {
            await cache.put(req, res.clone());
            installed += 1;
          } else {
            console.info(`unable to fetch ${url} (${res.status})`);
          }
        } catch (e) {
          console.info(`unable to fetch ${url}, ${e.message}`);
          // abort request in any case
          controller.abort();
        }
      }));

      if (installed === total) {
        console.info(`application successfully installed (${installed}/${total} files added in cache)`);
      } else {
        console.info(`application partially installed (${installed}/${total} files added in cache)`);
      }
    } catch (e) {
      console.error(`unable to install application, ${e.message}`);
    }
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const cacheNames = await caches.keys();

    await Promise.all(cacheNames.map(async (cacheName) => {
      if (self.cacheName !== cacheName) {
        await caches.delete(cacheName);
      }
    }));
  })());
});

self.addEventListener('fetch', event => {
  // Skip cross-origin requests, like those for Google Analytics.
  if (event.request.url.startsWith(self.location.origin)) {
    event.respondWith(
      caches.match(event.request).then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return caches.open(RUNTIME).then(cache => {
          return fetch(event.request).then(response => {
            // Put a copy of the response in the runtime cache.
            return cache.put(event.request, response.clone()).then(() => {
              return response;
            });
          });
        });
      })
    );
  }
});

