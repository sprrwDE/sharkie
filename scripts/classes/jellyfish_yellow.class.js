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
    sound = new Audio('./assets/sounds/shock.wav')

    constructor() {
        super();
        this.loadImage(this.IMAGES_SWIMMING[0]);
        this.setEnemyCharacteristics();
        this.loadImages(this.IMAGES_SWIMMING);
        this.loadImages(this.IMAGES_DANGER);
        this.loadImages(this.IMAGES_HIT);
        this.checkDanger();
        this.animate();
    }

    animate() {
        this.animationLogic()
        this.enemyUpAndDown();
    }

}