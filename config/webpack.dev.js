/* eslint-disable no-undef */
const path = require("path");
const { merge } = require("webpack-merge");
const webpackConfigBase = require("./webpack.common");
const source = path.resolve(__dirname, "../src");

module.exports = merge(webpackConfigBase, {
  mode: "development",
  devServer: {
    port: 8888,
    hot: true,
    open: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: source,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve("babel-loader"),
          },
        ],
      },
    ],
  },
});
