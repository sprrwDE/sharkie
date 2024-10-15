class Endboss extends MovableObject {
    IMAGES_SWIMMING = [
        './assets/imgs/2.Enemy/3 Final Enemy/2.floating/1.png',
        './assets/imgs/2.Enemy/3 Final Enemy/2.floating/2.png',
        './assets/imgs/2.Enemy/3 Final Enemy/2.floating/3.png',
        './assets/imgs/2.Enemy/3 Final Enemy/2.floating/4.png',
        './assets/imgs/2.Enemy/3 Final Enemy/2.floating/5.png',
        './assets/imgs/2.Enemy/3 Final Enemy/2.floating/6.png',
        './assets/imgs/2.Enemy/3 Final Enemy/2.floating/7.png',
        './assets/imgs/2.Enemy/3 Final Enemy/2.floating/8.png',
        './assets/imgs/2.Enemy/3 Final Enemy/2.floating/9.png',
        './assets/imgs/2.Enemy/3 Final Enemy/2.floating/10.png',
        './assets/imgs/2.Enemy/3 Final Enemy/2.floating/11.png',
        './assets/imgs/2.Enemy/3 Final Enemy/2.floating/12.png',
        './assets/imgs/2.Enemy/3 Final Enemy/2.floating/13.png'
    ]

    constructor() {
        super().loadImage('./assets/imgs/2.Enemy/3 Final Enemy/2.floating/1.png')
        this.y = 0;
        this.x = 700
        this.height = 400;
        this.width = this.height;

        this.moveSpeed = 0.15 + Math.random() * 0.45
        this.loadImages(this.IMAGES_SWIMMING);
        this.animate();
    }

    animate() {
        setInterval(()=> {
            this.playAnimation(this.IMAGES_SWIMMING)
        }, 180)
    }
}