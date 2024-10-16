class PufferFishGreen extends MovableObject {

    IMAGES_SWIMMING = [
        './assets/imgs/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
        './assets/imgs/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
        './assets/imgs/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
        './assets/imgs/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
        './assets/imgs/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png'
    ]

    constructor() {
        super().loadImage('./assets/imgs/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png')
        this.y = Math.random() * 480;
        this.x = 300 + Math.random() * 700;
        this.height = 80;
        this.width = this.height;

        this.moveSpeed = 0.15 + Math.random() * 0.45
        this.loadImages(this.IMAGES_SWIMMING);
        this.animate();

    }

    animate() {
        setInterval( () => {
            this.playAnimation(this.IMAGES_SWIMMING)
        }, 200);

        this.moveLeft();
    };
}