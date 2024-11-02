/**
 * Represents a collectible coin in the game world.
 * Extends MovableObject to allow for position, animation, and interaction with the player.
 */
class Coin extends MovableObject {
  /**
   * @type {string[]} IMAGES_COIN - Array of paths to images for the coin animation.
   * @type {Audio} sound - Sound effect that plays when the coin is collected.
   * @type {number} animationInterval - ID of the interval used for the animation.
   */
  IMAGES_COIN = [
    "./assets/imgs/4. Marcadores/1. Coins/1.png",
    "./assets/imgs/4. Marcadores/1. Coins/2.png",
    "./assets/imgs/4. Marcadores/1. Coins/3.png",
    "./assets/imgs/4. Marcadores/1. Coins/4.png",
  ];
  sound = new Audio("./assets/sounds/coin.wav");
  animationInterval;

  /**
   * Initializes the coin at a specified position and begins its animation.
   * @param {number} x - The x-coordinate where the coin is placed.
   * @param {number} y - The y-coordinate where the coin is placed.
   */
  constructor(x, y) {
    super().loadImage("./assets/imgs/4. Marcadores/1. Coins/1.png");
    this.loadImages(this.IMAGES_COIN);
    this.x = x;
    this.y = y;
    this.width = 40;
    this.height = 40;
    this.animate();
  }

  /**
   * Starts the animation for the coin, cycling through images to create a rotation effect.
   * @private
   */
  animate() {
    this.animationInterval = setInterval(() => {
      this.playAnimation(this.IMAGES_COIN);
    }, 200);
  }
}