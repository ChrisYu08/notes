## hash

因为SSG本来就是把html放到CDN上的，所以没必要加hash等等的东西。也没必要静态资源cdn，本身就在cdn上。

SSR和CSR的html是放在自己的server上的，所以有必要加hash缓存及cdn。