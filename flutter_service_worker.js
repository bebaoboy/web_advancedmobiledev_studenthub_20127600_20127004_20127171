'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "64eebb75b901296e42efce5175cb67c4",
"assets/AssetManifest.bin.json": "53c923f943d078654739a74585ed93ed",
"assets/AssetManifest.json": "7f3fd7226138a2a75de3cf810dc835e3",
"assets/assets/animations/loading_animation.json": "383eb2d43c7c7b03cd45b858b65c154a",
"assets/assets/animations/splash_animation.json": "288a437a031d406515cbb9efd6a0796c",
"assets/assets/fonts/Product-Sans-Bold.ttf": "dba0c688b8d5ee09a1e214aebd5d25e4",
"assets/assets/fonts/Product-Sans-Italic.ttf": "e88ec18827526928e71407a24937825a",
"assets/assets/fonts/Product-Sans-Regular.ttf": "eae9c18cee82a8a1a52e654911f8fe83",
"assets/assets/ice_cream_indicator/cup.png": "d4c7fc8a08e71f88d1b3bf5ec36190f7",
"assets/assets/ice_cream_indicator/cup2.png": "0c1cf68297df1cd32991d21ccf4d16fc",
"assets/assets/ice_cream_indicator/ice1.png": "22f6e61ea17a955bf8424c6a63434a8e",
"assets/assets/ice_cream_indicator/ice2.png": "707dabb67a7910ea1ddd9de2b2141fe6",
"assets/assets/ice_cream_indicator/ice3.png": "37bec7220409fc7d936fdf52342f70e6",
"assets/assets/ice_cream_indicator/mint.png": "844dbeaeac6b3ad764201561de2d5024",
"assets/assets/ice_cream_indicator/spoon.png": "c5ffd86e70f7d418c1e4d2a82ed4c500",
"assets/assets/icons/ic_appicon.png": "a50eee0ebdb04210ed23c66740d6f714",
"assets/assets/icons/ic_launcher.png": "d0c64f4d3eb917adf19854fdd71ae514",
"assets/assets/images/error.jpg": "9f168fa77056e4a8c5189df678d67a70",
"assets/assets/images/img_login.jpg": "5dcf9a3c7fd548c74237956bbef7e203",
"assets/assets/images/img_login.png": "1c9448a14b413a7eb171f7a2c3ad772e",
"assets/assets/images/img_no_jobs.png": "1eda0e0ab2f96ab0ed773deb4a1838d1",
"assets/assets/lang/da.json": "119188cd30a4c2f428c42da638b1b251",
"assets/assets/lang/en.json": "63404cb4abb76a56265e018002fd8498",
"assets/assets/lang/es.json": "119188cd30a4c2f428c42da638b1b251",
"assets/assets/lang/vi.json": "01396ff2a3e57e4e2801b42b64ddce56",
"assets/assets/messages.json": "9016af3aaa50bd0678cc269e4cb6521c",
"assets/assets/plane_indicator/cloud1.png": "136efc4db543d4f6fa78e5b3ed695cdc",
"assets/assets/plane_indicator/cloud2.png": "a9912c93911e938d58131b7fb07b34f3",
"assets/assets/plane_indicator/cloud3.png": "0e663b4f9630f0d13942a5e0cb1641ea",
"assets/assets/plane_indicator/cloud4.png": "2fa64f60a94c34c631d48051733f5e55",
"assets/assets/plane_indicator/plane.png": "36c859c87c2e772c608dfbaf658d1de4",
"assets/FontManifest.json": "29e1b577309f713b789db1f02e2f0f17",
"assets/fonts/MaterialIcons-Regular.otf": "dc144d7e82a05f475f1491c2261714df",
"assets/NOTICES": "658df30c4c5522a6b57a3adf10a484db",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "83c878235f9c448928034fe5bcba1c8a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"firebase-messaging-sw.js": "4d96f2126bf1167647ed6a934e7a4c1a",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "995d4dbf9d7cd0c741e1c3872dee847e",
"/": "995d4dbf9d7cd0c741e1c3872dee847e",
"main.dart.js": "7d0059a7f6d84b092e9b970c2777960f",
"manifest.json": "5f8ae9d402334e81a07e3e013d3e71cd",
"version.json": "0e26decff0390bd327309cdc28beed3c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
