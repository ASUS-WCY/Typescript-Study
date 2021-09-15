// class 关键字定义类
/*
  对象中包含 两个部分
  属性
  方法
*/
class Person {
  // 定义实例属性
  // 可以通过 new出来的实例对象 能访问到的属性
  name = "steve jobs";
  age = 56;
  // 类属性（静态属性） 在前面加上static关键字声明
  // 通过类来访问 实例无法访问
  // readonly 表示只读属性 并且要写在static后面
  // static readonly age = 56;

  // 定义方法
  // 同样分为 实例方法 和 类方法(静态方法)
  sayHellow() {
    console.log("Hello everyone !");
  }
  static sayHi() {
    console.log("Hi !");
  }
}

const _per = new Person();

console.log(_per); // Person { name: 'steve jobs' }
console.log(_per.name); // steve jobs
// console.log(_per.age); 报错
// console.log(Person.name, Person.age); Person 56

_per.name = "steve";
console.log(_per.name); // steve 前面的结果不变

Person.sayHi();
_per.sayHellow();
