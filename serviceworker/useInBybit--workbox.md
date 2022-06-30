1.  Workbox的接入方案。
CDN / npm包

参考：

workbox-webpack-plugin： https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin

next-with-workbox ：https://github.com/cansin/next-with-workbox

https://www.tiktok.com/en/

https://gist.github.com/jeffposnick/fc761c06856fa10dbf93e62ce7c4bd57

https://medium.com/a-layman/turn-the-next-js-website-to-pwa-with-workbox-part-1-web-app-manifest-and-caching-offline-support-e6d94330b8f2

https://github.com/hanford/next-offline

2. Workbox缓存的策略选择以及缓存内容选择以及相关缓存期限选择。（html，CSS，font， images, JS， 第三方库等）
缓存策略优先选择 NetworkFirst 和 CacheFirst。
参考：https://developers.google.com/web/tools/workbox/guides/common-recipes
https://developers.google.com/web/tools/workbox/modules/workbox-strategies?hl=en
缓存内容：html，CSS，font，images, JS， 第三方库等。
参考网站：
https://www.iq.com/
https://www.tiktok.com/sw.js
https://www.jijian.link/


3. Workbox缓存接入的具体项目。
具体项目: byfi/task-center/loyalty/referral （后续会扩充）

测试项目： referral/loyalty （测试实验项目） arian.shi  yangyang.zhang 

4.Workbox其他注意事项（scope、next抽离等问题）。
1. scope作用域问题。

2.APP里面缓存量问题。

3.server worker 更新问题。

4.字体统一修改IBM问题。

5.共有库的缓存机制、nextJS抽取缓存问题。