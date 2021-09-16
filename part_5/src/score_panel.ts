// 定义一个记分牌的类
class scroePanel {
  // score level 分数和的等级
  score = 0;
  level = 1;
  // 最大等级
  maxLevel: number;
  // 设置变量表示多少分升级
  number: number;

  // 分数和等级的元素对象
  scoreEle: HTMLElement;
  levelELe: HTMLElement;

  constructor(maxLevel: number = 10, number: number = 10) {
    this.scoreEle = document.querySelector("#score")!;
    this.levelELe = document.querySelector("#level")!;
    this.maxLevel = maxLevel;
    this.number = number;
  }
 
  // 加分方法
  scoreUp() {
    this.scoreEle.innerHTML = ++this.score + "";
    // 判断分数
    if (this.score % this.number === 0) {
      this.levelUp();
    }
  }

  // 等级提升
  levelUp() {
    if (this.level < this.maxLevel) {
      this.levelELe.innerHTML = ++this.level + "";
    }
    return;
  }
}

export default scroePanel;
