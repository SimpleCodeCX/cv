const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    app: "./src/main.ts"
  },
  mode: "production",
  // devtool: "source-map",
  output: {
    publicPath: "./",
    path: path.resolve(__dirname, "dist"),
    filename: "[name]-[hash:5].bundle.js",
    chunkFilename: "[name]-[hash:5].chunk.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    publicPath: "/",
    compress: true,
    port: 8000,
    hot: true,
    overlay: true,
    historyApiFallback: {
      rewrites: [{ from: /.*/, to: "/index.html" }]
    }
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
            options: {
              singleton: true
            }
          },
          {
            loader: "css-loader",
            options: {
              // minimize: true
            }
          }
        ]
      },
      { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' },
      { test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader' },
      {
        test: /\.art$/,
        loader: "art-template-loader",
        options: {
          // art-template options (if necessary)
          // @see https://github.com/aui/art-template
        }
      },
      {
        test: /\.scss$/,
        // 注意 loader 顺序
        use: [
          { loader: "style-loader" }, // 将 JS 字符串生成为 style 节点
          { loader: "css-loader" }, // 将 CSS 转化成 CommonJS 模块
          { loader: "sass-loader" } // 将 Sass 编译成 CSS
        ]
      },
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }

    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html"
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, 'src/static'),
      to: path.resolve(__dirname, 'dist/static'),
      ignore: ['.*']
    }]),
    new CleanWebpackPlugin(["dist"])
  ]
};
