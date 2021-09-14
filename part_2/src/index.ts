type mytype = { name: string; [propName: string]: unknown };
let a: mytype;
a = { name: "steve jobs", age: "56", price: "24.3k billion $" };
console.log("index");

let box = document.querySelector(".box");
/*
 配置文件中开启了 严格空值检查 所以需要进行判断是否为空值
 if( box ) {
   box.addEventListener("click", () => {
     console.log("box click");
   });
 }
 等价于下面
*/
box?.addEventListener("click", () => {
  console.log("box click");
});
