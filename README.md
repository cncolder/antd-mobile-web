# antd-mobile-web

[![Greenkeeper badge](https://badges.greenkeeper.io/cncolder/antd-mobile-web.svg)](https://greenkeeper.io/)

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

To support SSR check [antd-mobile-ssr](https://github.com/cncolder/antd-mobile-ssr)

# Why?

Because `Cannot resolve module 'react-native'`

[antd-mobile](https://github.com/ant-design/ant-design-mobile) is a React Native first library. To use for web. You need import '.web.js'. Official team tell you can package it by special [webpack config](https://github.com/ant-design/ant-design-mobile/blob/master/docs/react/introduce.md#web-使用方式). But in fact it's not easy. Sometime you cannot control your develope env.

# How it work

This repo hold only one script 'build.js'. It copy 'antd-mobile/lib' to root path. Then move '.web.js' to '.js'. Replace `require(.web)`.

Because this package dependencies [antd-mobile](https://github.com/ant-design/ant-design-mobile). So you don't need install it again.
