"use strict";
// class 关键字定义类
/*
  对象中包含 两个部分
  属性
  方法
*/
class Person {
    constructor() {
        // 定义实例属性
        // 可以通过 new出来的实例对象 能访问到的属性
        this.name = "steve jobs";
    }
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
Person.age = 56;
const _per = new Person();
console.log(_per); // Person { name: 'steve jobs' }
console.log(_per.name); // steve jobs
// console.log(_per.age); 报错
// console.log(Person.name, Person.age); Person 56
_per.name = "steve";
console.log(_per.name); // steve 前面的结果不变
Person.sayHi();
_per.sayHellow();
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
(function () {
    class Animal {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log("动物在叫!");
        }
    }
    class Dog extends Animal {
        constructor(name, age) {
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
(function () {
    // 定义类去实现一个接口 即 满足接口的要求
    class MyClass {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log("大家好!");
        }
    }
})();
(function () {
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        //  获取name属性
        // getName() {
        //   return this.name;
        // }
        //  设置name属性
        // setName(val: string) {
        //   this.name = val;
        // }
        //  获得age属性
        // getAge() {
        //   return this.age;
        // }
        //  设置age属性
        // setAge(val: number) {
        //   if (val >= 0) this.age = val;
        // }
        // TS 中 设置getter方法的方式
        get _name() {
            return this.name;
        }
        get _age() {
            return this.age;
        }
        set _name(val) {
            this.name = val;
        }
        set _age(val) {
            this.age = val;
        }
    }
    const per = new Person("steve jobs", 56);
    /**
     *   属性被修改将导致对象中的数据变得非常不安全
     */
    // per.name = "张三";
    // per.age = 20;  报错 虽然在ts里报错 但是编译成js文件一样可以赋值成功
    console.log(per);
    console.log(per._name, per._age);
    per._age = 21;
    per._name = "张三";
    console.log(per);
    class A {
        constructor(num) {
            this.num = num;
        }
    }
    class B extends A {
        test() {
            console.log(this.num);
            // 当 A num 为 public 时 可访问
            // 当 A num 为 private 时 不可访问
            // 当 A num 为 protected 时 可访问
        }
    }
    const b = new B(1);
    b.test();
    // class C {
    //   public name: string;
    //   public age: number;
    //   constructor(name: string, age: number) {
    //     this.age = age;
    //     this.name = name;
    //   }
    // }
    // 等价于上方注释代码
    class C {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
})();
/*
  定义函数或类时 如果遇到类型不明确 就可以使用泛型
*/
function fn(a) {
    return a;
}
// 可以直接调用具有泛型的函数
// 传入 10 则 泛型T的类型默认为 number
// 不指定泛型 TS可以自动对类型进行推断
fn(10);
// 指定类型
fn("hello");
function fn2(a, b) {
    console.log(b);
    return a;
}
// 建议写时 手动传类型
fn2(123, "hello");
// fn3 函数的泛型必须实现 接口Inter类
function fn3(a) {
    return a.length;
}
const a = {
    length: 4,
};
let b = "1234";
fn3(a);
// 字符串有属性 length 且值为 number
fn3(b);
// 类中使用泛型
class myClass {
    constructor(name) {
        this.name = name;
    }
}
const mc = new myClass("steve jobs");
// 或
const mc1 = new myClass("steve jobs");
// 个人理解 将泛型看成一个类型的变量
// 使用时要先声明<T> 然后使用时就当作变量使用
