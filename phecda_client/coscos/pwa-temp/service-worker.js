    // 定义缓存的名称
    const CACHE_NAME = "h5-cache-v1";

    // 需要缓存的文件列表
    const urlsToCache = [];

    // 安装 Service Worker
    self.addEventListener("install", event => {
        // 执行安装过程，将需要缓存的文件添加到缓存中
        // event.waitUntil(
        //     caches.open(CACHE_NAME).then(cache => {
        //     console.log("缓存已打开");
        //     return cache.addAll(urlsToCache);
        //     })
        // );
    });

    // 激活 Service Worker
    self.addEventListener("activate", event => {
        // 清理旧的缓存
        // event.waitUntil(
        //     caches.keys().then(cacheNames => {
        //     return Promise.all(
        //         cacheNames
        //         .filter(cacheName => {
        //             return cacheName !== CACHE_NAME;
        //         })
        //         .map(cacheName => {
        //             return caches.delete(cacheName);
        //         })
        //     );
        //     })
        // );
    });

    // 拦截并处理请求
    self.addEventListener("fetch", event => {
        // event.respondWith(
        //     caches.match(event.request).then(response => {
        //     // 如果缓存中有匹配的请求，则直接返回缓存的响应
        //     if (response) {
        //         return response;
        //     }
        //     // 否则，使用网络请求
        //     return fetch(event.request);
        //     })
        // );
    });

    // 处理通知
    self.addEventListener("notificationclick", event => {
        console.log("通知被点击");
        // 关闭通知
        event.notification.close();
        // 处理通知点击事件，可以打开特定的页面等操作
        // 例如：event.waitUntil(clients.openWindow('https://example.com'));
    });

    // 监听推送事件
    self.addEventListener("push", event => {
        console.log("接收到推送消息");
        //   const options = {
        //     body: "这是一条推送消息",
        //     vibrate: [100, 50, 100],
        //     data: {
        //       dateOfArrival: Date.now(),
        //       primaryKey: "2"
        //     }
        //   };
        //   event.waitUntil(self.registration.showNotification("Hello World!", options));
    });