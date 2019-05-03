const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlplugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
})
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.css', '.scss']
  },
  plugins: [htmlplugin],
  devServer: {
    port: 8080,
    historyApiFallback: true
  },
};