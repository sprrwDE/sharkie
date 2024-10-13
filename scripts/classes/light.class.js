class Light extends MovableObject {
    height = canvasHeight;
    width = canvasWidth;

    constructor(imagePath) {
        super().loadImage(imagePath)
        this.y = canvasHeight - this.height;
        this.x = Math.random() * canvasWidth;

        this.animate()
    }

    animate() {
        setInterval( () => {
            this.x -= 0.25;
        }, 1000 / 60)
    }
}