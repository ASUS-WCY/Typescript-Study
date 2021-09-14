"use strict";
function hi() {
    console.log("hi");
}
var Gender;
(function (Gender) {
    Gender[Gender["male"] = 0] = "male";
    Gender[Gender["female"] = 1] = "female";
})(Gender || (Gender = {}));
var b;
b = {
    name: "张三",
    Gender: 1
};
var c;
console.log(b);
function fn2() {
    console.log(this);
}
console.log('hello world');
console.log("afterchange");
var hh = 'world';
hh = 'hello world';
// export { hh } 当一个文件里包含了导入导出模块时
// 这个文件就已经默认引入了严格模式
function aa() {
    console.log(this);
}
// aa()
var obj = {
    '1': 1,
    '2': 2,
    '3': 2
};
obj["1"] = 0;
console.log(obj);
obj = {
    "0": 0
};
console.log(obj);
var a;
a = { name: "steve jobs", age: "56", price: "24.3k billion $" };
console.log("index");
var box = document.querySelector(".box");
/*
 配置文件中开启了 严格空值检查 所以需要进行判断是否为空值
 if( box ) {
   box.addEventListener("click", () => {
     console.log("box click");
   });
 }
 等价于下面
*/
box === null || box === void 0 ? void 0 : box.addEventListener("click", function () {
    console.log("box click");
});
console.log("inner");
console.log("change");
console.log("afterchange");
console.log("this is a test file");
