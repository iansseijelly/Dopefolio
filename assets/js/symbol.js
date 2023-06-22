export default class Symbol {
  constructor(x, y, fontSize, canvasHeight) {
    this.chracters =
      "春江潮水连海平海上明月共潮生江畔何人初见月江月何年初照人鸿雁长飞光不度鱼龙潜跃水成文斜月沉沉藏海雾碣石潇湘无限路";
    this.x = x;
    this.y = y;
    this.fontSize = fontSize;
    this.canvasHeight = canvasHeight;
    this.text = "";
  }

  draw(context) {
    // generating a random symbol from characters string
    this.text = this.chracters.charAt(
      Math.floor(Math.random() * this.chracters.length)
    );
    //drawing text
    context.textAlign = "center";
    context.font = this.fontSize + "px monospace";
    context.fillText(this.text, this.x * this.fontSize, this.y * this.fontSize);
  }
  // resetting y-axis to 0 if it crosses the height of the window
  // otherwise incerementing y-axis value by 1
  update() {
    if (this.y * this.fontSize > this.canvasHeight && Math.random() > 0.98) {
      this.y = 0;
    } else {
      this.y += 1;
    }
  }
}
