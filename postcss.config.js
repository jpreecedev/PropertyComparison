module.exports = {
  plugins: [
    require('postcss-import')(),
    require('postcss-cssnext')(),
    require('postcss-modules')({
      generateScopedName: '[name]__[local]___[hash:base64:5]'
    }),
    require('cssnano')()
  ]
}
