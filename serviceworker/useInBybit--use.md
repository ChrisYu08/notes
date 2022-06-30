为了Web 体验更佳，使得页面能够访问更快，接入workbox来做相应的缓存。

Workbox 提供了两个webpack插件：一个为您生成完整的 Service Worker，另一个生成要预缓存的资产列表，并注入到 Service Worker 文件中。

插件在workbox-webpack-plugin模块中实现为两个类，named GenerateSW和InjectManifest. 具体介绍可以参考 <a href="https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin">developers SW</a>

我们使用GenerateSW

使用
## 1.在 _app.tsx 中注册Workbox生成的service worker。

```js
import { basePath, isProduction, isTestnet } from '../env';
useEffect(() => {
    if ('serviceWorker' in navigator ) {
      window.addEventListener('load',  ()=> {
        const canUseServerService = (isTestnet || isProduction);
        if (canUseServerService) {
          try {
            registerServiceWorker();
          } catch (e) {
            unRegisterServiceWorker();
          }
        }
      });
    }
  }, []);
   
    const registerServiceWorker = () => {
    // basePath 是页面访问的路径
    const swPath = `${basePath}/service-worker-${process.env.BUILD_VERSION}.js`;
    const swScope = `/${locale}${basePath}`;
    navigator.serviceWorker
      .register(swPath, { scope: swScope })
      .then(
        (registration) => {
          console.log('Service Worker registration success', registration);
        })
      .catch((registrationError) => {
        console.log('Service Worker registration failed', registrationError);
      })
  }
  const unRegisterServiceWorker = () => {
    navigator.serviceWorker.getRegistrations().then((registrations) => {
      let registration;
      for (let i = 0; i < registrations.length; i++) {
        registration = registrations[i];
        registration && registration.unregister();
      }
    })
  }
```
 注意：

   1. 其中的basePath 是：process.env.BASE_PATH 可以把export const basePath = `${process.env.BASE_PATH}`; 放在 env 文件夹下面的index里面。

   2. basePath 是页面访问的路径 比如：https://testnet.bybit.com/zh-CN/referral/。 basePath 是  /referral  前面有 /


## 2. package.json安装workbox的插件。
yarn add workbox-webpack-plugin
```js
"workbox-webpack-plugin": "^6.4.2"
```

## 3. next.config.js 配置webpack插件，以及缓存相关策略以及缓存时间的配置。
```js
const webpack = require('webpack'); // 已有则不需要在添加
const WorkboxPlugin = require('workbox-webpack-plugin');
const path = require("path"); // 已有则不需要在添加
const USE_WORKBOX_PLUGIN = env === ENV_MAP.TESTNET || env === ENV_MAP.PRODUCTION; // 判断构建环境是否为testnet/prod，非testnet/prod环境不生成sw文件
const APP_NAME = 'referral-v2'; // 项目名称即打包之后dist 文件夹下面的项目名字 （若一样可以共用一个变量）
const ROUTE_NAME = 'referral'; // 页面访问的路径 （若一样可以共用一个变量）
const BUILD_VERSION = new Date().getTime(); //
const SW_DEST_PATH = path.join(__dirname, '..', '..', `dist${env === ENV_MAP.PRODUCTION ? '/' : `/${env}/`}apps/${APP_NAME}/.next/public`); // 取项目名称
const workboxPlugin = new WorkboxPlugin.GenerateSW({
  exclude: [/\.json$/], // 忽略next默认生成的无用中间产物
  swDest: path.join(SW_DEST_PATH, `service-worker-${BUILD_VERSION}`),// SW文件生成的地址
  skipWaiting: true, // 强制等待中的Service Worker被激活
  clientsClaim: true, // Service Worker 被激活后使其立即获得页面控制权
  cleanupOutdatedCaches: true,
  runtimeCaching: [
    {
      urlPattern: new RegExp(`.*([a-z]{2}-[A-Z]{2})\\/${ROUTE_NAME}(\\/|)`), // 取页面访问的路有地址
      handler: 'NetworkFirst', // 网路优先
      options: {
        cacheName: `${ROUTE_NAME}-html-caches`,// 取页面访问的路由地址
        cacheableResponse: {
          statuses: [0, 200],
        },
        expiration: {
          maxEntries: 20  // 最大的缓存文件数量
        }
      }
    }
  ],
  modifyURLPrefix: {
    '../public' : `/${ROUTE_NAME}`, // 取页面访问的路由地址
    'static/' : `/${ROUTE_NAME}/_next/static/` // 取页面访问的路由地址
   }
});
const versionPlugin = new webpack.DefinePlugin({
  'process.env.BUILD_VERSION': BUILD_VERSION
})
 
//导入plugins
webpack: (config) => {          
 USE_WORKBOX_PLUGIN && config.plugins.push(workboxPlugin) && config.plugins.push(versionPlugin);
 return config;
},
```
  注意：
  1. next.config.js此段代码依赖 env 需要放在 env变量下面。
  2. 如果项目名和url路径名不匹配。比如loyalty项目：url路径是：“/en-US/loyalty/”，项目名(APP_NAME)是：tradercircle。这里路径名(ROUTE_NAME)= loyalty；
  3. SW生成的路径是在tradercircle 里面的， 注意dist下面的路径是：
const SW_DEST_PATH = path.join(__dirname, '..', '..', `dist/${env}/apps/tradercircle/.next/public`); )
  4. SW是是持久缓存，开发过程如果使用，会出现代码/接口数据发生更改，但是页面仍然获取到的是之前已经缓存的数据，所以为了避免该事件产生。在_app.tsx和next.config文件做了限制
只有testnet/prod环境才会生成、注册sw文件

   5. 需要注意不是所有项目都适合加SW，要根据业务而定。一味地添加SW反而会加重用户的缓存负担，而且Worker创建和通讯都会有损耗！

## 4. 修改nginx配置是得service worker的scope扩大到跟路径：

  ```nginx
    location ^~ / {
      # service worker scope /
      add_header 'Service-Worker-Allowed' '/';   
    }
  ```

## 5. 参考项目

loyalty：https://testnet.bybit.com/en-US/loyalty/

referral: https://testnet.bybit.com/en-US/referral

bonusbah: https://testnet.bybit.com/en-US/bonusbash/

## 6. 后续实验性PWA接入
针对 PWA目前已经接入的只有 ：https://testnet.bybit.com/en-US/bonusbash/  scope 仅是英文的接入测试。其他没有接入，作为实验性的项目进行测试工作。后续可以尝试进行接入。