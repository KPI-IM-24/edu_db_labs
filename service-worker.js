/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "52afc0164095bc0266120bc39608f185"
  },
  {
    "url": "assets/css/0.styles.34412d39.css",
    "revision": "30b10fe6d5182f126d10b3ee81d81db2"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.5fa08e7a.js",
    "revision": "0b651dba82937d8efb564d7cec104851"
  },
  {
    "url": "assets/js/10.8cce708e.js",
    "revision": "2f34b9cbe12337412834fccac6ceb6b1"
  },
  {
    "url": "assets/js/13.1d82e79b.js",
    "revision": "3bea903a38820c3f48796889b0c5a91e"
  },
  {
    "url": "assets/js/14.ab737246.js",
    "revision": "994bc8d202178e123ae10e50dca30e15"
  },
  {
    "url": "assets/js/15.4663c330.js",
    "revision": "f337dac73ff6a8aa5b8ffde4c52761ea"
  },
  {
    "url": "assets/js/16.5a1e189e.js",
    "revision": "7e6bf95313342c5b9a23f02ea4edd697"
  },
  {
    "url": "assets/js/17.35fb9b87.js",
    "revision": "296ba1f6270cc8de58ad8b1ea50e1a7e"
  },
  {
    "url": "assets/js/18.2296b0a7.js",
    "revision": "01b984cd1598200678d88ba910b67125"
  },
  {
    "url": "assets/js/19.290bc511.js",
    "revision": "5f239328245b3ed461c26db49a6a2bac"
  },
  {
    "url": "assets/js/2.c1779fe0.js",
    "revision": "5acea1bbe77e4227c76040672c94fcae"
  },
  {
    "url": "assets/js/20.02394e1e.js",
    "revision": "d2bbabe0ef13382375ee9cb005ca508a"
  },
  {
    "url": "assets/js/21.b729a4b4.js",
    "revision": "e31ec7e33907037b24bdff4f49fadf7c"
  },
  {
    "url": "assets/js/22.5333e7ef.js",
    "revision": "d12852921998b37ee1c764ba3bb10332"
  },
  {
    "url": "assets/js/23.2864a5a6.js",
    "revision": "98aa5d57c33277efdc491265062608e2"
  },
  {
    "url": "assets/js/24.d335c628.js",
    "revision": "e5ffe4306474b10b0ac22a5e5183ae98"
  },
  {
    "url": "assets/js/25.73e6b4e3.js",
    "revision": "5c827516918ba60e721e926a9e6c9827"
  },
  {
    "url": "assets/js/26.0cf003e9.js",
    "revision": "70a47780f9ce567b6368299bc9a13e5e"
  },
  {
    "url": "assets/js/27.5ee11b45.js",
    "revision": "b9c2efba50938f6e8dc7d2327a58c213"
  },
  {
    "url": "assets/js/28.6648b208.js",
    "revision": "7611ff6a273b7235ed02ac710dc4cb13"
  },
  {
    "url": "assets/js/29.b0f6f732.js",
    "revision": "ecc988b6c80f33cc04f76f45a251b187"
  },
  {
    "url": "assets/js/3.646381c9.js",
    "revision": "37d07f64e0f4148d4024c471070c852f"
  },
  {
    "url": "assets/js/30.4670e425.js",
    "revision": "ec032663481843cc471e22bdd4df0376"
  },
  {
    "url": "assets/js/31.45277539.js",
    "revision": "1d933cb89e269f402e1c749f06cfd2dd"
  },
  {
    "url": "assets/js/32.dfdac228.js",
    "revision": "5677f911fe21dcc9c77ca1f32ea7fde2"
  },
  {
    "url": "assets/js/33.5865616c.js",
    "revision": "6d1253741e514d5b296b92ba6b025972"
  },
  {
    "url": "assets/js/34.307e109c.js",
    "revision": "b34bcb69d29070d5835edfb839f3462b"
  },
  {
    "url": "assets/js/35.155bbc7c.js",
    "revision": "56f5eaea812a5317592311daf54ef5bc"
  },
  {
    "url": "assets/js/36.05dc5218.js",
    "revision": "565b270aaf51ef943ab839dc383d49f6"
  },
  {
    "url": "assets/js/37.2119e26f.js",
    "revision": "2b8cb4779ced322549bc7e3d08f0f85c"
  },
  {
    "url": "assets/js/38.d3e7b478.js",
    "revision": "002ed7295970c1a87cbb0728656ad302"
  },
  {
    "url": "assets/js/39.91ec280d.js",
    "revision": "4a0270f44ae23cd6c46274e890f28df2"
  },
  {
    "url": "assets/js/4.dc881234.js",
    "revision": "16cf1eaba38b073785a22c8afe544b27"
  },
  {
    "url": "assets/js/41.18daa216.js",
    "revision": "bebaba473198da5ec8c295541926802a"
  },
  {
    "url": "assets/js/5.d1bd77b8.js",
    "revision": "2e583c8f2bea05e82f973bbfaeae7aaf"
  },
  {
    "url": "assets/js/6.e570e004.js",
    "revision": "c9a0ff51c077bb8d94692352ee00b661"
  },
  {
    "url": "assets/js/7.876b0b19.js",
    "revision": "38d97fa89b81d2b447fe66b6752e8714"
  },
  {
    "url": "assets/js/8.e3bd0127.js",
    "revision": "7ab8abdbce0ba73feee312aaad576cd9"
  },
  {
    "url": "assets/js/9.6bf2d6e4.js",
    "revision": "adab463133351317e261f11c723ee497"
  },
  {
    "url": "assets/js/app.80375971.js",
    "revision": "88542da34f1b8fed54fd1bae771a63fd"
  },
  {
    "url": "assets/js/vendors~docsearch.df13434b.js",
    "revision": "cf0ad8136632d4442e69d96862099c87"
  },
  {
    "url": "conclusion/index.html",
    "revision": "7132c1956b045b37a0ff4084b1a4c5ef"
  },
  {
    "url": "design/index.html",
    "revision": "0cf3dc90f081b0f62a0315f2147d9e29"
  },
  {
    "url": "index.html",
    "revision": "9a3d62f1f72d2cc00b2b3e8ed516dc18"
  },
  {
    "url": "intro/index.html",
    "revision": "86cdfc50b03711cc4171ba5300a539e2"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "74ea53db1e41691c5acbadc65c0dfc9b"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "0ba61b8eafd63c76b0a0190bf14ff67b"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "f7236fb36f4cea1128e1c9fea3856a12"
  },
  {
    "url": "software/index.html",
    "revision": "44da3f94a5fca36d4aae17ff8beb8da5"
  },
  {
    "url": "test/index.html",
    "revision": "3b748391e3e2fd8b1f5908d618e73a08"
  },
  {
    "url": "use cases/index.html",
    "revision": "9a7e3c8aab34af06a12754c21cc79854"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
