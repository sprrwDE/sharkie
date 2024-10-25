class JellyFishYellow extends Enemy {
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
    IMAGES_HIT = [
        './assets/imgs/2.Enemy/2 Jelly fish/Dead/Yellow/y1.png',
        './assets/imgs/2.Enemy/2 Jelly fish/Dead/Yellow/y2.png',
        './assets/imgs/2.Enemy/2 Jelly fish/Dead/Yellow/y3.png',
        './assets/imgs/2.Enemy/2 Jelly fish/Dead/Yellow/y4.png'
    ]
    type = 'jellyfish'

    constructor() {
        super();
        this.loadImage('./assets/imgs/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png'); 
        this.setEnemyCharacteristics();
        this.loadImages(this.IMAGES_SWIMMING);
        this.loadImages(this.IMAGES_DANGER);
        this.loadImages(this.IMAGES_HIT);
        this.checkDanger();
        this.animate();
    }

    animate() {
        setInterval(() => {
            if (this.hit) {
                this.playAnimation(this.IMAGES_HIT);
            } else if (this.danger) {
                this.playAnimation(this.IMAGES_DANGER);
            } 
            else {
                this.playAnimation(this.IMAGES_SWIMMING);
            }
        }, 200);
        this.enemyUpAndDown();
    }

}

