/**
 * Represents a purple jellyfish enemy in the game. Extends the Enemy class 
 * with specific animations for swimming, danger, and hit states, as well as 
 * unique characteristics for a jellyfish type.
 * 
 * @extends Enemy
 */
class JellyFishPurple extends Enemy {
    /**
     * @type {string[]} IMAGES_SWIMMING - Array of image paths for the swimming animation.
     * @type {string[]} IMAGES_DANGER - Array of image paths for the danger animation.
     * @type {string[]} IMAGES_HIT - Array of image paths for the hit animation.
     * @type {string} type - Type identifier for the enemy (jellyfish).
     * @type {Audio} sound - Sound effect for when the jellyfish is shocked.
     */
    IMAGES_SWIMMING = [
        './assets/imgs/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png',
        './assets/imgs/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png',
        './assets/imgs/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png',
        './assets/imgs/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png'
    ];

    IMAGES_DANGER = [
        './assets/imgs/2.Enemy/2 Jelly fish/S｣per dangerous/Pink 1.png',
        './assets/imgs/2.Enemy/2 Jelly fish/S｣per dangerous/Pink 2.png',
        './assets/imgs/2.Enemy/2 Jelly fish/S｣per dangerous/Pink 3.png',
        './assets/imgs/2.Enemy/2 Jelly fish/S｣per dangerous/Pink 4.png'
    ];

    IMAGES_HIT = [
        './assets/imgs/2.Enemy/2 Jelly fish/Dead/Lila/L1.png',
        './assets/imgs/2.Enemy/2 Jelly fish/Dead/Lila/L2.png',
        './assets/imgs/2.Enemy/2 Jelly fish/Dead/Lila/L3.png',
        './assets/imgs/2.Enemy/2 Jelly fish/Dead/Lila/L4.png'
    ];

    type = 'jellyfish';
    sound = new Audio('./assets/sounds/shock.wav');

    /**
     * Initializes a new instance of the JellyFishPurple class, setting up animations 
     * and characteristics specific to this jellyfish type.
     */
    constructor() {
        super().loadImage('./assets/imgs/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png');
        this.setEnemyCharacteristics();
        this.loadImages(this.IMAGES_SWIMMING);
        this.loadImages(this.IMAGES_DANGER);
        this.loadImages(this.IMAGES_HIT);
        this.checkDanger(this.dangerRange);
        this.animate();
    }

    /**
     * Starts the jellyfish's animation and movement. This includes handling different
     * states like danger and regular swimming, as well as movement patterns.
     */
    animate() {
        this.animationLogic();
        this.enemyUpAndDown();
    }
}
