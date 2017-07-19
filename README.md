# [Experience] - Ant design mobile web entry

[antd-mobile](https://github.com/ant-design/ant-design-mobile) web only. Don't worry [.web.js](https://github.com/ant-design/ant-design-mobile/issues?utf8=%E2%9C%93&q=is%3Aissue%20.web) suffix issues.

`npm i --save-dev antd-mobile-web`

Or

`yarn add -D antd-mobile-web`

## Usage

Setup `.babelrc`

```json
{
    "presets": [
        "antd-mobile-web/babel"
    ]
}
```

Setup `webpack.config.js`

```js
module.exports = {
    module: {
        rules: [
            amwWebpack.createSvgRule()
        ]
    }
}
```

Work in progress: <del>**Dont forget setup `style-loader` and `css-loader` in your webpack config**</del>

Import components

```js
import { Button } from 'antd-mobile-web'
```

### [Here is a full example](https://github.com/ant-design/antd-mobile-samples/tree/master/antd-mobile-web)

## Why?

Because `Cannot resolve module 'react-native'`

[antd-mobile](https://github.com/ant-design/ant-design-mobile) is a React Native first library. For web. You need import '.web.js'. Official introduce show you how to package by special [webpack config](https://github.com/ant-design/ant-design-mobile/blob/master/docs/react/introduce.md#web-使用方式). But it's not friendly in test env or editor.

## How it work

Script generate file trees sync from `antd-mobile/lib`. And point to `antd-mobile/lib/${comp}/index.web`.

## TODO

* Support style

## Acknowledgements

This project is a shell base on `antd-mobile`. Which product by Ant Design team.
