var webpack = require('webpack');
var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: {
        pageA: APP_DIR + '/components/index.jsx',
        pageB: APP_DIR + '/components/login.jsx'
  },

  output: {
    path: BUILD_DIR,
    filename: 'app.js'
  },
  
  resolve: {
    modulesDirectories: ['node_modules', './src'],
    extensions: ['', '.js', '.jsx']
  },

  module : {
    loaders : [
      { 
        test : /\.jsx?/, 
        include : APP_DIR, 
        loader : 'babel' 
      },
      { test: /\.css$/, include : APP_DIR, loader: ExtractTextPlugin.extract("style-loader", "css-loader") }
    ]
  },

  // This plugin moves all the CSS into a separate stylesheet
  plugins: [
    new ExtractTextPlugin('styles.css', {
            allChunks: true
    })

  ]

};

module.exports = config;
