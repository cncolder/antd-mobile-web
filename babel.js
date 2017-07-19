/**
 * Babel preset
 * 
 * @example
 * `.babelrc`
 * ```json
 * { presets: ["antd-mobile-web/babel"] }
 * ```
 */
const preset = {
    presets: [
        [
            require.resolve('babel-preset-es2015'),
            {
                modules: false
            }
        ],
        require.resolve('babel-preset-react')
    ],
    plugins: [
        [
            require.resolve('babel-plugin-import'),
            {
                libraryName: 'antd-mobile-web',
                libraryDirectory: 'es'
            }
        ]
    ]
}

module.exports = preset
