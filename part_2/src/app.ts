function hi() {
  console.log("hi");
}

enum Gender {
  male,
  female,
}

type newType = {
  name: string;
  Gender;
};

let b: newType;
b = {
  name: "张三",
  Gender: 1,
};

let c;

console.log(b);

function fn2(this: Window) {
  console.log(this);
}
