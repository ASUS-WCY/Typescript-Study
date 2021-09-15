"use strict";
/*
  定义函数或类时 如果遇到类型不明确 就可以使用泛型
*/
function fn(a) {
    return a;
}
// 可以直接调用具有泛型的函数
// 传入 10 则 泛型T的类型默认为 number
// 不指定泛型 TS可以自动对类型进行推断
fn(10);
// 指定类型
fn("hello");
function fn2(a, b) {
    console.log(b);
    return a;
}
// 建议写时 手动传类型
fn2(123, "hello");
// fn3 函数的泛型必须实现 接口Inter类
function fn3(a) {
    return a.length;
}
const a = {
    length: 4,
};
let b = "1234";
fn3(a);
// 字符串有属性 length 且值为 number
fn3(b);
// 类中使用泛型
class myClass {
    constructor(name) {
        this.name = name;
    }
}
const mc = new myClass("steve jobs");
// 或
const mc1 = new myClass("steve jobs");
// 个人理解 将泛型看成一个类型的变量
// 使用时要先声明<T> 然后使用时就当作变量使用
