class Light extends MovableObject {
  height = canvasHeight;
  width = canvasWidth;

  constructor(imagePath, x) {
    super().loadImage(imagePath);
    this.y = canvasHeight - this.height;
    this.x = x - this.width / 2;
    this.moveSpeed = 0.05;
  }
}
