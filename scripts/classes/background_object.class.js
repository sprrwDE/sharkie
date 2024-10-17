class BackgroundObject extends MovableObject {
    height = canvasHeight;
    width = canvasWidth;
    hitboxWidth = '0';
    hitboxColor = 'white';

    constructor(imagePath, coord) {
        super()
        this.loadImage(imagePath)
        this.y = canvasHeight - this.height;
        this.x = coord;
    }
}