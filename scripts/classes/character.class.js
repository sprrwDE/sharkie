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
    ];
    IMAGES_SWIM = [
        './assets/imgs/1.Sharkie/3.Swim/1.png',
        './assets/imgs/1.Sharkie/3.Swim/2.png',
        './assets/imgs/1.Sharkie/3.Swim/3.png',
        './assets/imgs/1.Sharkie/3.Swim/4.png',
        './assets/imgs/1.Sharkie/3.Swim/5.png',
        './assets/imgs/1.Sharkie/3.Swim/6.png'
    ]
    world;
    moving;
    moveSpeed = 1;

    constructor() {
        super().loadImage('./assets/imgs/1.Sharkie/1.IDLE/1.png')
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_SWIM);
        this.animate();

    }

    animate() {

        // Move
        setInterval(() => {
            if (this.world.keyboard.RIGHT) {
                this.x += this.moveSpeed;
                this.mirror = false;
            } if (this.world.keyboard.LEFT) {
                this.x -= this.moveSpeed;
                this.mirror = true;
            } if (this.world.keyboard.UP) {
                this.y -= this.moveSpeed;
            } if (this.world.keyboard.DOWN) {
                this.y += this.moveSpeed;
            }
        })

        // Animation
        setInterval(() => {
            this.moving = false;
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.UP || this.world.keyboard.DOWN) {
                let index = this.currentImage % this.IMAGES_SWIM.length;
                let path = this.IMAGES_SWIM[index];
                this.img = this.imgCache[path];
                this.currentImage++;
                this.moving = true;
            } 
            //Idle
            if (!this.moving) {
                let index = this.currentImage % this.IMAGES_IDLE.length;
                let path = this.IMAGES_IDLE[index];
                this.img = this.imgCache[path];
                this.currentImage++;
            }
        }, 200);
    };
}