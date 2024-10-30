class Character extends MovableObject {
    world;
    db;
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
    health = 1000;
    lastMovement = 0;

    constructor(world) {
        super().loadImage('./assets/imgs/1.Sharkie/1.IDLE/1.png')
        this.db = new CharacterDB;
        this.world = world;
        this.loadImageCaches(this.db.allImages)
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
            this.playAnimation(this.db.IMAGES_IDLE);
            this.db.swim_sound.pause();
        }
    }

    hurtByEnemy() {
        if (this.world.enemyType === ('pufferfish')) {
            this.playAnimation(this.db.IMAGES_POISONED);
        } else if (this.world.enemyType === ('endboss')) {
            this.playAnimation(this.db.IMAGES_POISONED);
        } else if (this.world.enemyType === 'jellyfish') {
            this.playAnimation(this.db.IMAGES_SHOCK);
        }
    }

    characterSwimmingLogic() {
        this.playAnimation(this.db.IMAGES_SWIM);
        this.moving = true;
        this.lastMovement = new Date().getTime();
        this.playSoundCharacter(this.db.swim_sound);
    }

    checkSnooze() {
        if (!this.lastMovement) {
            this.lastMovement = new Date().getTime();
        }
        let timespan = (new Date().getTime() - this.lastMovement) / 1000;
        return timespan > 5;
    }

    snoozeLogic() {
        this.playAnimation(this.db.IMAGES_SNOOZE);
        this.playSoundCharacter(this.db.snore_sound);
        if (this.y < this.world.canvas.height - 50) {
            this.applyGravity(1, 0.5)
        } else {
            this.y = this.world.canvas.height - this.height;
        }
    }

    animationLogicDeath() {
        if (this.isDead() && this.world.enemyType === ('jellyfish')) {
            this.playAnimation(this.db.IMAGES_DEAD_SHOCK);
        } else {
            this.playAnimation(this.db.IMAGES_DEAD);
        }
        this.playSoundCharacter(this.db.death_sound);
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
            this.playAnimation(this.db.IMAGES_SHOOTING);
        }
        else if (this.world.keyboard.POISON) {
            this.playAnimation(this.db.IMAGES_POISONBUBBLE);
        }
    }

    activateFinslap() {
        this.finslapActive = true;
        this.immune = true;
        this.currentIndex = 0;
        this.playAnimation(this.db.IMAGES_FINSLAP);
        this.playSoundCharacter(this.db.finslap_sound);

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