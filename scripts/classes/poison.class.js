/**
 * Represents a poison object that animates a series of images to create a bottle animation.
 * Used to display poison bottles in the game that can be collected by the player.
 * @extends MovableObject
 */
class Poison extends MovableObject {

    /** 
     * @type {string[]} Array of image paths for the poison bottle animation frames.
     */
    IMAGES_BOTTLE = [
        './assets/imgs/4. Marcadores/Posion/Animada/1.png',
        './assets/imgs/4. Marcadores/Posion/Animada/2.png',
        './assets/imgs/4. Marcadores/Posion/Animada/3.png',
        './assets/imgs/4. Marcadores/Posion/Animada/4.png',
        './assets/imgs/4. Marcadores/Posion/Animada/5.png',
        './assets/imgs/4. Marcadores/Posion/Animada/6.png',
        './assets/imgs/4. Marcadores/Posion/Animada/7.png',
        './assets/imgs/4. Marcadores/Posion/Animada/8.png'
    ];

    /**
     * @type {HTMLAudioElement} Sound played when the poison is collected.
     */
    sound = new Audio('./assets/sounds/bottle.mp3');

    /** 
     * @type {?number} Interval ID for the poison bottle animation.
     */
    animationInterval;

    /**
     * Creates a poison object at the specified position and initializes its animation.
     * @param {number} x - The x-coordinate of the poison object.
     * @param {number} y - The y-coordinate of the poison object.
     */
    constructor(x, y) {
        super().loadImage("./assets/imgs/4. Marcadores/Posion/Animada/1.png");
        this.loadImages(this.IMAGES_BOTTLE);
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50;
        this.animate();
    }

    /**
     * Starts the animation for the poison bottle, cycling through the IMAGES_BOTTLE frames.
     */
    animate() {
        this.animationInterval = setInterval(() => {
            this.playAnimation(this.IMAGES_BOTTLE);
        }, 200);
    }
}
