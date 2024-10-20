class Bubble extends MovableObject {
    gravitySpeed = 0.5;
    acceleration = 0.3;

    constructor(x, y) {
        super();
        this.loadImage('./assets/imgs/1.Sharkie/4.Attack/Bubble trap/Bubble.png')
        this.x = x;
        this.y = y;
        this.width = 25;
        this.height = 25;
        this.throw(x, y)
    }

    // spiegeln

    throw(x, y) {
        this.x = x;
        this.y = y;
        setInterval(() => {
            this.x += 20
        }, 25)
        this.applyBubbleGravity()
    };

    applyBubbleGravity() {
        setInterval(() => {
                this.y -= this.gravitySpeed;
                this.gravitySpeed += this.acceleration;
        }, 1000 / 25)
    } 
}