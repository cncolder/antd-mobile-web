module.exports = {
  plugins: [
    [
      require.resolve('babel-plugin-import'),
      {
        libraryName: 'antd-mobile-web'
      }
    ]
  ]
}
