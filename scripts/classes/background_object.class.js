class BackgroundObject extends MovableObject {
    height = canvasHeight;
    width = canvasWidth;

    constructor(imagePath, coord) {
        super()
        this.loadImage(imagePath)
        this.y = canvasHeight - this.height;
        this.x = coord;
    }
}