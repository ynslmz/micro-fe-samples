const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
module.exports = {
  mode: "development",
  devServer: { port: 4000 },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        list: "list@http://localhost:4200/list.js",
        detail: "detail@http://localhost:4100/detail.js",
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
