"use strict";
class Dog {
    constructor(name, age) {
        // 在构造函数中 this 就是当前新建的那个对象
        // 在构造函数中对新建的对象添加属性
        this.name = name;
        this.age = age;
    }
    bark() {
        console.log("汪汪汪!");
        console.log(this);
        // 在实例方法中 this 表示当前的实例
    }
}
const dog = new Dog("旺财", 3);
const dog1 = new Dog("小黑", 4);
const dog2 = new Dog("小白", 5);
console.log(dog);
console.log(dog1);
console.log(dog2);
dog.bark();
dog1.bark();
