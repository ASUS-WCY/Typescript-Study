(function () {
  class Person {
    /* 
      TS 可以在属性前添加属性修饰符
      public 修饰的属性可以在任何地方访问(修改) 默认值
      private 私有属性 私有属性只能在类内部进行修改和访问
        通过在类中添加方法使得私有属性可以被外部访问
        这样的话 数据的访问和修改控制权就在自己手上了
      protected 受保护的 受保护的属性只有在自己类内部或者
      继承该类的子类中 可访问
     */
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
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

    set _name(val: string) {
      this.name = val;
    }

    set _age(val: number) {
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
    num: number;
    constructor(num: number) {
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
    constructor(public name:string, public age:number) {
    }
  }

  
})();
