class Coin extends MovableObject {
    IMAGES_COIN = [
        './assets/imgs/4. Marcadores/1. Coins/1.png',
        './assets/imgs/4. Marcadores/1. Coins/2.png',
        './assets/imgs/4. Marcadores/1. Coins/3.png',
        './assets/imgs/4. Marcadores/1. Coins/4.png',
    ]
    constructor(x, y) {
        super();
        this.loadImages(this.IMAGES_COIN);
        this.x = x;
        this.y = y;
        this.width = 40;
        this.height = 40;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_COIN)
        }, 200);
    }
}