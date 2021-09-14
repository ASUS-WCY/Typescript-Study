console.log('hello world');
console.log("afterchange");

let hh = 'world'
hh = 'hello world'

// export { hh } 当一个文件里包含了导入导出模块时
// 这个文件就已经默认引入了严格模式

function aa() {
  console.log(this);
}
// aa()

let obj = {
  '1': 1,
  '2': 2,
  '3': 2
}

obj["1"] = 0

console.log(obj);

obj = {
  "0": 0
}

console.log(obj);
