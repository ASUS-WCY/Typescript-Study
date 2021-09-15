(function () {
  class Animal {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    sayHello() {
      console.log("动物在叫!");
    }
  }

  class Dog extends Animal {
    age: number;

    constructor(name: string, age: number) {
      // 调用父类构造函数时需提供完整参数
      // 调用父类构造函数
      super(name);
      this.age = age;
    }

    sayHello() {
      // 在类的方法中的super表示当前类的父类
      super.sayHello();
    }
  }

  const dog = new Dog("旺财", 3);
  dog.sayHello();
})();
