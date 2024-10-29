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
    IMAGES_SNOOZE = [
        './assets/imgs/1.Sharkie/2.Long_IDLE/i1.png',
        './assets/imgs/1.Sharkie/2.Long_IDLE/I2.png',
        './assets/imgs/1.Sharkie/2.Long_IDLE/I3.png',
        './assets/imgs/1.Sharkie/2.Long_IDLE/I4.png',
        './assets/imgs/1.Sharkie/2.Long_IDLE/I5.png',
        './assets/imgs/1.Sharkie/2.Long_IDLE/I6.png',
        './assets/imgs/1.Sharkie/2.Long_IDLE/I7.png',
        './assets/imgs/1.Sharkie/2.Long_IDLE/I8.png',
        './assets/imgs/1.Sharkie/2.Long_IDLE/I9.png',
        './assets/imgs/1.Sharkie/2.Long_IDLE/I10.png',
        './assets/imgs/1.Sharkie/2.Long_IDLE/I11.png',
        './assets/imgs/1.Sharkie/2.Long_IDLE/I12.png',
        './assets/imgs/1.Sharkie/2.Long_IDLE/I13.png',
        './assets/imgs/1.Sharkie/2.Long_IDLE/I14.png'
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
    IMAGES_SHOOTING = [
        './assets/imgs/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/1.png',
        './assets/imgs/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/2.png',
        './assets/imgs/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/3.png',
        './assets/imgs/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/4.png',
        './assets/imgs/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/5.png',
        './assets/imgs/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/6.png',
        './assets/imgs/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/7.png',
        './assets/imgs/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/8.png'
    ];
    IMAGES_POISONBUBBLE = [
        './assets/imgs/1.Sharkie/4.Attack/Bubble trap/For Whale/1.png',
        './assets/imgs/1.Sharkie/4.Attack/Bubble trap/For Whale/2.png',
        './assets/imgs/1.Sharkie/4.Attack/Bubble trap/For Whale/3.png',
        './assets/imgs/1.Sharkie/4.Attack/Bubble trap/For Whale/4.png',
        './assets/imgs/1.Sharkie/4.Attack/Bubble trap/For Whale/5.png',
        './assets/imgs/1.Sharkie/4.Attack/Bubble trap/For Whale/6.png',
        './assets/imgs/1.Sharkie/4.Attack/Bubble trap/For Whale/7.png',
        './assets/imgs/1.Sharkie/4.Attack/Bubble trap/For Whale/8.png'
    ]
    IMAGES_POISONED = [
        './assets/imgs/1.Sharkie/5.Hurt/1.Poisoned/1.png',
        './assets/imgs/1.Sharkie/5.Hurt/1.Poisoned/2.png',
        './assets/imgs/1.Sharkie/5.Hurt/1.Poisoned/3.png',
        './assets/imgs/1.Sharkie/5.Hurt/1.Poisoned/4.png',
        './assets/imgs/1.Sharkie/5.Hurt/1.Poisoned/5.png'
    ]
    IMAGES_SHOCK = [
        './assets/imgs/1.Sharkie/5.Hurt/2.Electric shock/1.png',
        './assets/imgs/1.Sharkie/5.Hurt/2.Electric shock/2.png',
        './assets/imgs/1.Sharkie/5.Hurt/2.Electric shock/3.png',
    ]
    IMAGES_DEAD = [ 
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
    IMAGES_DEAD_SHOCK = [
        './assets/imgs/1.Sharkie/6.dead/2.Electro_shock/1.png',
        './assets/imgs/1.Sharkie/6.dead/2.Electro_shock/2.png',
        './assets/imgs/1.Sharkie/6.dead/2.Electro_shock/3.png',
        './assets/imgs/1.Sharkie/6.dead/2.Electro_shock/4.png',
        './assets/imgs/1.Sharkie/6.dead/2.Electro_shock/5.png',
        './assets/imgs/1.Sharkie/6.dead/2.Electro_shock/6.png',
        './assets/imgs/1.Sharkie/6.dead/2.Electro_shock/7.png',
        './assets/imgs/1.Sharkie/6.dead/2.Electro_shock/8.png',
        './assets/imgs/1.Sharkie/6.dead/2.Electro_shock/9.png',
        './assets/imgs/1.Sharkie/6.dead/2.Electro_shock/10.png'
    ]

    world;
    moving = false;
    moveSpeed = 4;
    // Hitbox
    hitboxColor = 'green';
    offset = {
        'left': 40,
        'right': 80,
        'top': 90,
        'bottom': 130
    }
    // Finslap
    immune = false;
    finslapActive = false;
    immuneDuration = 300;
    finslap_sound = new Audio('./assets/sounds/finslap.wav')
    death_sound = new Audio('./assets/sounds/char_dying.wav')
    snore_sound = new Audio('./assets/sounds/snoring.wav')
    swim_sound = new Audio('./assets/sounds/swimming.wav')
    health = 1000;
    lastMovement = 0;

    constructor(world) {
        super()
        this.world = world;
        this.loadImage('./assets/imgs/1.Sharkie/1.IDLE/1.png')
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_SNOOZE);
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_FINSLAP);
        this.loadImages(this.IMAGES_SHOOTING);
        this.loadImages(this.IMAGES_POISONBUBBLE);
        this.loadImages(this.IMAGES_POISONED);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_DEAD_SHOCK);
        this.loadImages(this.IMAGES_SHOCK);
        this.animate();
        this.checkSnooze()
    }

    animate() {
        this.movementLogic();
        this.animationLogic()
    }

    animationLogic() {
        setInterval(() => {
            this.animationLogicMoving();
            this.animationLogicFighting();
        }, 150)
    }

    movementLogic() {
        this.moving = false
        this.movementInterval = setInterval(() => {
            if (this.world.keyboard.RIGHT && this.x < this.world.level.levelEndX) {
                this.world.camera_x = -this.x + 100
                this.mirror = false;
                this.moving = true;
                this.moveRight();
            }
            if (this.world.keyboard.LEFT && this.x > 0) {
                this.world.camera_x = -this.x + 100
                this.mirror = true;
                this.moving = true;
                this.moveLeft();
            }
            if (this.world.keyboard.UP && this.y > -80) {
                this.moveUp()
                this.moving = true;
            }
            if (this.world.keyboard.DOWN && this.y < 300) {
                this.moveDown()
                this.moving = true;
            } 
        }, 1000 / 60)
    }

    buttonPressed() {
        this.checkSnooze()
        return this.world.keyboard.UP || this.world.keyboard.DOWN || this.world.keyboard.LEFT || this.world.keyboard.RIGHT
    }

    animationLogicMoving() {
        this.moving = false;
        this.slap = false;
        if (this.isDead()) {
            this.animationLogicDeath()
        } else if (this.isHurt()) {
            this.hurtByEnemy();
        } else if (this.buttonPressed()) {
            this.characterSwimmingLogic();
        } else if (this.checkSnooze()) {
            this.snoozeLogic();
        } else {
            this.playAnimation(this.IMAGES_IDLE);
            this.swim_sound.pause();
        }
    }

    hurtByEnemy() {
        if (this.world.enemyType === ('pufferfish')) {
            this.playAnimation(this.IMAGES_POISONED);
        } else if (this.world.enemyType === ('endboss')) {
            this.playAnimation(this.IMAGES_POISONED);
        } else if (this.world.enemyType === 'jellyfish') {
            this.playAnimation(this.IMAGES_SHOCK);
        }
    }

    characterSwimmingLogic() {
        this.playAnimation(this.IMAGES_SWIM);
        this.moving = true;
        this.lastMovement = new Date().getTime();
        this.playSoundCharacter(this.swim_sound);
    }

    checkSnooze() {
        if (!this.lastMovement) {
            this.lastMovement = new Date().getTime();
        }
        let timespan = (new Date().getTime() - this.lastMovement) / 1000;
        return timespan > 5;
    }

    snoozeLogic() {
        this.playAnimation(this.IMAGES_SNOOZE);
        this.playSoundCharacter(this.snore_sound);
        if (this.y < this.world.canvas.height - 50) {
            this.applyGravity(1, 0.5)
        } else {
            this.y = this.world.canvas.height - this.height;
        }
    }

    animationLogicDeath() {
        if (this.isDead() && this.world.enemyType === ('jellyfish')) {
            this.playAnimation(this.IMAGES_DEAD_SHOCK);
        } else {
            this.playAnimation(this.IMAGES_DEAD);
        }
        this.playSoundCharacter(this.death_sound);
        this.applyGravity(1, 0.1)
        setTimeout(() => {
            bgSound.pause()
            showEndScreen()
        }, 500)
    }

    animationLogicFighting() {
        if (this.world.keyboard.FIN && !this.finslapActive) {
            this.activateFinslap();
        }
        else if (this.world.keyboard.SHOOT) {
            this.playAnimation(this.IMAGES_SHOOTING);
        }
        else if (this.world.keyboard.POISON) {
            this.playAnimation(this.IMAGES_POISONBUBBLE);
        }
    }

    activateFinslap() {
        this.finslapActive = true;
        this.immune = true;
        this.currentIndex = 0;
        this.playAnimation(this.IMAGES_FINSLAP);
        this.playSoundCharacter(this.finslap_sound);

        setTimeout(() => {
            this.immune = false;
            this.finslapActive = false;
        }, this.immuneDuration);
    }

    playSoundCharacter(soundelement) {
        if (!mute) {
            soundelement.play()
        }
    }
}