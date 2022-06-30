website:https://blog.csdn.net/weixin_41819731/article/details/109899642
https://www.netlify.com/blog/2020/12/02/next.js-should-i-use-ssr-or-ssg/

# Next.js: Should I use SSR or SSG?

If you use Next.js, chances are you’re aware that it can do both server-side rendering (SSR) and static site generation (SSG). It’s very powerful! But why would you choose one or the other?

It comes down to when a site is built. Static sites are built at deploy time, and server-rendered sites are built at runtime.

## A case for SSG
There are a ton of benefits when you have a statically-generated site. Because a site is bundled and generated at build-time, your users don’t have to wait for a page to load or generate at runtime. They simply navigate to the page, and no code has to be run for the page to show up!

By using this as a pattern, server-side processes are abstracted to microservices. That means if some service is down, only that part of your site will be down, rather than the entire thing! This also reduces the surface area for security attacks as well.

You can read a lot more about static sites on jamstack.org.

## A case for SSR
The biggest downside to static sites (and where SSR shines) is the long build times when you have hundreds (if not thousands) of pages that you have to render. If you have a ton of pages and the content is dynamic, it is something that can lead to both many builds, and long builds.

When you server-side render a page, your page is guaranteed to always be up to date, thus you don’t need to trigger a rebuild of your sites when the content changes. This can save you, the developer, a ton of time! That being said, for your users, the Time-To-First-Byte (TTFB) is slower, because the content is generated on the server for each request.

## But what do I choose??
Get you a framework that can do both! Next.js allows you to both statically generate sites, and server-render pages, all within the same project!

As you are building your site and figuring out what works best for you, you can use the built-in performance monitoring functions in your project. If you’d like to learn more about those, you can check out this video on Jamstack Explorers!(https://explorers.netlify.com/learn/nextjs/nextjs-performance?utm_source=blog&utm_medium=ssrorssgexplorers-cs&utm_campaign=devex)