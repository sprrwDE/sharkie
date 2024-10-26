class JellyFishPurple extends Enemy {
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
    IMAGES_HIT = [
        './assets/imgs/2.Enemy/2 Jelly fish/Dead/Lila/L1.png',
        './assets/imgs/2.Enemy/2 Jelly fish/Dead/Lila/L2.png',
        './assets/imgs/2.Enemy/2 Jelly fish/Dead/Lila/L3.png',
        './assets/imgs/2.Enemy/2 Jelly fish/Dead/Lila/L4.png'
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

    // wenn getroffen stehen bleiben und hochmoven
    

}