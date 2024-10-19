class Bubble extends MovableObject {

    constructor(x, y) {
        super();
        this.loadImage('./assets/imgs/1.Sharkie/4.Attack/Bubble trap/Bubble.png')
        this.x = x;
        this.y = y;
        this.width = 25;
        this.height = 25;
    }

    throw(x, y) {
        this.x = x;
        this.y = y;
        setInterval(() => {
            this.x += 20
        }, 25)
        // this.applyGravity() -> hinzufügen, bubbles sollen leicht nach oben
    };
}