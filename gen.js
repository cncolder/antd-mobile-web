#!/usr/bin/env node

const path = require('path')
const { mkdirSync, readFileSync, writeFileSync } = require('fs')

const resolve = (...p) => path.resolve(__dirname, ...p)
const mkdir = mkdirSync
const read = p => readFileSync(p, 'utf8')
const write = (p, c) => console.log('WRITE', p) || writeFileSync(p, c)

write(
    resolve('lib', 'index.js'),
    read(resolve('node_modules', 'antd-mobile', 'lib', 'index.js'))
        .replace(/'\./g, '\'antd-mobile/lib')
)

write(
    resolve('lib', 'index.d.ts'),
    read(resolve('node_modules', 'antd-mobile', 'lib', 'index.d.ts'))
        .replace(/'\./g, '\'antd-mobile/lib')
)

read(resolve('node_modules', 'antd-mobile', 'lib', 'index.d.ts'))
    .split(/\n/)
    .forEach(line => {
        const match = line.match(/^export { default as \w+ } from '\.\/([\w-]+)\/index(\.web)?';$/)
        if (!match) return
        const filename = match[1]
        const websuffix = match[2]

        write(
            resolve('lib', `${filename}.js`),
            `module.exports = require('antd-mobile/lib/${filename}/index${websuffix || ''}')`
        )
    })
