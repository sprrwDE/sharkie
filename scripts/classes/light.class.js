class Light extends MovableObject {
    height = canvasHeight;
    width = canvasWidth;

    constructor(imagePath) {
        super().loadImage(imagePath)
        this.y = canvasHeight - this.height;
        this.x = 0;
    }
}