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
    IMAGES_POISONED = [ 
        './assets/imgs/1.Sharkie/5.Hurt/1.Poisoned/1.png',
        './assets/imgs/1.Sharkie/5.Hurt/1.Poisoned/2.png',
        './assets/imgs/1.Sharkie/5.Hurt/1.Poisoned/3.png',
        './assets/imgs/1.Sharkie/5.Hurt/1.Poisoned/4.png',
        './assets/imgs/1.Sharkie/5.Hurt/1.Poisoned/5.png',
        './assets/imgs/1.Sharkie/5.Hurt/1.Poisoned/6.png'
    ]
    IMAGES_DEAD = [ // Change to specific dead
        './assets/imgs/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00000.png',
        './assets/imgs/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00001.png',
        './assets/imgs/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00002.png',
        './assets/imgs/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00003.png',
        './assets/imgs/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00004.png',
        './assets/imgs/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00005.png',
        './assets/imgs/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00006.png',
        './assets/imgs/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00007.png',
        './assets/imgs/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00008.png',
        './assets/imgs/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00009.png',
        './assets/imgs/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00010.png',
        './assets/imgs/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00011.png'
    ]
    world;
    moving;
    moveSpeed = 1;
    hitboxColor = 'green';

    constructor() {
        super()
        this.loadImage('./assets/imgs/1.Sharkie/1.IDLE/1.png')
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_FINSLAP)
        this.loadImages(this.IMAGES_DEAD)
        this.animate();
        // this.applyGravity();

    }

    animate() {

        // Move
        setInterval(() => {
            if (this.world.keyboard.RIGHT && this.x < this.world.level.levelEndX) {
                this.world.camera_x = -this.x + 100
                this.mirror = false;
                this.moveRight();
            }
            if (this.world.keyboard.LEFT && this.x > 0) {
                this.world.camera_x = -this.x + 100
                this.mirror = true;
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
            if(this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD)
            } else 
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.UP || this.world.keyboard.DOWN) {
                // this.gravitySpeed = -0.5;
                this.playAnimation(this.IMAGES_SWIM)
                this.moving = true;
            } else
            //Idle
            if (!this.moving) {
                this.playAnimation(this.IMAGES_IDLE)
            } else
            //Slap
            if (this.world.keyboard.FIN) {
                this.playAnimation(this.IMAGES_FINSLAP)
            } 
        }, 200);
    };
}