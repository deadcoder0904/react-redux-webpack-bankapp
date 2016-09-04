var path = require("path");
var HTMLWebpackPlugin = require('html-webpack-plugin');

var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: path.join(__dirname,'/app/index.html'),
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
    './app/index.js',
    'webpack-dev-server/client?http://localhost:8080'
  ],
  devtool: "cheap-module-eval-source-map",
  output: {
    path: path.join(__dirname,'/dist/'),
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.png$/,
        loader: "url-loader?limit=100000"
      },
      {
        test: /\.jpg$/,
        loader: "file-loader"
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml'
      }/*,
      {
        test: /\.sass$/,
        loader: "style-loader!css-loader?sourceMap!sass-loader?sourceMap"
      }*/
    ]
  },
  plugins: [HTMLWebpackPluginConfig]
};