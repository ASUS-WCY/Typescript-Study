// object 类型 表示一个 js对象  js 里万物皆对象
let a: object;
a = function () {};
a = {};
a = [];

// 一般用object类型限制对象中的属性类型
// 指定b为包含name属性 且值的类型为 string的对象
// 对象内部 属性名后加问号表示改属性可选 可以不设置该属性
let b: { name: string; age?: number };
// 设置多个任意类型的属性名
// propName 可以随便取名 propName为属性名的意思 更直白
let c: { [propName: string]: unknown };

b = { name: "steve" };
c = { name: "steve jobs", age: 56, price: "2.46k billion $" };

/* 
  以箭头函数限制函数的参数和返回值类型
  语法:(形参:类型,形参:类型,...)=>返回值类型
*/
let d: (a: number, b: number) => void;
d = function fn(a, b) {
  return undefined;
};

console.log(d(1, 2)); // undefined

// 数组声明类型
let e: string[];
e = ["1", "2", "3"];

// f 和 g 效果等同
let f: number[];
let g: Array<number>;

// ts 新增类型 turple 元组
// 元组就是长度固定的数组 因为长度固定 所以效率比数组高
// 语法: [ 类型, 类型, 类型, ... ]
let h: [string, number];
h = ["123", 123];

// ts 新增类型 enum 枚举
enum Gender {
  male,
  female,
}

let i: { name: string; gender: Gender };
i = {
  name: "steve jobs",
  gender: Gender.male,
};
console.log(i); // { name: 'steve jobs', gender: 0 }

// 或( | )  和 与( & )
// & 用于对象的连接
let j: { name: string } & { age: number };
j = { name: "steve jobs", age: 56 };

/* 
  类型的别名 
  语法: 
  type 类型别名 = 自定义类型
*/
type myType = 1 | 2 | 3 | 4 | 5 | 6;
let k: myType;
let l: myType;
