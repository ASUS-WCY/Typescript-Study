// 直接使用字面量进行类型声明
let a: 10;
a = 10;
// a = 11 报错 因为a的值固定为10 类型固定为number 了
// 使用方法
let b: "male" | "female";
// b = 'others' b的值只能是 'male' 或者是 'female'
b = "male";

// 同理 函数设置返回值时可以设置多个类型
function fn(flag): boolean | string {
  if (flag) return flag;
  return flag.toString();
}
console.log("ts函数" + fn(false));

// c 的值被限定为 bool类型 或 string类型
let c: boolean | string;

// any 为任意类型的声明 避免声明为any
// 当对一个变量声明为any类型后 相当于对变量关闭了TS的类型检测 与js无异
let d: any;
// 隐式的声明变量为 any
let e;

d = 10; // true
d = true; // true
d = "false"; // true

// unknown 若不确定变量应该赋值为什么类型 应该将类型设置为 unkown
let f: unknown;

f = 10;
f = true;
f = "false";

// 类型unknown 出现的原因
console.log(b); // "male"
b = d; // 将any类型的d 赋值给 string类型的 b
console.log(typeof b);
console.log(b);

// 这样会将b的类型转换为 any类型 且不报错

// 但是如果将 unknown类型的变量赋值给其他类型的变量 会报错
// any不光会霍霍自己 还会霍霍别人
// unknown 只会霍霍自己 不会霍霍别人

// a = f 报错
// 所以 unknown 就是一个类型安全的 any
let s: string;
e = "string";
if (typeof e === "string") {
  s = e;
}

/*
  类型断言: 用来告诉解析器变量的实际类型
  语法:
    变量 as 类型
    <类型>变量
*/

s = e as string;
s = <string>e;

// void 类型 用于函数返回值为undefined的情况
function fun(): void {
  // 函数没有返回值不报错
  // return false; 有返回值就报错
}

function fnn() {
  // 不设置返回值的函数默认类型为 void
  // 或 return;
  // 或 return undefined;
}

// never类型 表示永远不会返回结果 一般用于函数报错 没有返回值
function err(): never {
  throw new Error("这是一个错误!!");
  // 只抛出错误 永远不会有返回值
}

err()
