/**
 * Represents a green pufferfish enemy in the game, with various animations and behavior.
 * It can swim, transition to a dangerous state, and react to hits by the player.
 * @extends Enemy
 */
class PufferFishGreen extends Enemy {
    /**
     * @type {string[]} Array of image paths for the pufferfish's swimming animation.
     */
    IMAGES_SWIMMING = [
        './assets/imgs/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
        './assets/imgs/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
        './assets/imgs/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
        './assets/imgs/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
        './assets/imgs/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png'
    ];

    /**
     * @type {string[]} Array of image paths for the pufferfish's transition animation.
     */
    IMAGES_TRANSITION = [
        './assets/imgs/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition1.png',
        './assets/imgs/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition2.png',
        './assets/imgs/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition3.png',
        './assets/imgs/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition4.png',
        './assets/imgs/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition5.png'
    ];

    /**
     * @type {string[]} Array of image paths for the pufferfish's hit animation.
     */
    IMAGES_HIT = [
        './assets/imgs/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 1 (can animate by going up).png',
        './assets/imgs/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 2 (can animate by going down to the floor after the Fin Slap attack).png',
        './assets/imgs/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 3 (can animate by going down to the floor after the Fin Slap attack).png'
    ];

    /**
     * @type {string[]} Array of image paths for the pufferfish's dangerous state animation.
     */
    IMAGES_DANGER = [
        './assets/imgs/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim1.png',
        './assets/imgs/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim2.png',
        './assets/imgs/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim3.png',
        './assets/imgs/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim4.png',
        './assets/imgs/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim5.png'
    ];

    /**
     * @type {Object} Offset values for the pufferfish's hitbox.
     */
    offset = {
        left: 0,
        right: 0,
        top: 0,
        bottom: 20
    };

    /**
     * @type {string} The type identifier for this enemy.
     */
    type = 'pufferfish';

    /**
     * @type {HTMLAudioElement} Sound effect played when the pufferfish is hit.
     */
    sound = new Audio('./assets/sounds/autsch.wav');

    /**
     * @type {?number} Interval ID for the upstream movement.
     */
    upstream = null;

    /**
     * Initializes the pufferfish by setting its images, behaviors, and starting its animation.
     */
    constructor() {
        super();
        this.loadImage('./assets/imgs/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png');
        this.setEnemyCharacteristics();
        this.loadImages(this.IMAGES_SWIMMING);
        this.loadImages(this.IMAGES_TRANSITION);
        this.loadImages(this.IMAGES_DANGER);
        this.loadImages(this.IMAGES_HIT);
        this.checkDanger(this.dangerRange);
        this.animate();
    }

    /**
     * Checks and toggles the pufferfish's danger state at random intervals, adjusting its damage and hitbox offset.
     * @param {number} range - The base range for danger toggling frequency.
     */
    checkDanger(range) {
        setInterval(() => {
            this.danger = !this.danger;
            this.offset.bottom = this.danger ? 0 : 20;
            this.damage = this.danger ? 10 : 5;
        }, range + range * Math.random());
    }

    /**
     * Starts the animation logic for the pufferfish, alternating between swimming, transition, and danger states.
     */
    animate() {
        this.animationLogic();
        this.enemyLeft();
    }

    /**
     * Handles the animation state changes based on whether the pufferfish is in danger or has been hit.
     */
    animationLogic() {
        this.animationInterval = setInterval(() => {
            if (this.danger) {
                this.playAnimation(this.IMAGES_TRANSITION);
                this.playAnimation(this.IMAGES_DANGER);
            } else if (this.hit) {
                this.playAnimation(this.IMAGES_HIT);
                this.startUpstream();
            } else {
                this.playAnimation(this.IMAGES_SWIMMING);
            }
        }, 200);
    }

    /**
     * Starts an upstream movement after being hit, simulating an escape reaction. 
     * Clears the interval after a set time.
     */
    startUpstream() {
        if (!this.upstream) {
            this.applyUpstream(2, 1);
            setTimeout(() => {
                clearInterval(this.upstream);
                this.upstream = null; 
                this.hit = false; 
            }, 1200);
        }
    }

    /**
     * Continuously moves the pufferfish left across the screen if loading is complete.
     */
    enemyLeft() {
        this.movingInterval = setInterval(() => {
            if(loadingComplete) {
                this.moveLeft();
            }
        }, 1000 / 60);
    }
}