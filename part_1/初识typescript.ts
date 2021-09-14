// ts 支持所有 js 语法
// 但浏览器无法识别 ts 文件 无法直接在 html里引入ts文件
// 需要用 tsc (typescriptcomplier) 将 ts文件编译成 js文件

console.log("初识ts!");
function greeter(thing) {
  return "hello" + thing;
}

let some = "world";

console.log(greeter(some));

// ts 声明变量类型
// 先声明变量后赋值
let a: String;
// a = 10 出现红色波浪线报错 编译时出错 但仍能编译成功
a = "10";
console.log(a);

// ts 声明变量时赋值
let b: Number = 10;

// ts 声明变量时赋值可以不用声明类型
// ts 会根据赋值的类型自动判断变量的类型
// 后边使用声明的变量时就只能赋值确定的类型
let c = false;
c = true; // 不报错
// c = 1  报错 因为c为 bool 类型

// 函数参数类型限制 与 返回值类型限制
function sum(a: number, b: number): number {
  // return a + 'b'; 报错 返回值类型不为数值类型
  return a + b;
}

// sum(123,'456') 参数传值类型出错 报错
console.log(sum(123, 123));
