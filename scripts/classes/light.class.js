class Light extends MovableObject {
    height = canvasHeight;
    width = canvasWidth;

    constructor(imagePath) {
        super().loadImage(imagePath)
        this.y = canvasHeight - this.height;
        this.x = Math.random() * canvasWidth;
        this.moveSpeed = 0.15

        this.animate()
    }

    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
    }
}