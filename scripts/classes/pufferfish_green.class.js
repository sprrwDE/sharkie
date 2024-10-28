class PufferFishGreen extends Enemy {
    IMAGES_SWIMMING = [
        './assets/imgs/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
        './assets/imgs/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
        './assets/imgs/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
        './assets/imgs/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
        './assets/imgs/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png'
    ]
    IMAGES_TRANSITION = [
        './assets/imgs/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition1.png',
        './assets/imgs/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition2.png',
        './assets/imgs/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition3.png',
        './assets/imgs/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition4.png',
        './assets/imgs/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition5.png'
    ]
    /* IMAGES_TRANSITION_REVERSE = [
        './assets/imgs/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition5.png',
        './assets/imgs/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition4.png',
        './assets/imgs/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition3.png',
        './assets/imgs/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition2.png',
        './assets/imgs/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition1.png'
    ] */
    IMAGES_HIT = [
        './assets/imgs/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 1 (can animate by going up).png',
        './assets/imgs/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 2 (can animate by going down to the floor after the Fin Slap attack).png',
        './assets/imgs/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 3 (can animate by going down to the floor after the Fin Slap attack).png'
    ]
    IMAGES_DANGER = [
        './assets/imgs/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim1.png',
        './assets/imgs/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim2.png',
        './assets/imgs/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim3.png',
        './assets/imgs/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim4.png',
        './assets/imgs/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim5.png'
    ]
    offset = {
        'left': 0,
        'right': 0,
        'top': 0,
        'bottom': 20 
    }
    type = 'pufferfish'
    sound = new Audio('./assets/sounds/autsch.wav')
    
    constructor() {
        super()
        this.loadImage(this.IMAGES_SWIMMING[0]); 
        this.setEnemyCharacteristics()
        this.loadImages(this.IMAGES_SWIMMING);
        this.loadImages(this.IMAGES_TRANSITION);
        // this.loadImages(this.IMAGES_TRANSITION_REVERSE); ???
        this.loadImages(this.IMAGES_DANGER);
        this.loadImages(this.IMAGES_HIT);
        this.checkDanger()
        this.animate();
    }

    checkDanger() {
        setInterval(() => {
            this.danger = !this.danger;
            if (this.danger) {
                this.offset['bottom'] = 0
            } else if (!this.danger) {
                this.offset['bottom'] = 20
            }
        }, 5000 + (3000 * Math.random()));
    }

    animate() {
        this.animationLogic();
        this.enemyLeft();
    };

    animationLogic() {
        this.animationInterval = setInterval(() => {
            if (this.danger) {
                // als array abspielen? -> machen
                this.playAnimation(this.IMAGES_TRANSITION);
                this.playAnimation(this.IMAGES_DANGER);
            } else if (this.hit) {
                this.playAnimation(this.IMAGES_HIT);
                this.applyUpstream(2, 1)
                setTimeout(() => {
                    this.hit = false;
                }, 400)
            } else {
                this.playAnimation(this.IMAGES_SWIMMING);
            }
        }, 200);
    }

    enemyLeft() {
        this.movingInterval = setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
    }
}

// timeout beenden animation wenn hit