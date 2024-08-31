const HtmlWebpackPlugin = require("html-webpack-plugin");
const { entry } = require("../list/webpack.config");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  devServer: {
    port: 4100,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "detail",
      filename: "detail.js",
      exposes: {
        "./detailIndex": "./src/index",
      },
      shared: ["lodash"],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
