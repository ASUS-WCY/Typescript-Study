// 引入path包 合并路径
const path = require('path')

// 引入html插件 每次webpack打包后 都会自动生成html 
// 并引入生成的js文件 方便查看效果
const HTMLWebpackPlugin = require('html-webpack-plugin')


//引入 clean 插件 用于webpack打包时 将目标目录下的文件清除
// 原webpack 打包方式是将 目标目录下的文件进行替换 而不是删除
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin')

//webpack 中所有的配置信息写在module.exports里
module.exports = {

  // 指定打包的模式 是开发环境打包 还是生产环境打包
  mode: 'none',

  // 指定入口主文件
  entry: './src/index.ts',

  // 指定打包文件的目录
  output: {
    // 指定打包文件的目录
    path: path.resolve(__dirname, 'dist'),
    // 打包文件后生成的文件名
    filename: 'bundle.js',

    // 告诉 webpack 不再使用箭头函数
    environment: {
      arrowFunction: false,
      const: false
    }
  },

  // 指定webpack打包时要使用的模块
  module: {
    // 指定加载的规则
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
      },
      // 对less 文件进行处理
      {
        test: /\.less$/,
        use: [
          // loader 的处理顺序 是从下往上走的
          "style-loader", // 将样式文件合并到文件中去
          "css-loader", // 处理 css文件
          // 处理转换好的css文件 解决兼容性问题
          {
            loader: "postcss-loader",
          },
          "less-loader", // 处理 less文件
        ]
      }
    ]
  },

  // 配置webpack插件
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      // 传入对象对自动生成的网页进行设置
      // title: 'this is a new title' 对网页标题进行设置
      // 传入一个网页模板 根据模板生成网页
      template: './src/index.html'
    }),
  ],

  // 用来设置引入模块的文件后缀
  // 因为webpack 不知道那些文件是作为模块引入的
  resolve: {
    extensions: ['.js', '.ts']
  }
}