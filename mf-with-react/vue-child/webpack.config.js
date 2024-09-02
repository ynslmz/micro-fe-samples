const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoader = require("vue-loader");
const { ModuleFederationPlugin } = require("webpack").container;
module.exports = {
  mode: "development",
  devServer: {
    port: 8081,
  },
  resolve: {
    extensions: [".js", ".vue"],
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },

  plugins: [
    new VueLoader.VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "childVue",
      filename: "remoteEntry.js",
      exposes: {
        "./vueApp": "./src/bootstrap",
      },
    }),
  ],
};
