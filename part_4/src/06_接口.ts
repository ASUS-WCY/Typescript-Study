(function () {
  // 描述对象的类型
  type myType = {
    name: string;
    age: number;
  };

  // type myType = {
  // type不可重复声明
  // }

  /*
    接口用来定义一个类结构
    用来定义一个类中应该包含哪些属性和方法
    同时接口也可以当成类型声明去使用
    interface 关键字定义接口类
  */

  interface myInterface {
    name: string;
    age: number;
    // gender: number; 报错
  }

  interface myInterface {
    gender: string;
  }

  // 对一个接口多次声明的话 结果是将多次声明结合
  // 但是对统一接口的多次声明中不可重复声明属性或 方法

  // const obj: myInterface = {
  //   name: "steve jobs",
  //   age: 56,
  //   gender: "男",
  // };

  interface myInter {
    name: string;
    sayHello(): void;
    /* 
      sayHi(){} 接口只能定义类型 不能写方法体
      接口中的所有属性都不能有实际的值
      接口只定义对象的结构 而不考虑实际值 
      接口就是规范 是对类的限制
      抽象 extends 继承 可以有抽象方法也可以有普通方法
      接口 implements 实现 接口只能是定义结构 而不能有实际的值
    */
  }

  // 定义类去实现一个接口 即 满足接口的要求
  class MyClass implements myInter {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    sayHello() {
      console.log("大家好!");
    }
  }
})();
