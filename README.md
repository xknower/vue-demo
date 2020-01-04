# vue-demo

> Vue 安装配置 及页面框架案例

## 开发环境

### 1. 安装编辑器

- [VS Code](https://code.visualstudio.com/) - 编辑器

### 2. 配置编辑器

```jsonc
{
  "editor.rulers": [100],
  "editor.formatOnSave": true,
}
```

将以上配置放到 vscode 的用户配置中。

### 3. 安装配置

```bash

# node & fw
> mkdir vue-demo && cd vue-demo && npm init -y
> mkdir -p src/
> touch src/index.html
> touch src/index.js
> touch src/app.vue
--
> touch webpack.config.js
> touch .babelrc
> touch .gitignore

// fw
├── dist  // 生产目录
│   ├── app.js              // 打包后的app.js
│   └── index.html
│
├── src  // 源目录
│   ├── index.html
│   │── index.js
│   └── app.vue            // VUE 页面
│
├── .babelrc
├── .gitignore
├── package.json
└── webpack.config.js

# package.json
"build": "webpack --mode production",
"dev": "webpack-dev-server --open --mode development"

# webpack
> npm install webpack webpack-cli -D --save-dev
> npm install webpack-dev-server --save-dev
> npm install html-webpack-plugin --save-dev
> config webpack.config.js

// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const webpack = require('webpack');
//
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: './src/index.js',                      // 入口文件
  output: {                                     // webpack打包后出口文件
    filename: 'app.js',                         // 打包后js文件名称
    path: path.resolve(__dirname, 'dist')       // 打包后自动输出目录
  },
  module: {
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
    // https://vue-loader.vuejs.org/migrating.html#a-plugin-is-now-required
    // Vue-loader在15.*之后的版本都是 vue-loader 的使用都是需要伴生 VueLoaderPlugin的
    new VueLoaderPlugin()
  ],
  // webpack-dev-server 配置
  devServer: {
    contentBase: './build',
    hot: true
  },
}

# loader
> npm install style-loader css-loader url-loader --save-dev
> npm install babel -g
> npm install babel-core babel-loader@7.1.5 babel-preset-env --save-dev

// config webpack loader
rules : [
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

# vue
> npm install vue --save-dev
> npm install vue-loader vue-template-compiler --save-dev

// .babelrc
{
  "presets": ["env", "vue"]
}

# 资源文件
// src/index.html (html-webpack-plugin 模板配置)
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>vue demo</title>
</head>
<body>
  <div id="app"></div>
</body>
</html>

// ./src/index.js
import Vue from 'vue'
import App from './app.vue'

new Vue({
  render: h => h(App)
})
.$mount("#app")

// ./src/app.vue
<template>
  <div id="app">
    <span>{{ msg }}</span>
  </div>
</template>

<script>
export default {
  name:'app',
  data(){
    return {
      msg:"Hello World !"
    }
  },
}
</script>

<style ></style>
```
