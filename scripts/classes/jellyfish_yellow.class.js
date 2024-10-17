class JellyFishYellow extends MovableObject {
    hitboxColor = 'red';

    IMAGES_SWIMMING = [
        './assets/imgs/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png',
        './assets/imgs/2.Enemy/2 Jelly fish/Regular damage/Yellow 2.png',
        './assets/imgs/2.Enemy/2 Jelly fish/Regular damage/Yellow 3.png',
        './assets/imgs/2.Enemy/2 Jelly fish/Regular damage/Yellow 4.png'
    ]

    constructor(){
        super()
        this.loadImage('./assets/imgs/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png')
        this.setEnemyCharacteristics()
        this.loadImages(this.IMAGES_SWIMMING);
        this.animate();

    }

    animate() {
        setInterval( () => {
            this.playAnimation(this.IMAGES_SWIMMING)
        }, 200);

        this.enemyUpAndDown();
    };

}

