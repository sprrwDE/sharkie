class JellyFishPurple extends MovableObject {
    hitboxColor = 'red';

    IMAGES_SWIMMING = [
        './assets/imgs/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png',
        './assets/imgs/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png',
        './assets/imgs/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png',
        './assets/imgs/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png'
    ];

    IMAGES_DANGER = [
        './assets/imgs/2.Enemy/2 Jelly fish/S｣per dangerous/Pink 1.png',
        './assets/imgs/2.Enemy/2 Jelly fish/S｣per dangerous/Pink 2.png',
        './assets/imgs/2.Enemy/2 Jelly fish/S｣per dangerous/Pink 3.png',
        './assets/imgs/2.Enemy/2 Jelly fish/S｣per dangerous/Pink 4.png'
    ];
    type = 'jellyfish'
    danger = false;

    constructor() {
        super();
        this.loadImage('./assets/imgs/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png'); 
        this.setEnemyCharacteristics();
        this.loadImages(this.IMAGES_SWIMMING);
        this.loadImages(this.IMAGES_DANGER);
        this.checkDanger();
        this.animate();
    }

    checkDanger() {
        setInterval(() => {
            this.danger = !this.danger;
        }, 5000 + (5000 * Math.random()));
    }

    animate() {
        setInterval(() => {
            if (this.danger) {
                this.playAnimation(this.IMAGES_DANGER);
            } else {
                this.playAnimation(this.IMAGES_SWIMMING);
            }
        }, 200);

        this.enemyUpAndDown();
    }
}