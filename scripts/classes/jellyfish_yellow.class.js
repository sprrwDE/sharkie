/**
 * Represents a yellow jellyfish enemy in the game. This class provides 
 * specific animations for swimming, danger, and hit states, as well as 
 * unique characteristics associated with the yellow jellyfish type.
 * 
 * @extends Enemy
 */
class JellyFishYellow extends Enemy {
    /**
     * @type {string[]} IMAGES_SWIMMING - Array of image paths for the swimming animation.
     * @type {string[]} IMAGES_DANGER - Array of image paths for the danger animation.
     * @type {string[]} IMAGES_HIT - Array of image paths for the hit animation.
     * @type {string} type - Type identifier for the enemy (jellyfish).
     * @type {Audio} sound - Sound effect for when the jellyfish is shocked.
     */
    IMAGES_SWIMMING = [
        './assets/imgs/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png',
        './assets/imgs/2.Enemy/2 Jelly fish/Regular damage/Yellow 2.png',
        './assets/imgs/2.Enemy/2 Jelly fish/Regular damage/Yellow 3.png',
        './assets/imgs/2.Enemy/2 Jelly fish/Regular damage/Yellow 4.png'
    ];
    
    IMAGES_DANGER = [
        './assets/imgs/2.Enemy/2 Jelly fish/S｣per dangerous/Green 1.png',
        './assets/imgs/2.Enemy/2 Jelly fish/S｣per dangerous/Green 2.png',
        './assets/imgs/2.Enemy/2 Jelly fish/S｣per dangerous/Green 3.png',
        './assets/imgs/2.Enemy/2 Jelly fish/S｣per dangerous/Green 4.png'
    ];

    IMAGES_HIT = [
        './assets/imgs/2.Enemy/2 Jelly fish/Dead/Yellow/y1.png',
        './assets/imgs/2.Enemy/2 Jelly fish/Dead/Yellow/y2.png',
        './assets/imgs/2.Enemy/2 Jelly fish/Dead/Yellow/y3.png',
        './assets/imgs/2.Enemy/2 Jelly fish/Dead/Yellow/y4.png'
    ];

    type = 'jellyfish';
    sound = new Audio('./assets/sounds/shock.wav');

    /**
     * Initializes a new instance of the JellyFishYellow class, setting up animations 
     * and characteristics specific to this yellow jellyfish type.
     */
    constructor() {
        super().loadImage('./assets/imgs/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png');
        this.setEnemyCharacteristics();
        this.loadImages(this.IMAGES_SWIMMING);
        this.loadImages(this.IMAGES_DANGER);
        this.loadImages(this.IMAGES_HIT);
        this.checkDanger(this.dangerRange);
        this.animate();
    }

    /**
     * Starts the yellow jellyfish's animation and movement, including managing 
     * different states like danger and regular swimming, as well as movement patterns.
     */
    animate() {
        this.animationLogic();
        this.enemyUpAndDown();
    }
}