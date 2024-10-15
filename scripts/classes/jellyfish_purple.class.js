class JellyFishPurple extends MovableObject {

    IMAGES_SWIMMING = [
        './assets/imgs/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png',
        './assets/imgs/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png',
        './assets/imgs/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png',
        './assets/imgs/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png'
    ]

    constructor(){
        super().loadImage('./assets/imgs/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png')
        this.y = Math.random() * 480;
        this.x = 300 + Math.random() * 700;
        this.height = 80
        this.width = this.height;

        this.moveSpeed = 0.15 + Math.random() * 0.45
        this.loadImages(this.IMAGES_SWIMMING);
        this.animate();

    }

    animate() {
        setInterval( () => {
            this.playAnimation(this.IMAGES_SWIMMING)
        }, 200);

        this.moveUp() // wie auch nach unten bewegen? eventuell lösen wie bei character mit moving
        /* if (this.y === 0) {
            this.moveDown()
        } */
    };

}

