const path = require('path');
const webpack = require('webpack');

const WriteFilePlugin = require('write-file-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const THEME_NAME = 'cvjm-mannheim';
const HOST = 'localhost';
const PORT = 3000;


module.exports = {
  
  entry: [
    `webpack-hot-middleware/client?http://${HOST}:${PORT}&reload=true`,
    './main.js', // Your appʼs entry point
    './main.scss',
    './icons.js'
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: `/`,
    hotUpdateChunkFilename: 'dist/hot/hot-update.js',
    hotUpdateMainFilename: 'dist/hot/hot-update.json'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loaders: ['babel-loader?presets[]=es2015,presets[]=react'],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass')
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite?' + JSON.stringify({
          name: '[name]',
          prefixize: true
        })
      }
    ]
  },
  plugins: [
      new ExtractTextPlugin('style.css', {
          allChunks: true
      }),
      new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('development') }),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      new WriteFilePlugin()
  ]
};
