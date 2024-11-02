/**
 * Represents a light object in the game, which is a moving background element.
 * Inherits properties and methods from MovableObject.
 */
class Light extends MovableObject {
  
  /**
   * @type {number} height - The height of the light object, set to the canvas height.
   */
  height = canvasHeight;

  /**
   * @type {number} width - The width of the light object, set to the canvas width.
   */
  width = canvasWidth;

  /**
   * @type {number} moveSpeed - The movement speed of the light object, default is 0.05.
   */
  moveSpeed = 0.05;

  /**
   * Initializes a new instance of the Light class.
   * @param {string} imagePath - The path to the image representing the light object.
   * @param {number} x - The initial x-coordinate position of the light object.
   */
  constructor(imagePath, x) {
    super().loadImage(imagePath);
    this.y = canvasHeight - this.height;
    this.x = x - this.width / 2;
    this.moveSpeed = 0.05;
  }
}
