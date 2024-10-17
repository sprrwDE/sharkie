class Light extends MovableObject {
    height = canvasHeight;
    width = canvasWidth;
    hitboxWidth = '0'

    constructor(imagePath) {
        super().loadImage(imagePath)
        this.y = canvasHeight - this.height;
        this.x = Math.random() * canvasWidth;
        this.moveSpeed = 0.15

        this.animate()
    }

    // wie hin und her animieren? stop interval? reset, andere richtung 
    // -> siehe txt / chatgpt
    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
    }
}