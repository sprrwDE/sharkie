class JellyFishYellow extends MovableObject {
    hitboxColor = 'red';

    IMAGES_SWIMMING = [
        './assets/imgs/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png',
        './assets/imgs/2.Enemy/2 Jelly fish/Regular damage/Yellow 2.png',
        './assets/imgs/2.Enemy/2 Jelly fish/Regular damage/Yellow 3.png',
        './assets/imgs/2.Enemy/2 Jelly fish/Regular damage/Yellow 4.png'
    ]
    IMAGES_DANGER = [
        './assets/imgs/2.Enemy/2 Jelly fish/S｣per dangerous/Green 1.png',
        './assets/imgs/2.Enemy/2 Jelly fish/S｣per dangerous/Green 2.png',
        './assets/imgs/2.Enemy/2 Jelly fish/S｣per dangerous/Green 3.png',
        './assets/imgs/2.Enemy/2 Jelly fish/S｣per dangerous/Green 4.png'
    ]
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

