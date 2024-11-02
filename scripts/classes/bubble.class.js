/**
 * Represents a bubble object that can be thrown and affected by gravity within the game.
 * Extends MovableObject to allow for position and movement logic.
 */
class Bubble extends MovableObject {
    /**
     * @type {number} gravitySpeed - Initial speed at which gravity affects the bubble.
     * @type {number} acceleration - Rate at which the gravity effect accelerates.
     * @type {string} hitboxColor - Color of the bubble's hitbox for debugging.
     * @type {boolean} toxic - Indicates if the bubble is toxic (special ability).
     * @type {boolean} air - Indicates if the bubble is a regular air bubble.
     * @type {Audio} sound - Audio element to play when the bubble is thrown.
     * @type {number} bubbleGravity - Interval ID for applying gravity to the bubble.
     * @type {number} bubbleMovement - Interval ID for controlling the bubble's horizontal movement.
     * @type {World} world - Reference to the game world to access boundaries and other objects.
     * @type {Object} offset - Offset for the bubble's hitbox positioning.
     */
  
    gravitySpeed = 0.5;
    acceleration = 0.3;
    hitboxColor = 'blue';
    toxic = false;
    air = false;
    sound = new Audio('./assets/sounds/bubble.wav');
    bubbleGravity;
    bubbleMovement;
    world;
    offset = {
      'left': 0,
      'right': 0,
      'top': 0,
      'bottom': 0
    };
  
    /**
     * Initializes a new bubble instance with position, size, direction, and image settings.
     * @param {number} x - The x-coordinate where the bubble is created.
     * @param {number} y - The y-coordinate where the bubble is created.
     * @param {number} width - Width of the parent object (e.g., character) to calculate initial position.
     * @param {number} height - Height of the parent object.
     * @param {boolean} mirror - Direction of the bubble (true for right, false for left).
     * @param {string} image - Path to the image representing the bubble.
     */
    constructor(x, y, width, height, mirror, image) {
      super();
      this.loadImage(image);
      this.x = x;
      this.y = y;
      this.width = 25;
      this.height = 25;
      this.throw(x, y, width, height, mirror);
    }
  
    /**
     * Determines the direction of the bubble and initiates its movement and gravity.
     * @param {number} x - The x-coordinate where the bubble is created.
     * @param {number} y - The y-coordinate where the bubble is created.
     * @param {number} width - Width of the parent object.
     * @param {number} height - Height of the parent object.
     * @param {boolean} mirror - Direction of the bubble.
     */
    throw(x, y, width, height, mirror) {
      if (mirror) {
        this.throwRight(x, y, width, height);
      } else {
        this.throwLeft(x, y, width, height);
      }
      this.applyBubbleGravity();
    }
  
    /**
     * Moves the bubble to the right and checks if it is off-screen to clear intervals.
     * @param {number} x - The x-coordinate where the bubble is created.
     * @param {number} y - The y-coordinate where the bubble is created.
     * @param {number} width - Width of the parent object.
     * @param {number} height - Height of the parent object.
     */
    throwRight(x, y, width, height) {
      this.y = y + height / 2;
      this.bubbleMovement = setInterval(() => {
        this.x -= 20;
        if (this.x < 0) {
          this.clearBubbleIntervals();
        }
      }, 25);
    }
  
    /**
     * Moves the bubble to the left and checks if it is off-screen to clear intervals.
     * @param {number} x - The x-coordinate where the bubble is created.
     * @param {number} y - The y-coordinate where the bubble is created.
     * @param {number} width - Width of the parent object.
     * @param {number} height - Height of the parent object.
     */
    throwLeft(x, y, width, height) {
      this.x = x + width;
      this.y = y + height / 2;
      this.bubbleMovement = setInterval(() => {
        this.x += 20;
        if (this.x > -this.world.camera_x + this.world.canvas.width) {
          this.clearBubbleIntervals();
        }
      }, 25);
    }
  
    /**
     * Applies gravity to the bubble, causing it to move upwards and accelerate until it goes off-screen.
     */
    applyBubbleGravity() {
      this.bubbleGravity = setInterval(() => {
        this.y -= this.gravitySpeed;
        this.gravitySpeed += this.acceleration;
        if (this.y < 0 || this.y > this.world.canvas.height) {
          this.clearBubbleIntervals();
        }
      }, 1000 / 25);
    }
  
    /**
     * Clears all movement and gravity intervals associated with the bubble, removing it from the game world.
     */
    clearBubbleIntervals() {
      clearInterval(this.bubbleGravity);
      clearInterval(this.bubbleMovement);
      const index = this.world.bubbles.indexOf(this);
      if (index > -1) {
        this.world.bubbles.splice(index, 1);
      }
    }
  }
  