"use strict";
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
