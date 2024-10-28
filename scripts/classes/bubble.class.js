class Bubble extends MovableObject {
    gravitySpeed = 0.5;
    acceleration = 0.3;
    hitboxColor = 'blue'
    toxic = false;
    air = false;
    sound = new Audio('./assets/sounds/bubble.wav')
    bubbleGravity;
    bubbleMovement;
    world;

    constructor(x, y, width, height, mirror, image) {
        super();
        this.loadImage(image)
        this.x = x;
        this.y = y;
        this.width = 25;
        this.height = 25;
        this.throw(x, y, width, height, mirror)
    }
    
    throw(x, y, width, height, mirror) {
        if (mirror) {
            this.y = y + (height / 2);
            this.bubbleMovement = setInterval(() => {
                this.x -= 20
                if (this.x < 0) {
                    this.clearBubbleIntervals();
                }
            }, 25)
        } else {
            this.x = x + width; 
            this.y = y + (height / 2);
            this.bubbleMovement = setInterval(() => {
                this.x += 20
                if (this.x > this.world.canvas.width) {
                    this.clearBubbleIntervals();
                }
            }, 25)
        }

        this.applyBubbleGravity()
    };

    applyBubbleGravity() {
        this.bubbleGravity = setInterval(() => {
                this.y -= this.gravitySpeed;
                this.gravitySpeed += this.acceleration;
                if (this.y < 0 || this.y > this.world.canvas.height) {
                    this.clearBubbleIntervals();
                }
        }, 1000 / 25)
    } 

    clearBubbleIntervals() {
        clearInterval(this.bubbleGravity);
        clearInterval(this.bubbleMovement);
        const index = this.world.bubbles.indexOf(this);
        if (index > -1) {
            this.world.bubbles.splice(index, 1);
        }
        console.log('bubble interval cleared')
    }
}