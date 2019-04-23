const HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlplugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
})
module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [htmlplugin],
  devServer: {
    historyApiFallback: true,
    port: 8080,
    historyApiFallback: true
  },
};