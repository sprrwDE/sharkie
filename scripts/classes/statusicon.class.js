class StatusIcon extends MovableObject {
    IMAGES_BOTTLE = [
        './assets/imgs/4. Marcadores/Posion/Animada/1.png',
        './assets/imgs/4. Marcadores/Posion/Animada/2.png',
        './assets/imgs/4. Marcadores/Posion/Animada/3.png',
        './assets/imgs/4. Marcadores/Posion/Animada/4.png',
        './assets/imgs/4. Marcadores/Posion/Animada/5.png',
        './assets/imgs/4. Marcadores/Posion/Animada/6.png',
        './assets/imgs/4. Marcadores/Posion/Animada/7.png',
        './assets/imgs/4. Marcadores/Posion/Animada/8.png'
    ]
    IMAGES_COIN = [
        './assets/imgs/4. Marcadores/1. Coins/1.png',
        './assets/imgs/4. Marcadores/1. Coins/2.png',
        './assets/imgs/4. Marcadores/1. Coins/3.png',
        './assets/imgs/4. Marcadores/1. Coins/4.png'
    ]
    barType;

    constructor(x, y, width, height, icon) {
        super()
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.defineIcon(icon);
        this.animate();
    }

    defineIcon(icon) {
        if (icon === "coin") {
            this.loadImages(this.IMAGES_COIN);
            this.barType = 'coin';
        } if (icon === "bottle") {
            this.loadImages(this.IMAGES_BOTTLE);
            this.barType = 'bottle';
        }
    }

    animate() {
        setInterval(() => {
            if (this.barType === 'coin') {
                this.playAnimation(this.IMAGES_COIN)
            } if (this.barType === 'bottle') {
                this.playAnimation(this.IMAGES_BOTTLE)
            }
        }, 200);
    }

}