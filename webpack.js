const path = require('path')

const resolve = (...p) => path.resolve(__dirname, ...p)
const moduleDir = m => path.dirname(require.resolve(`${m}/package.json`))

/**
 * Create webpack@2+ module.rules field for svg-sprite-loader
 * 
 * @param {string[]=} customPaths
 * @example
 * `webpack.config.js`
 * ```
 *  { module: { rules: [createSvgRule(path.join(__dirname, 'assets/svg'))] } }
 * ```
 */
function createSvgRule (...customPaths) {
    if (!customPaths) customPaths = []
    const paths = Array.isArray(customPaths) ? customPaths : [customPaths]
    const include = [
        moduleDir('antd-mobile')
    ].concat(paths)

    return {
        test: /\.svg$/i,
        include,
        use: {
            loader: 'svg-sprite-loader'
        }
    }
}

module.exports = {
    createSvgRule
}
