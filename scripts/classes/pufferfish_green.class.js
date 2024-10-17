class PufferFishGreen extends MovableObject {
    hitboxColor = 'red';

    IMAGES_SWIMMING = [
        './assets/imgs/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
        './assets/imgs/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
        './assets/imgs/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
        './assets/imgs/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
        './assets/imgs/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png'
    ]

    constructor() {
        super()
        this.loadImage('./assets/imgs/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png')
        this.setEnemyCharacteristics()
        this.loadImages(this.IMAGES_SWIMMING);
        this.animate();
    }

    animate() {
        setInterval( () => {
            this.playAnimation(this.IMAGES_SWIMMING)
        }, 200);

        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
    };
}