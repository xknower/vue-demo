const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const webpack = require('webpack');
//
const VueLoaderPlugin = require('vue-loader/lib/plugin');


//
const rules = [
  {
    test: /\.css$/,
    use: ['style-loader', 'css-loader']
  },
  {
    test: /\.(png|svg|jpg|gif)$/,
    use: ['url-loader']
  },
  {
    test: /\.(woff|woff2|eot|ttf|otf)$/,
    use: ['url-loader']
  },
  {
    test: /\.vue$/,
    exclude: /node_modules/,
    use: ['vue-loader']
  }
]

module.exports = {
  entry: './src/index.js',                      // 入口文件
  output: {                                     // webpack打包后出口文件
    filename: 'app.js',                         // 打包后js文件名称
    path: path.resolve(__dirname, 'dist')       // 打包后自动输出目录
  },
  module: {
    rules
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'production',
      // 自定义模板
      template: './src/index.html'    
    }),
    // hot 检测文件改动替换 plugin
    new webpack.NamedModulesPlugin(),      
    new webpack.HotModuleReplacementPlugin(),
    //
    new VueLoaderPlugin()
  ],
  // webpack-dev-server 配置
  devServer: {
    contentBase: './build',
    hot: true
  },
}