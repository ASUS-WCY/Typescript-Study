// 定义一个食物类
class Food {
  // 定义一个属性来表示食物对应的元素
  elm: HTMLElement;

  constructor() {
    // 加 ! 表示获取元素不会为空
    this.elm = document.querySelector("#food")!;
  }

  // 定义一个获取食物 x轴坐标的方法
  get X() {
    return this.elm.offsetLeft;
  }

  // 定义一个获取食物 y轴坐标的方法
  get Y() {
    return this.elm.offsetTop;
  }

  // 修改食物位置 随机出现
  changePos(bodies: HTMLCollection) {
    // 生成随机位置 最小0 最大290 并且位置要为整10
    // 因为蛇每次移动 都会移动一格 也就是 10px
    let x = Math.floor(Math.random() * 30) * 10;
    let y = Math.floor(Math.random() * 30) * 10;

    // 对随机生成的位置进行循环 如果与蛇的位置重叠就重新生成
    for (let i = 0; i < bodies.length; i++) {
      let top = (bodies[i] as HTMLElement).offsetTop;
      let left = (bodies[i] as HTMLElement).offsetLeft;
      if (x === left && y === top) {
        this.changePos(bodies);
        return;
      }
      this.elm.style.left = x + "px";
      this.elm.style.top = y + "px";
    }
  }
}

export default Food;
