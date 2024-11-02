/**
 * Represents a background object in the game world.
 * Extends MovableObject to allow for dynamic placement and scrolling.
 */
class BackgroundObject extends MovableObject {
    /**
     * Height of the background object, based on the canvas height.
     * @type {number}
     */
    height = canvasHeight;

    /**
     * Width of the background object, based on the canvas width.
     * @type {number}
     */
    width = canvasWidth;

    /**
     * Creates a new background object with specified image and coordinates.
     * Sets the initial position and loads the background image.
     * @param {string} imagePath - The path to the background image file.
     * @param {number} coord - The x-coordinate for positioning the background object.
     */
    constructor(imagePath, coord) {
        super();
        this.loadImage(imagePath);
        this.y = canvasHeight - this.height;
        this.x = coord;
    }
}
