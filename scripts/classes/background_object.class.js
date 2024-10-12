class BackgroundObject extends MovableObject {
    constructor(imagePath) {
        super().loadImage(imagePath)
        this.y = 80;
        this.x = 0;
        this.height = 400
        this.width = 720;
    }
}