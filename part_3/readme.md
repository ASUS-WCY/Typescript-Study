typescript 结合 webpack 打包工具 与 babel 使用

- 初始化 package.json
  `npm init -y`

package.json 里的配置项

> 使用 npm run build 进行打包命令
> 使用 npm start 开启 webpack serve 服务 实时显打包文件的效果

```json
{
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack",
    "start": "webpack serve --open --port 9001"
  }
}
```

---

- 创建 tsconfig.json 文件 或 用使用编辑器生成
- tsconfig.json 基本内容

```json
{
  "compilerOptions": {
    "module": "ESNext",
    "target": "ESNext",
    "strict": true
  }
}
```

---

下载 typescript 和 webpack 所需要的包

```
  npm i -D webpack webpack-cli typescript ts-loader
  npm i -D html-webpack-plugin
  npm i -D webpack-dev-server
  npm i -D clean-webpack-pugin
```

> -D 即 --save-dev 表示所安装的包 都为开发依赖

> webpack 和 webpack-cli 是 webpack 所需要的包中 webpack 为核心包 webpack-cli 是 webpack 的脚架

> html-webpack-plugin 插件会自动根据 webpack 包后的文件 生成 html 文件

```javascript
// 引入html插件 每次webpack打包后 都会自动生成html
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // 配置webpack插件
  plugins: [
    new HTMLWebpackPlugin({
      /*传入对象对自动生成的网页进行设置
       对网页标题进行设置
        title: 'this is a new title' F
       传入一个网页模板 根据模板生成网页
      */
      template: "./src/index.html",
    }),
  ],
};
```

> webpack-dev-server webpack 项目运行的服务器 两者是关联的 服务器可以根据 webpack 项目的改变自动刷新> 在 package.json 里添加 一个命令快捷在端口 9001 启动

```json
{
  "script": {
    "start": "webpack serve --open --port 9001"
  }
}
```

> clean-webpack-pugin 插件用于在 webpack 编译打包时将生成目标文件的目录清空 避免有重复文件存在的情况

```javascript
// 用法与 html-webpack-plugin 基本一致
//引入 clean 插件 用于webpack打包时 将目标目录下的文件清除
// 原webpack 打包方式是将 目标目录下的文件进行替换 而不是删除
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  plugins: [new CleanWebpackPlugin()],
};
```

> typescript 和 ts-loader typescript 是 typescript 的核心包 ts-loader 是将 webpack 和 typescipt 结合在一起的加载器

- 新建 wepack 配置文件 webpack.config.js
  webpack.config.js 基本内容

  由于 webpack 不能分辨那些文件是做为模块使用的 所以 需要在 webpack.config.js 里进行设置

```javascript
module.exports = {
  // 用来设置引入模块的文件后缀
  // 因为webpack 不知道那些文件是作为模块引入的
  resolve: {
    extensions: [".js", ".ts"],
  },
};
```

```javascript
// 引入path包 合并路径
const path = require("path");
// 引入html插件 每次webpack打包后 都会自动生html
// 并引入生成的js文件 方便查看效果
const HTMLWebpackPlugin = require("html-webpack-plugin");
//引入 clean 插件 用于webpack打包时 将目标目录的文件清除
// 原webpack 打包方式是将 目标目录下的文件进行 替换 而不是 删除
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
//webpack 中所有的配置信息写在module.exports里
module.exports = {
  // 指定打包的模式 是开发环境打包 还是生产环境包
  mode: "none",
  // 指定入口主文件
  entry: "./src/index.ts",
  // 指定打包文件的目录
  output: {
    // 指定打包文件的目录
    path: path.resolve(__dirname, "dist"),
    // 打包文件后生成的文件名
    filename: "bundle.js",
    // 告诉 webpack 不再使用箭头函数
    environment: {
      arrowFunction: false,
    },
  },
  // 指定webpack打包时要使用的模块
  module: {
    // 指定加载的规则
    rules: [
      {
        // test 指定规则生效的文件 值为正则
        test: /\.ts$/,
        // 要使用的loader 加载器顺序从后往前
        use: [
          //配置babel
          {
            // 指定加载器
            loader: "babel-loader",
            options: {
              // 设置定义的环境
              presets: [
                [
                  // 指定环境插件
                  "@babel/preset-env",
                  // 配置信息
                  {
                    // 要兼容的目标浏览器
                    targets: {
                      // 指定浏览器的版本
                      chrome: "93",
                      ie: "11",
                    },
                    corejs: "3",
                    // 使用corejs的方式 usage即需加   载
                    useBuiltIns: "usage",
                  },
                ],
              ],
            },
          },
          "ts-loader",
        ],
        // 要排除的文件
        exclude: /node_modules/,
      },
    ],
  },
  // 配置webpack插件
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      // 传入对象对自动生成的网页进行设置
      // title: 'this is a new title' 对网页题进行设置
      // 传入一个网页模板 根据模板生成网页
      template: "./src/index.html",
    }),
  ],
  // 用来设置引入模块的文件后缀
  // 因为webpack 不知道那些文件是作为模块引入的
  resolve: {
    extensions: [".js", ".ts"],
  },
};
```

---

考虑到浏览器兼容性问题 需引入 babel 将新语法转换为旧语法
下载 babel 所需要的包

```
  npm i -D "@babel\core" "@babel\preset-env" babel-loader core-js

  如果报错 可分开安装

  npm i -D "@babel\core"
  npm i -D "@babel\preset-env"
  npm i -D babel-loader
  npm i -D core-js

```

> "@babel\core" babel 核心工具

> "@babel\preset-env" babel 预设环境 根据预设环境转换为不同的代码 使得代码能够兼容到不同的浏览器

> babel-loader 将 babel 和 webpack 结合的加载器

> core-js 可以让老版本浏览器兼容新语法 提供浏览器运行环境

---

babel 使用方法

```javascript
  // 在webpack.config.js 文件中引入
  module.exports = {
    module = {
      // 指定要加载的规则
      rules: [{
      // test 指定规则生效的文件 值为正则
      test: /\.ts$/,
      // 要使用的loader 加载器顺序从后往前
      use: [
        //配置babel
        {
          // 指定加载器
          loader: 'babel-loader',
          options: {
            // 设置定义的环境
            presets: [
              [
                // 指定环境插件
                "@babel/preset-env",
                // 配置信息
                {
                  // 要兼容的目标浏览器
                  targets: {
                    // 指定浏览器的版本
                    "chrome": "93",
                    "ie": "11"
                  },
                  "corejs": "3",
                  // 使用corejs的方式 usage即按需加载
                  "useBuiltIns": "usage"
                }
              ]
            ]
          }
        }, 'ts-loader'
      ],
      // 要排除的文件
      exclude: /node_modules/
    }]
    }
  }
```

---

```javascript
webpack 打包时会自动生成一个箭头函数 使得bable 设置后仍旧无法兼容ie浏览器

解决方法: 修改webpack配置项
示例: module.exports = {
		output: {
			enviroment: {
				// 告诉webpack不再使用箭头函数
				arrowFunction: false
			}
		}
	}
```
