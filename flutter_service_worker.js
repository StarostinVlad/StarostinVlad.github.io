'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "2f3323bc69b932d59b9b697905a8315a",
".git/config": "08873ae53ac3eb7fd686ec8a437b069d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "300ecd0eb46a007b1d1f665c22a8acef",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9097d42ec2a4d04366da208041bc7900",
".git/logs/refs/heads/master": "9097d42ec2a4d04366da208041bc7900",
".git/logs/refs/remotes/origin/master": "785536045e508ec3c01748e110234a5e",
".git/objects/00/7d0b6cdd8283e57ba385eed0d04cd014d9cde8": "7a1941dee4f5c9257bbcd5e100617b9b",
".git/objects/13/132628ca1e202970a52ab6b6c0cdd352717102": "910230590f319c357f998645c6d94fad",
".git/objects/13/5a3f566ef0f67f055309dc4ab65aa26ac69967": "b9e902e0488ad9c20b4e1c6698a09098",
".git/objects/14/ba9b940b58b1a40a808e2058c16ff9b2e71b85": "641fc27dd378e96ec234228ff3b04c2c",
".git/objects/1e/8ec5977e0b1a96e8764c823bb0b7cbf8be3a80": "b470b2481adba8959fc6a3f96f80ce4a",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/24/d02a8bc41285b7e400741c19908271ebe1c1b5": "457e13729d01592a3f5d1ed9afd49488",
".git/objects/27/d6ea25121a188d74d67287063cfefa58d47757": "34c2adfcb4d27f1874663ec09104ad90",
".git/objects/30/a288ea39c4a1f0248c1fe8e76c2059393f1d4b": "f30a8b91b39d9810961240715f56be02",
".git/objects/31/d4f325225b439122e50145c7b7b2494b420fc6": "9ce75458e4604e6a48621f86cb6322c0",
".git/objects/38/6704911a2a5545a4d42495b4ac3ec8a804d3d0": "5c842dcc3037cc39dc0a6031711f4c88",
".git/objects/3e/a9513f09352d6b0a7d107d6d94f2813b40a984": "f52edfc47bc3275b4378e2a399bdadb4",
".git/objects/4c/30bf28b0558bbcb6e588947ae7f8014639647d": "0924242a961ef3db366d64b985d49674",
".git/objects/4d/8a078a049e12b9e70d2ecf3e6b57e4656fde49": "ed9fc00e92c1c01643b95a5a09fe90e5",
".git/objects/51/e376e73005b4a754583d1eea58c48e10233f55": "e11c84f1be5845dcfdf8ae25ba3883de",
".git/objects/52/0db953c6a50cb40b482a03908b96404fd90b87": "01aa77d6f0f138ab73f64b2545fdaf38",
".git/objects/53/54e4035354d0e17bb3ca9a270f0718adc1cfed": "5f54cf49943e84e7d98b47eaf8b0b39f",
".git/objects/5c/ab0f911f7e40e0eca1beb326b692371771bfc7": "f13ac1651d3dea7713a6860abf1338b4",
".git/objects/66/5e15acf17dcf2ef9199cef0dfe81fb1420eca3": "584dbce3240e4d13fd272efbffa7ecf0",
".git/objects/6c/41aab2b8a51f7fc60b554231949f1352cb1b1f": "24099b04ca45fc2f1688b329268a7f4c",
".git/objects/6d/6cdc4889fcef09d8e8be71fa232ec83e281305": "65308cd02e955f8ea32299fd3ed5bc53",
".git/objects/84/62fe61f0316db2c5f423ee6eb58d9468cb8dcb": "b688da79ec22c6ecb7485e79c51bca92",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/ffabe98f02a65c1601cdc6bd9706a2f255cb62": "d68425618c51b3800519de5528ed9c6b",
".git/objects/8e/24ca4ebc597161883b7aafa5ef8be58fb777a4": "2f2dbab3b88097616431170919398850",
".git/objects/9f/be3ba84b7c2450f67ad2e5ecc7e58adc90dc23": "6a3e96ec71edf69f87ad50983c5edfe8",
".git/objects/a0/144145760aa5dc0dea09c30cf0abd0ae9f753d": "d1f61643b72dc629d888201e0040ceee",
".git/objects/a5/9586c6425677d09a3f9d69fcfc99656c0eccf1": "43b4acc1333c2635b8e7e6915ddbb735",
".git/objects/ab/af8d5ff3ecd7e3219e6769a0ad8b24cf3f1237": "803408dd0c297f7f0b07c5aea7edee5c",
".git/objects/ad/8671ab790294304a3713f019857f693c33bc1a": "53ca1e2a947e107284a036d75d66b6b7",
".git/objects/ae/dcca611f12c96a887a8d76de63ac428157621a": "06b4acbe033f7ea199dcd6c33a48e7b7",
".git/objects/b1/43cdcfac16d43e5eef7de1c70fed33f2acf186": "2a758a7216fea09a615777dc02e12e60",
".git/objects/b2/7565f857cb894f1cefb370de74fb6ac1814b29": "0b4868561b526a22dcad261127df056c",
".git/objects/b4/cb2046db8270443c1796b3ea4e6ed143232962": "8d110b6d7ab67055c9fae89890b73453",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/b063be7ff6f43f475a2fa327d3fea1eb6ab663": "6700c13713253ad406df5a44fc920acc",
".git/objects/c3/24494e0c2e0daa74973549c8ddab520520f786": "07229796b30f75991604c9b2c38e7a02",
".git/objects/cc/dadb259a8d1b488c9c346e21d9bf2b79e24a89": "85793eabf0fe75440fbd80b754a6b0a9",
".git/objects/da/dd86dd70812c9f4212172ef1671785a94ce438": "92cf472a8bcd2f36c21379ad48e35c1b",
".git/objects/dd/7214b3c289dcde40fb6c6b6d103327ffd8c21a": "8c30642045a3da30768ef92885e3b707",
".git/objects/e3/56aad9b94ad5f0afcde50667f6a9e1ff9aea4e": "9ce838f33a891340ef93f92f813a5d1c",
".git/objects/e5/05114322a8c62d01ae1b9f42cf3d01eae359e5": "62becade7a840edb79177d22fc52c501",
".git/objects/e6/79c35fcd432146744751c945cace9ef367add1": "7304e578628684461836a21c5fd668ae",
".git/objects/ed/c8ebfb807e7e52b10aaae166671635ea8f3eb8": "a2a1e1d6a2025bfdca028be7b9afdb87",
".git/objects/f1/a07e13e7df155ca7e0cb7b2245290e75be8472": "e58a81777721af18e04c38fc7106352e",
".git/objects/f6/08abae6d09e5be12e1cecc8ca5ffd2eb438486": "1895524801515206d25148b59eb95391",
".git/objects/f7/7dd8b9277193c545c17793c8cddaf6cc18d601": "98026d71af5f6d6211776bff104b5fc7",
".git/objects/fe/2bfcf95c1c341704e5d266a433b006efec5617": "19c6f6427a9329c00cc6642a04660850",
".git/objects/fe/66c4f40308249460ff6138e373779ae9898bf1": "a4475b2f60b78bb73c2f61b7c237d8b1",
".git/objects/ff/3a3fdadacd14d028adf5ccb3937c9fbd82fda8": "61c64a51203d5f6970a4d146edc4e4d9",
".git/refs/heads/master": "2b264a76587923d75f63e12020a842e5",
".git/refs/remotes/origin/master": "2b264a76587923d75f63e12020a842e5",
"assets/AssetManifest.json": "45aeefb0c5fbb53b73d5e2720d984970",
"assets/FontManifest.json": "62e96407555d8467f98a732956873175",
"assets/fonts/american.ttf": "7552ef7a86da32cc1282acb165e982d7",
"assets/fonts/MaterialIcons-Regular.otf": "a68d2a28c526b3b070aefca4bac93d25",
"assets/images/logo.svg": "146055cb7d5d85ae6009474b758dcc37",
"assets/images/logo2.svg": "77e2b6fec6cc088dc1278a61c8d4ed33",
"assets/images/logo3.svg": "220435c3c35100e526821ececf14befb",
"assets/images/logo4.svg": "1442483e94c06f9af2964eeddab13986",
"assets/images/vybor.png": "70c4fb4c389dc888917671ef834572bb",
"assets/NOTICES": "4a3fa96dcc4be13de03d65e1b96307f5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "bbab6b22add5b05c072dabb2fc627882",
"/": "bbab6b22add5b05c072dabb2fc627882",
"main.dart.js": "0b75680a4343a6d0c482772ba24c56d0",
"manifest.json": "367e39bca4b188623d433a7e52f1d11f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'reload'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
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
    return self.skipWaiting();
  }

  if (event.message === 'downloadOffline') {
    downloadOffline();
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
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
