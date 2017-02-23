# antd-mobile-web

[antd-mobile](https://github.com/ant-design/ant-design-mobile) web only.

# Install

`npm i antd-mobile-web --save-dev`

Follow official doc setup `.babelrc`

```json
{
    "plugins": [
        [
            "import",
            {
                "libraryName": "antd-mobile-web",
                "style": "css"
            }
        ]
    ]
}
```

**Dont forget setup `style-loader` and `css-loader` in your webpack config**

Then import components

```js
import { Button } from 'antd-mobile-web'
```

# About SSR

Since webpack package your code for client only. On server side. `style-loader` cannot work.

I suggest you remove `"style": "css"` from '.babelrc'. Put css in your html page head.

```html
<html>
    <head>
        <link rel='stylesheet' type='text/css' href='//unpkg.com/antd-mobile/dist/antd-mobile.min.css' />
    </head>
</html>
```

# Why?

Because `Cannot resolve module 'react-native'`

[antd-mobile](https://github.com/ant-design/ant-design-mobile) is a React Native first library. To use for web. You need import '*.web.js'. Official team tell you can package it by special [webpack config](https://github.com/ant-design/ant-design-mobile/blob/master/docs/react/introduce.md#web-使用方式). But what about SSR(Server Side Render)?

# How it work

This repo hold only one script 'build.js'. It copy 'antd-mobile/lib' to root path. Then move all '*.web.js' to '*.js'. Replace all `require` also.

Because this package dependencies [antd-mobile](https://github.com/ant-design/ant-design-mobile). So you don't need install it again.
