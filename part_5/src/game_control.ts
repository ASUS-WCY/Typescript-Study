// 导入 food 类
import Food from "./food";
// 导入 scorepanel类
import scroePanel from "./score_panel";
// 导入 snake 类
import Snake from "./snake";

// 游戏控制类 核心列
class gameControl {
  snake: Snake;
  food: Food;
  scorePanel: scroePanel;

  // 创建一个属性来存储蛇的移动方向 也就是按键
  direction: string = "Right";
  // 创建一个游戏状态的变量
  isLive: boolean = false;

  constructor() {
    this.food = new Food();
    this.snake = new Snake();
    this.scorePanel = new scroePanel();

    this.init();
  }

  // 游戏初始化
  init() {
    this.isLive = true;
    // 绑定键盘按下的事件
    document.addEventListener("keydown", this.keydownHandler.bind(this));
    // 是我们的蛇移动

    this.run();
  }

  // 键盘按下的响应函数
  keydownHandler(e: KeyboardEvent) {
    // 检测 this.direction 值是否合法
    // 即按键是否为 上下左右四个键
    this.direction = e.key;
  }

  // 控制蛇移动的方法
  run() {
    // 获取蛇当前坐标
    let x = this.snake.x;
    let y = this.snake.y;

    // 根据方向修改 x y 的值
    switch (this.direction) {
      case "ArrowUp":
      case "Up":
      case "w":
        y -= 10;
        break;
      case "ArrowDown":
      case "Down":
      case "s":
        y += 10;
        break;
      case "ArrowLeft":
      case "Left":
      case "a":
        x -= 10;
        break;
      case "ArrowRight":
      case "Right":
      case "d":
        x += 10;
        break;
    }

    // 检查蛇是否迟到食物
    this.checkEat(x, y);

    // 捕获蛇撞墙后抛出的异常
    try {
      // 修改 x y 的值
      this.snake.x = x;
      this.snake.y = y;
    } catch (e) {
      alert("SORRY! GAME OVER!");
      this.isLive = false;
    }

    // 我调我自己
    if (this.isLive) {
      setTimeout(this.run.bind(this), 300 - this.scorePanel.level * 10);
    }
  }

  // 检查蛇是否吃到了食物
  checkEat(x: number, y: number) {
    if (x === this.food.X && y === this.food.Y) {
      this.scorePanel.scoreUp();
      this.food.changePos(this.snake.bodies);
      this.snake.addBody();
    }
  }
}

export default gameControl;
