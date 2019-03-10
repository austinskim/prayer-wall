const merge = require('webpack-merge'),
  common = require('./webpack.common'),
  webpack = require('webpack');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  mode: 'development',
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});
