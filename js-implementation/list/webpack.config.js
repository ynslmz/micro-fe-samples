const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  devServer: {
    port: 4200,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "list",
      filename: "list.js",
      exposes: {
        "./listIndex": "./src/index",
      },
      shared: ["lodash"],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
