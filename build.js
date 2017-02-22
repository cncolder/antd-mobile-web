const path = require('path')
const fs = require('fs-extra')
const glob = require('glob')

fs.emptyDirSync('./lib')
fs.copySync('./node_modules/antd-mobile/lib', './lib')
glob.sync('./lib/**/*.web.js').forEach(web => {
    const js = web.replace(/\.web\.js$/, '.js')
    const webdts = web.replace(/\.web\.js$/, '.web.d.ts')
    const dts = web.replace(/\.web\.js$/, '.d.ts')

    console.log(web + ' -> ' + js)
    fs.copySync(web, js)
    fs.removeSync(web)

    if (fs.existsSync(webdts)) {
        console.log(webdts + ' -> ' + dts)
        fs.copySync(webdts, dts)
        fs.removeSync(webdts)
    }
})
glob.sync('./lib/**/{index,{Agree,Checkbox,Radio}Item,SubMenu}.{js,d.ts}').forEach(f => {
    const ff = path.resolve(f)
    const code = fs.readFileSync(ff, { encoding: 'utf8' })
    const match = code.match(/'.+?\.web'/)
    if (match) {
        console.log(f + ' -- ' + match[0])
        fs.writeFileSync(ff, code.replace(/\.web'/g, '\''))
    }
})
