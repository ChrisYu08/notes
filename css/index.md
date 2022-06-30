## css 及 less 全局样式覆盖方式

### <strong>var()</strong>
var()函数可以代替元素中任何属性中的值的任何部分。var()函数不能作为属性名、选择器或者其他除了属性值之外的值。（这样做通常会产生无效的语法或者一个没有关联到变量的值。）

### <strong>:root</strong>
:root是一个伪类，表示文档根元素，非IE及ie8及以上浏览器都支持，在:root中声明相当于全局属性，只要当前页面引用了:root segment所在文件，都可以使用var()来引用

```css
  @font-face {
    font-family: 'IBM Plex Sans';
    src: url('https://s1.bycsi.com/common-static/infra-static/assets/fonts/IBMPlexSans/IBMPlexSans-Regular.ttf');
  }

  @font-face {
    font-family: 'IBM Plex Sans';
    src: url('https://s1.bycsi.com/common-static/infra-static/assets/fonts/IBMPlexSans/IBMPlexSans-Medium.ttf');
    font-weight: 500;
  }

  @font-face {
    font-family: 'IBM Plex Sans';
    src: url('https://s1.bycsi.com/common-static/infra-static/assets/fonts/IBMPlexSans/IBMPlexSans-SemiBold.ttf');
    font-weight: bold;
  }


  :root {
    --gtd-font-family: 'IBM Plex Sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif;

    --gtd-color-brand: #f7a600;
    --gtd-color-brand-hover: #f9b732;
    --gtd-color-brand-tap: #cf8a00;
    --gtd-color-brand-bg: #fef6e5;
    --gtd-color-red: #e04040;
    --gtd-color-red-hover: #e66566;
    --gtd-color-red-tap: #bc3536;
    --gtd-color-red-bg: #fdf0f0;
    --gtd-color-green: #24ae64;
    --gtd-color-green-hover: #4fbe83;
    --gtd-color-green-tap: #1e9254;
    --gtd-color-green-bg: #eef8f3;
    --gtd-color-black: #000;
    --gtd-color-black-light: #333;
    --gtd-color-gray: #666;
    --gtd-color-gray-light: #999;
    --gtd-color-gray-lighter: #ccc;
    --gtd-color-gray-lightest: #dbdbdb;
    --gtd-color-white-darker: #ededed;
    --gtd-color-white-dark: #f5f5f5;
    --gtd-color-white: #fff;

    --gtd-fz-xs: 12px;
    --gtd-fz-sm: 14px;
    --gtd-fz-md: 16px;
    --gtd-fz-lg: 18px;
    --gtd-fz-xl: 20px;
    --gtd-fz-xxl: 24px;

    --gtd-lh-xs: 18px;
    --gtd-lh-sm: 22px;
    --gtd-lh-md: 24px;
    --gtd-lh-lg: 26px;
    --gtd-lh-xl: 28px;
    --gtd-lh-xxl: 32px;

    --gtd-fw-regular: normal;
    --gtd-fw-medium: 500;
    --gtd-fw-bold: bold;
  }

  body {
    margin: 0;
    /* Uniframe injected reset css will override `line-height` and `font-family`,
    * so !important is needed.
    */
    line-height: 1.15 !important;
    font-family: var(--gtd-font-family) !important;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: var(--gtd-color-white);
  }
```
