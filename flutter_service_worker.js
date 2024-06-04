'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "92c046928943cd49d5e6a3b54630ba08",
"assets/AssetManifest.bin.json": "1da8564dbe17069c3ea7030fbb8cc097",
"assets/AssetManifest.json": "99980d8903b57a38206f50b5de93d872",
"assets/assets/icon/Add%2520to%2520cart.svg": "068487d4a19d23c4e5606169dab9eb34",
"assets/assets/icon/Add.svg": "51f5672098ca8a893354dc00744d2b37",
"assets/assets/icon/Arrow%2520Left.svg": "2d8873d871b06ee59388038f569c505c",
"assets/assets/icon/Arrow%2520Right.svg": "1926833317be524b24423efbc55a898f",
"assets/assets/icon/Arrow%2520up.svg": "1aa813d866479ca4eb6d4df59ee089ec",
"assets/assets/icon/Cart.svg": "e3f24af9e596864a13010322687f3fe9",
"assets/assets/icon/Check.svg": "bb6778a095376b9dd63a98f7b5a7c274",
"assets/assets/icon/Chevron%2520Down.svg": "e520a775516075c6063720005d44aa8b",
"assets/assets/icon/Chevron%2520Left.svg": "5a9de789f53a8ed5b87a360d188230f8",
"assets/assets/icon/Chevron%2520Right.svg": "b1f8b3916bf618cf2a6bd56b56376862",
"assets/assets/icon/Copy.svg": "a1e17edf3e46f271f5cbee13797d0655",
"assets/assets/icon/Dashboard.svg": "d71edd88eee02a7d8f4734700dd92ad1",
"assets/assets/icon/Delivery.svg": "b590a893e767cc3a992a9cecb1ae9f0e",
"assets/assets/icon/Empty%2520Star.svg": "4585f6d4f9ea98552cf1e82760cfb42c",
"assets/assets/icon/Facebook.svg": "66970b1176c7260ff54a15f8a651cef3",
"assets/assets/icon/Heart.svg": "5d9d9ba1e23f39a6067d3de331952d44",
"assets/assets/icon/Home.svg": "4e6cb933f75ac940162c606c98019462",
"assets/assets/icon/Icon%2520Container.svg": "373d59950f70c3ac95cbe8a7131ebc1d",
"assets/assets/icon/Info.svg": "ce5f0e285dc1bda184d4bd3d5b8316e6",
"assets/assets/icon/Instagram.svg": "802f8c378e3f46fd11f6063a0d6578ec",
"assets/assets/icon/Key.svg": "ba94ba820352af045c4f5cda240e4772",
"assets/assets/icon/logo.png": "09763c3db9dedc13a0a16dac9298393c",
"assets/assets/icon/Logout.svg": "f51d6e1f0f7c9b1a6902e12dc3d89689",
"assets/assets/icon/Menu.svg": "95f405af23328bf6b6e83b8a345fbc68",
"assets/assets/icon/Minus.svg": "66e3ed42c9e93f35ef775d873fd21e38",
"assets/assets/icon/More.svg": "cd3d15932933af337f32ef3212457e21",
"assets/assets/icon/Product.svg": "66fd160348e52455a3d0bb1d795daebb",
"assets/assets/icon/Search.svg": "62a3da6a76b5376ad01164b9802708ee",
"assets/assets/icon/Settings.svg": "9c25d9283bf41a6285bf955f6fc6d346",
"assets/assets/icon/Share.svg": "b38d1f8dadeb64aa656826a2c2485775",
"assets/assets/icon/Shield%2520Check.svg": "d7245d3530cc8e4e83e75a934b1e8277",
"assets/assets/icon/Sort.svg": "667ec4b45c62c5d6ecca4bc53bcf891a",
"assets/assets/icon/Star%2520Badge.svg": "d4a8303907ee72d11c6f1cc1853a035f",
"assets/assets/icon/Star.svg": "cfee3f01f8c37371d5dcda424f30035d",
"assets/assets/icon/Telegram.svg": "02c1adc36d233ca9f752af2c7226173f",
"assets/assets/icon/Upload.svg": "7f1eb94fc76922e961a6ace9b05f48be",
"assets/assets/icon/User.svg": "6d9649c9521cf7afdb91a6217d81be24",
"assets/assets/icon/Users.svg": "69717b11e2996df419242140556b4cd0",
"assets/assets/icon/User_border.svg": "bc1052a655f867d7e1e4dab474b49f6e",
"assets/assets/icon/Warning.svg": "ef5889eed2a7d1473647b795e130ef85",
"assets/assets/icon/Whatsapp.svg": "cd545253d2c5a93bdaf4d623c60d4ed6",
"assets/assets/icon/X.svg": "cf4fb63348d77946c07cfd80ccb6adaa",
"assets/assets/images/clothes.png": "5ccdc9fa950418f3d921599f107d3bd5",
"assets/assets/images/failed_checkout.png": "28bc4262967beacd9d9937713e7d5571",
"assets/assets/images/Fashion.png": "fd9fe1bd8104a277aef762b994cb8d5f",
"assets/assets/images/fresh.png": "1e81667f4e665a4e2bfc40eb65e2bf2a",
"assets/assets/images/success_checkuot.png": "45717a9cec708d91bdfcaa1887974963",
"assets/FontManifest.json": "7df10702a8c60a62e6694f43081d46e7",
"assets/fonts/MaterialIcons-Regular.otf": "6fd1c90975305e39d871fdbcfdcfa142",
"assets/NOTICES": "bea69ebf30d8a14aa028ff32f6ac4a74",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
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
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2154d425ccbf3b1a4e9a74374a427c30",
"/": "2154d425ccbf3b1a4e9a74374a427c30",
"main.dart.js": "e79f1effdeb98a12fd96687e592ec400",
"manifest.json": "45a5aebb1f7395d211c127ddfa687d3d",
"version.json": "721ef5c65ea3a9bd9e37da8199811d50"};
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
