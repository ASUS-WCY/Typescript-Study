import differ from "./temp";

console.log("hello world!");

let a = 1;
let b = 2;

function sum(a: number, b: number): number {
  return a + b;
}

console.log(sum(a, b));

console.log(differ(a, b));

var i = 0;

alert(i);

var tt = setInterval(function () {
  alert(++i);
}, 1000);

var timer = setTimeout(function () {
  clearInterval(tt);
}, 3000);

var obj: { name: string };

obj = {
  name: "steve jobs",
};

console.log(Promise);

