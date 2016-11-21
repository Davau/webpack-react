 /**
 * @Author: chenweizhi
 * @Date:   2016-11-21
 */

var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, 'src');


module.exports = {
  entry: APP_DIR +'/app.js',//入口文件
  output: {
    path: BUILD_DIR,//打包文件目录
    filename: 'bundle.js'//打包生成的js文件
  },
  // 模块加载 loader
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      { 
        test: /\.jsx?$/,
        include: APP_DIR,
        loaders: ['babel']
      }
      
    ]
  },
  resolve: {
        extensions: ['', '.js', '.jsx']
  },
  //webpack内置插件 
  plugins: [
    new webpack.BannerPlugin('This file is created by chenweizhi')
  ]
}