/**
 * Represents a status icon in the game, which can either be a coin or a bottle icon.
 * The icon displays an animated sequence of images based on the type.
 * @extends MovableObject
 */
class StatusIcon extends MovableObject {
    /**
     * @type {string[]} Array of image paths for the animated poison bottle icon.
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
     * @type {string[]} Array of image paths for the animated coin icon.
     */
    IMAGES_COIN = [
        './assets/imgs/4. Marcadores/1. Coins/1.png',
        './assets/imgs/4. Marcadores/1. Coins/2.png',
        './assets/imgs/4. Marcadores/1. Coins/3.png',
        './assets/imgs/4. Marcadores/1. Coins/4.png'
    ];

    /**
     * @type {string} Determines if the icon is a 'coin' or a 'bottle'.
     */
    barType;

    /**
     * Initializes the status icon with specified dimensions and icon type.
     * @param {number} x - The x-coordinate of the icon on the canvas.
     * @param {number} y - The y-coordinate of the icon on the canvas.
     * @param {number} width - The width of the icon.
     * @param {number} height - The height of the icon.
     * @param {string} icon - The type of icon, either 'coin' or 'bottle'.
     */
    constructor(x, y, width, height, icon) {
        super().loadImage('./assets/imgs/4. Marcadores/Posion/Animada/1.png');
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.defineIcon(icon);
        this.animate();
    }

    /**
     * Sets the icon type and loads the corresponding images based on the icon parameter.
     * @param {string} icon - The type of icon, either 'coin' or 'bottle'.
     */
    defineIcon(icon) {
        if (icon === "coin") {
            this.loadImages(this.IMAGES_COIN);
            this.barType = 'coin';
        } else if (icon === "bottle") {
            this.loadImages(this.IMAGES_BOTTLE);
            this.barType = 'bottle';
        }
    }

    /**
     * Starts the animation of the icon by playing the corresponding images in a loop.
     */
    animate() {
        setInterval(() => {
            if (this.barType === 'coin') {
                this.playAnimation(this.IMAGES_COIN);
            } else if (this.barType === 'bottle') {
                this.playAnimation(this.IMAGES_BOTTLE);
            }
        }, 200);
    }
}
