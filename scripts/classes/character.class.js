class Character extends MovableObject {

    IMAGES_IDLE = [
        './assets/imgs/1.Sharkie/1.IDLE/1.png',
        './assets/imgs/1.Sharkie/1.IDLE/2.png',
        './assets/imgs/1.Sharkie/1.IDLE/3.png',
        './assets/imgs/1.Sharkie/1.IDLE/4.png',
        './assets/imgs/1.Sharkie/1.IDLE/5.png',
        './assets/imgs/1.Sharkie/1.IDLE/6.png',
        './assets/imgs/1.Sharkie/1.IDLE/7.png',
        './assets/imgs/1.Sharkie/1.IDLE/8.png',
        './assets/imgs/1.Sharkie/1.IDLE/9.png',
        './assets/imgs/1.Sharkie/1.IDLE/10.png',
        './assets/imgs/1.Sharkie/1.IDLE/11.png',
        './assets/imgs/1.Sharkie/1.IDLE/12.png',
        './assets/imgs/1.Sharkie/1.IDLE/13.png',
        './assets/imgs/1.Sharkie/1.IDLE/14.png',
        './assets/imgs/1.Sharkie/1.IDLE/15.png',
        './assets/imgs/1.Sharkie/1.IDLE/16.png',
        './assets/imgs/1.Sharkie/1.IDLE/17.png',
        './assets/imgs/1.Sharkie/1.IDLE/18.png'
    ]
    currentImage = 0;

    constructor() {
        super().loadImage('./assets/imgs/1.Sharkie/1.IDLE/1.png')
        this.loadImages(this.IMAGES_IDLE);

        this.animate();

    }

    animate() {
        setInterval( () => {
            let index = this.currentImage % this.IMAGES_IDLE.length // % = Modulo = Mathematischer Rest
            // i = 0, 17, 16, 15, etc
            let path = this.IMAGES_IDLE[index];
            this.img = this.imgCache[path]
            this.currentImage++;
        }, 200)
    }




    jump() {

    }
}