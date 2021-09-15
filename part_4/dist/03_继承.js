"use strict";
(function () {
    // 定义一个animal类
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        sayHello() {
            console.log("动物叫声~");
        }
    }
    /*
      继承 子类继承父类
      例如 dog extends Animal
      子类将会拥有父类的方法和属性
        可以将多个子类重复的部分写在父类中
        子类通过继承获得父类的属性和方法
    */
    // 定义一个狗类
    class Dog extends Animal {
        // 子类可以定义自己的方法
        run() {
            console.log(`${this.name}在跑~`);
        }
        // 方法重写
        sayHello() {
            console.log("汪汪汪!");
        }
    }
    // 定义一个猫类
    class Cat extends Animal {
        sayHello() {
            console.log("喵喵喵!");
        }
    }
    const dog = new Dog("旺财", 5);
    const cat = new Cat("咪咪", 3);
    console.log(cat);
    cat.sayHello();
    console.log(dog);
    dog.sayHello();
    dog.run();
})();
