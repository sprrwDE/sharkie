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
    IMAGES_FINSLAP = [
        './assets/imgs/1.Sharkie/4.Attack/Fin slap/1.png',
        './assets/imgs/1.Sharkie/4.Attack/Fin slap/2.png',
        './assets/imgs/1.Sharkie/4.Attack/Fin slap/3.png',
        './assets/imgs/1.Sharkie/4.Attack/Fin slap/4.png',
        './assets/imgs/1.Sharkie/4.Attack/Fin slap/5.png',
        './assets/imgs/1.Sharkie/4.Attack/Fin slap/6.png',
        './assets/imgs/1.Sharkie/4.Attack/Fin slap/7.png',
        './assets/imgs/1.Sharkie/4.Attack/Fin slap/8.png'
    ]
    world;
    moving;
    moveSpeed = 1;

    constructor() {
        super()
        this.loadImage('./assets/imgs/1.Sharkie/1.IDLE/1.png')
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_FINSLAP)
        this.animate();
        this.applyGravity();

    }

    animate() {

        // Move
        setInterval(() => {
            if (this.world.keyboard.RIGHT && this.x < this.world.level.levelEndX) {
                this.moveRight();
            } 
            if (this.world.keyboard.LEFT && this.x > 0) {
                this.moveLeft();
            } 
            if (this.world.keyboard.UP && this.y > -80) {
                this.moveUp()
            } 
            if (this.world.keyboard.DOWN && this.y < 300) {
                this.moveDown()
            }
        })

        // Animations
        setInterval(() => {
            this.moving = false;
            this.slap = false;
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.UP || this.world.keyboard.DOWN) {
                this.gravitySpeed = -0.5;
                this.playAnimation(this.IMAGES_SWIM)
                this.moving = true;
            } 
            //Idle
            if (!this.moving) {
                this.playAnimation(this.IMAGES_IDLE)
            }
            //Slap
            if (this.world.keyboard.FIN) {
                this.slap = true;
            }

            if(this.slap) {
                this.playAnimation(this.IMAGES_FINSLAP)
            }
        }, 200);
    };
}