'use strict'
const path = require('path');
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const webpack = require("webpack");

const devWebpackConfig = merge(baseWebpackConfig, {
  devtool: "source-map",
  devServer: {
    contentBase: path.join(__dirname, "../dist/"),
    port: 8000,
    compress: true,
    hot: true,
    overlay: true,
    historyApiFallback: {
      rewrites: [{ from: /.*/, to: "/index.html" }]
    }
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          "style-loader",
          "css-loader", // 将 css 转化成 js 模块
          'postcss-loader', // 处理 css 前缀
          "sass-loader" // 将 Sass/Scss 编译成 css
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),

  ]
});
module.exports = devWebpackConfig;
