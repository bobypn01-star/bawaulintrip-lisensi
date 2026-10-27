const VERSI='adm-v2';
self.addEventListener('install',e=>{e.waitUntil(caches.open(VERSI).then(c=>c.addAll(['./','index.html','manifest.json','icon-192.png'])));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!=VERSI).map(x=>caches.delete(x)))));self.clients.claim()});
self.addEventListener('fetch',e=>{if(e.request.method!='GET'||new URL(e.request.url).origin!=location.origin)return;e.respondWith(fetch(e.request).then(r=>{const c=r.clone();caches.open(VERSI).then(x=>x.put(e.request,c));return r}).catch(()=>caches.match(e.request)))});
