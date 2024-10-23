class Bubble extends MovableObject {
    gravitySpeed = 0.5;
    acceleration = 0.3;
    hitboxColor = 'blue'

    constructor(x, y, width, height, mirror, image) {
        super();
        this.loadImage(image)
        this.x = x;
        this.y = y;
        this.width = 25;
        this.height = 25;
        this.throw(x, y, width, height, mirror)
    }

    // spiegeln (mit offset character width arbeiten, if(mirrored), else)

    throw(x, y, width, height, mirror) {
        if (mirror) {
            this.x = x; 
            this.y = y + (height / 2);
            setInterval(() => {
                this.x -= 20
            }, 25)
        } else {
            this.x = x + width; 
            this.y = y + (height / 2);
            setInterval(() => {
                this.x += 20
            }, 25)
        }
        this.applyBubbleGravity()
    };

    applyBubbleGravity() {
        setInterval(() => {
                this.y -= this.gravitySpeed;
                this.gravitySpeed += this.acceleration;
        }, 1000 / 25)
    } 
}