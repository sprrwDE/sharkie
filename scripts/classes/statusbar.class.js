/**
 * Represents a status bar in the game, used to show health for either the character or the endboss.
 * The bar dynamically updates its image based on the current health percentage.
 * @extends DrawableObject
 */
class Statusbar extends DrawableObject {
    /**
     * @type {string[]} Array of image paths for the character's health bar states.
     */
    IMAGES_HP = [
        './assets/imgs/4. Marcadores/green/Life/100_  copia 2.png',
        './assets/imgs/4. Marcadores/green/Life/80_  copia 3.png',
        './assets/imgs/4. Marcadores/green/Life/60_  copia 3.png',
        './assets/imgs/4. Marcadores/green/Life/40_  copia 3.png',
        './assets/imgs/4. Marcadores/green/Life/20_ copia 4.png',
        './assets/imgs/4. Marcadores/green/Life/0_ copia 3.png'
    ];

    /**
     * @type {string[]} Array of image paths for the endboss's health bar states.
     */
    IMAGES_ENDBOSS = [
        './assets/imgs/4. Marcadores/orange/100_  copia.png',
        './assets/imgs/4. Marcadores/orange/80_  copia.png',
        './assets/imgs/4. Marcadores/orange/60_  copia.png',
        './assets/imgs/4. Marcadores/orange/40_  copia.png',
        './assets/imgs/4. Marcadores/orange/20_ copia 2.png',
        './assets/imgs/4. Marcadores/orange/0_ copia.png'
    ];

    /**
     * @type {number} The current health percentage represented by the status bar.
     */
    percentage = 100;

    /**
     * @type {string} Determines if the status bar is for the character ('char') or the endboss ('boss').
     */
    barType;

    /**
     * Initializes the status bar with given dimensions, coordinates, and type (character or boss).
     * @param {number} x - The x-coordinate of the status bar on the canvas.
     * @param {number} y - The y-coordinate of the status bar on the canvas.
     * @param {number} width - The width of the status bar.
     * @param {number} height - The height of the status bar.
     * @param {string} bar - The type of bar, either 'char' for character or 'boss' for endboss.
     */
    constructor(x, y, width, height, bar) {
        super().loadImage('./assets/imgs/4. Marcadores/green/Life/100_  copia 2.png');
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.defineBar(bar);
    }

    /**
     * Updates the health percentage displayed on the status bar.
     * @param {number} pctg - The current health percentage to display.
     */
    setPercentage(pctg) {
        this.percentage = pctg;
        const path = this.setPath();
        this.img = this.imgCache[path];
    }

    /**
     * Determines the image path for the current health percentage.
     * @returns {string} The path to the image representing the current health state.
     */
    setPath() {
        if (this.barType === 'char') {
            return this.IMAGES_HP[this.resolveImageIndex(this.percentage)];
        } else if (this.barType === 'boss') {
            return this.IMAGES_ENDBOSS[this.resolveImageIndex(this.percentage)];
        }
    }

    /**
     * Determines the image index based on the health percentage.
     * @param {number} pctg - The health percentage to evaluate.
     * @returns {number} The index of the image to display.
     */
    resolveImageIndex(pctg) {
        if (pctg > 80) {
            return 0;
        } else if (pctg > 60) {
            return 1;
        } else if (pctg > 40) {
            return 2;
        } else if (pctg > 20) {
            return 3;
        } 
        if (pctg > 0) {
            return 4;
        } else {
            return 5;
        }
    }

    /**
     * Sets the type of status bar based on the parameter and loads the respective images.
     * @param {string} bar - The type of bar, either 'char' for character or 'boss' for endboss.
     */
    defineBar(bar) {
        if (bar === "char") {
            this.setCharacterBar();
        }
        if (bar === "boss") {
            this.setBossBar();
        }
    }

    /**
     * Loads the images for the character's health bar and sets its type.
     */
    setCharacterBar() {
        this.loadImages(this.IMAGES_HP);
        this.barType = 'char';
        this.setPercentage(100);
    }

    /**
     * Loads the images for the endboss's health bar and sets its type.
     */
    setBossBar() {
        this.loadImages(this.IMAGES_ENDBOSS);
        this.barType = 'boss';
        this.setPercentage(100);
    }
}
