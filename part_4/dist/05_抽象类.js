"use strict";
(function () {
    /*
    Animal 作为一个父类(基类、超类) 专门用于其他类做继承的
    因为本身范围太大 不希望它自身能创建出实例
    abstract 开头修饰 为抽象类
    抽象类就是专门用来被继承的 不能被实例化
  
    抽象类中可以添加抽象方法
    */
    class Animal {
        constructor(name) {
            this.name = name;
        }
    }
    class Dog extends Animal {
        sayHello() {
            console.log("汪汪汪!");
        }
    }
    class Cat extends Animal {
        sayHello() {
            console.log("喵喵喵!");
        }
    }
    const dog = new Dog("旺财");
    const cat = new Cat("咪咪");
    console.log(cat);
    dog.sayHello();
})();
