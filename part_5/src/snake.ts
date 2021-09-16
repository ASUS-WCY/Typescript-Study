class Snake {
  // 表示蛇头的元素
  head: HTMLElement;
  // 蛇的身体 (包括蛇头)
  bodies: HTMLCollection;
  snake: HTMLElement;

  constructor() {
    this.snake = document.querySelector("#snake")!;
    // 加 ! 表示获取元素不会为空
    this.head = document.querySelector("#snake > div")! as HTMLElement;
    // getElementBydId 返回 HTMLCollection   querySelectorAll 则是节点数组 固定值
    this.bodies = this.snake.getElementsByTagName("div");
  }

  // 获取蛇头的x坐标
  get x() {
    return this.head.offsetLeft;
  }

  // 获取蛇头的y坐标
  get y() {
    return this.head.offsetTop;
  }

  // 简单版设置蛇的坐标
  set x(val: number) {
    if (this.x === val) return;
    if (val < 0 || val > 290) {
      // 蛇撞墙了
      throw Error("蛇撞墙了");
    }

    // 蛇在向左走时不能向右走 反之亦然
    // 判断蛇有第一节身体 并且蛇头和第一节身体在同一水平方向上
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === val) {
      // 如果发生了掉头
      // 让蛇往反方向继续前进
      if (val > this.x) {
        // 新值 > 旧值 说明蛇往右走
        val = this.x - 10;
      } else {
        val = this.x + 10;
      }
    }

    this.moveBody();
    this.head.style.left = val + "px";
    this.checkHeadBody();
  }

  set y(val: number) {
    if (this.y === val) return;
    if (val < 0 || val > 290) {
      // 蛇撞墙了
      throw Error("蛇撞墙了");
    }

    // 蛇在向上走时不能向下走 反之亦然
    // 判断蛇有第一节身体 并且蛇头和第一节身体在同一垂直方向上
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === val) {
      // 新值大于旧值 向下走
      if (val > this.y) {
        // 将 val 值改变 使得蛇按反方向前进
        val = this.y - 10;
      } else {
        val = this.y + 10;
      }
    }

    this.moveBody();
    this.head.style.top = val + "px";
    this.checkHeadBody();
  }

  // 蛇增加身体
  addBody() {
    // 给 snake 添加一个div
    // insertAdjacentHTML() 方法将一个文本插入到相对于被调用的元素的给定的一个位置。
    /*
      'beforebegin': 在该元素本身的前面.
      'afterbegin':只在该元素当中, 在该元素第一个子孩子前面.
      'beforeend':只在该元素当中, 在该元素最后一个子孩子后面.
      'afterend': 在该元素本身的后面.
    */
    this.snake.insertAdjacentHTML("beforeend", "<div></div>");
  }

  // 蛇身体的移动
  moveBody() {
    // 当蛇移动时 它的蛇头向前进一个 而第一节身体会跑到蛇头的位置 以此类推
    // 从后往前写
    for (let i = this.bodies.length - 1; i > 0; i--) {
      let x = (this.bodies[i - 1] as HTMLElement).offsetLeft;
      let y = (this.bodies[i - 1] as HTMLElement).offsetTop;

      (this.bodies[i] as HTMLElement).style.left = x + "px";
      (this.bodies[i] as HTMLElement).style.top = y + "px";
    }
  }

  // 判断蛇头是否碰到自己的身体
  checkHeadBody() {
    // 获取所有的身体 检查是否与头的坐标重叠
    for (let i = 1; i < this.bodies.length; i++) {
      let bd = this.bodies[i] as HTMLElement;
      if (bd.offsetLeft === this.x && bd.offsetTop === this.y) {
        // 进入判断说明 蛇头撞到了身体 抛出异常
        throw Error("撞到身体!");
      }
    }
  }
}

export default Snake;
