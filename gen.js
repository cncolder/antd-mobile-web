#!/usr/bin/env node

const path = require('path')
const { mkdirSync, readFileSync, writeFileSync } = require('fs')

const resolve = (...p) => path.resolve(__dirname, ...p)
const mkdir = mkdirSync
const read = p => readFileSync(p, 'utf8')
const write = (p, c) => console.log('WRITE', p) || writeFileSync(p, c)
const regexp = /^export { default as (\w+) } from '\.\/([\w-]+)\/index(\.web)?';$/

// lib

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
        const match = line.match(regexp)
        if (!match) return
        const filename = match[2]
        const websuffix = match[3]

        write(
            resolve('lib', `${filename}.js`),
            `module.exports = require('antd-mobile/lib/${filename}/index${websuffix || ''}')`
        )
    })

// es

write(
    resolve('es', 'index.js'),
    read(resolve('node_modules', 'antd-mobile', 'es', 'index.js'))
        .replace(/'\./g, '\'antd-mobile/es')
)

// write(
//     resolve('es', 'index.js'),
//     read(resolve('node_modules', 'antd-mobile', 'es', 'index.js'))
//         .split(/\n/)
//         .map(line => line.match(regexp))
//         .filter(match => !!match)
//         .map(match => {
//             const compname = match[1]
//             const filename = match[2]
//             const websuffix = match[3]
//             const imp = `import ${compname} from 'antd-mobile/es/${filename}/index${websuffix || ''}';`
//             const exp = `export { ${compname} };`

//             return { imp, exp }
//         })
//         .reduce((acc, { imp, exp }) => {
//             acc.push(imp)
//             acc.push(exp)

//             return acc
//         }, [])
//         .join('\r\n')
// )

write(
    resolve('es', 'index.d.ts'),
    read(resolve('node_modules', 'antd-mobile', 'es', 'index.d.ts'))
        .replace(/'\./g, '\'antd-mobile/es')
)

read(resolve('node_modules', 'antd-mobile', 'es', 'index.js'))
    .split(/\n/)
    .forEach(line => {
        const match = line.match(regexp)
        if (!match) return
        const compname = match[1]
        const filename = match[2]
        const websuffix = match[3]

        write(
            resolve('es', `${filename}.js`),
            `import ${compname} from 'antd-mobile/es/${filename}/index${websuffix || ''}';\r\nexport default ${compname};`
        )
    })
