class BackgroundObject extends MovableObject {
    constructor(imagePath, x, y) {
        super().loadImage(imagePath)
        this.y = y;
        this.x = x;
        this.height = 400
        this.width = 720;
    }
}