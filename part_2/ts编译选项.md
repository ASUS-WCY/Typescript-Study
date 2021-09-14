### typescript 配置选项

- 编译 ts 文件

  > tsc app.ts // => app.js

- 实时编译 ts 文件

  > 实时监控 ts 文件变化 每当文件变化会自动编译成 js 文件
  > tsc app.ts -w // => app.js

- 当文件目录下存在 ts 配置文件时 可以直接使用 tsc 同时编译所有目录下的 ts 文件 (即使 tsconfig.json 为空也能使用)
  - tsc -w 同时监控文件夹下所有 ts 文件的变化

> 使用 tsc -init 来初始化 tsconfig.json( ts 配置文件 )
