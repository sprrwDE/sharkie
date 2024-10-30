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
    IMAGES_SPAWNING = [
        './assets/imgs/2.Enemy/3 Final Enemy/1.Introduce/1.png',
        './assets/imgs/2.Enemy/3 Final Enemy/1.Introduce/2.png',
        './assets/imgs/2.Enemy/3 Final Enemy/1.Introduce/3.png',
        './assets/imgs/2.Enemy/3 Final Enemy/1.Introduce/4.png',
        './assets/imgs/2.Enemy/3 Final Enemy/1.Introduce/5.png',
        './assets/imgs/2.Enemy/3 Final Enemy/1.Introduce/6.png',
        './assets/imgs/2.Enemy/3 Final Enemy/1.Introduce/7.png',
        './assets/imgs/2.Enemy/3 Final Enemy/1.Introduce/8.png',
        './assets/imgs/2.Enemy/3 Final Enemy/1.Introduce/9.png',
        './assets/imgs/2.Enemy/3 Final Enemy/1.Introduce/10.png',
    ];
    IMAGES_HURT = [
        './assets/imgs/2.Enemy/3 Final Enemy/Hurt/1.png',
        './assets/imgs/2.Enemy/3 Final Enemy/Hurt/2.png',
        './assets/imgs/2.Enemy/3 Final Enemy/Hurt/3.png',
        './assets/imgs/2.Enemy/3 Final Enemy/Hurt/4.png'
    ]
    IMAGES_DEAD = [
        './assets/imgs/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 6.png',
        './assets/imgs/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 7.png',
        './assets/imgs/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 8.png',
        './assets/imgs/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 9.png',
        './assets/imgs/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 10.png'
    ]
    IMAGES_DASH = [
        './assets/imgs/2.Enemy/3 Final Enemy/Attack/1.png',
        './assets/imgs/2.Enemy/3 Final Enemy/Attack/2.png',
        './assets/imgs/2.Enemy/3 Final Enemy/Attack/3.png',
        './assets/imgs/2.Enemy/3 Final Enemy/Attack/4.png',
        './assets/imgs/2.Enemy/3 Final Enemy/Attack/5.png',
        './assets/imgs/2.Enemy/3 Final Enemy/Attack/6.png'
    ]
    /* offset = {
        'left': 20,
        'right': 20,
        'top': 160,
        'bottom': 240 
    } */
    type = 'endboss'
    immune = false;
    contact = false;
    firstContact = false;
    sound = new Audio('./assets/sounds/boss.wav')
    death_sound = new Audio('./assets/sounds/boss_dying.wav')
    index = 0;
    mirror = false
    visible = false;
    dangerRange = 3000
    moveSpeed = 0.8;
    world;
    contactInterval;

    constructor(world) {
        super().loadImage(this.IMAGES_SWIMMING[0]);
        this.world = world
        console.log('welt', this.world)
        this.y = 0;
        this.x = 700 * 3;
        this.height = 400;
        this.width = this.height;
        this.checkEndbossContact()
        this.allImages()
        this.animate();
    }

    allImages() {
        this.loadImages(this.IMAGES_SWIMMING);
        this.loadImages(this.IMAGES_SPAWNING);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_DASH);
    }

    animate() {
        this.animationLogic()
        this.movementLogic()
    };

    animationLogic() {
        let imageIndex = 0;
        setInterval(() => {
            // diese falsch -> wie animation einmal abspielen?
            if (this.contact && imageIndex < 10) {
                this.playAnimation(this.IMAGES_SPAWNING);
            } else if (this.immune) {
                this.playAnimation(this.IMAGES_HURT);
            } else if (this.health <= 0) {
                this.playAnimation(this.IMAGES_DEAD);
                this.playSoundBoss(this.death_sound)
            } else if (this.danger) {
                this.playAnimation(this.IMAGES_DASH)
            } else {
                this.playAnimation(this.IMAGES_SWIMMING);
            }
            if (this.world.character.x + this.world.character.width && !this.firstContact) {
                imageIndex = 0;
            }
            imageIndex++

        }, 180);
    }

    checkEndbossPosition() {
        if (this.world.character.x + this.world.character.width < this.x + (this.width / 2)) {
            this.mirror = false
            this.moveLeft()
        } else {
            this.mirror = true
            this.moveRight()
        }
    }

    movementLogic() {
        setInterval(() => {
            this.checkEndbossPosition()
            if (this.contact && !this.danger) {
                this.moveSpeed = 1
                checkEndbossPosition()
                console.log('dash over')
            } else if (this.contact && this.danger) {
                this.attackLogic()
            }
        }, 1000 / 60);
    }

    attackLogic() {
        this.moveSpeed = 1.5
        if (this.world.character.x + this.world.character.width + (this.width / 2)) {
            this.mirror = false
            this.bossDash()
        } else {
            this.mirror = true
            this.bossDashRight()
        } console.log('dashed')
    }

    checkEndbossContact() {
        this.contactInterval = setInterval(() => {
            if ((this.world.character.x + this.world.character.width) > (this.x) && !this.contact) {
                this.spawnEndboss();
            }
        }, 200)
    }

    spawnEndboss() {
        this.checkDanger(this.dangerRange)
        this.contact = true;
        this.visible = true;
        setTimeout(() => {
            this.firstContact = true
        }, 180)
    }

    playSoundBoss(soundelement) {
        if (!mute) {
            soundelement.play()
        }
    }

    // mittelpunkt in mitte mit transform bei mirror
    // move up logik??
}