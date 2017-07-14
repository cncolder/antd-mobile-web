# Ant design mobile @1.x web entry

[antd-mobile](https://github.com/ant-design/ant-design-mobile) web only. Don't worry [.web.js](https://github.com/ant-design/ant-design-mobile/issues?utf8=%E2%9C%93&q=is%3Aissue%20.web) suffix issues.

`npm i --save-dev antd-mobile-web`

Or

`yarn add -D antd-mobile-web`

## Usage

Follow official doc setup `.babelrc`

```json
{
    "plugins": [
        [
            "import",
            {
                "libraryName": "antd-mobile-web"
            }
        ]
    ]
}
```

Work in progress: <del>**Dont forget setup `style-loader` and `css-loader` in your webpack config**</del>

Then import components

```js
import { Button } from 'antd-mobile-web'
```

## Why?

Because `Cannot resolve module 'react-native'`

[antd-mobile](https://github.com/ant-design/ant-design-mobile) is a React Native first library. For web. You need import '.web.js'. Official document tell you can package it by special [webpack config](https://github.com/ant-design/ant-design-mobile/blob/master/docs/react/introduce.md#web-使用方式). But in fact it's not easy in test env or editor level.

## How it work

Script generate file trees sync 'antd-mobile/lib'. And point to `antd-mobile/lib/comp/index.web`.

## Acknowledgements

This project is a shell and base on `antd-mobile`. All real work hard by Ant Design team.
