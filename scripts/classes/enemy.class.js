/**
 * Represents an enemy in the game with specific behaviors for animations, danger states, 
 * and intervals. Extends MovableObject and provides additional functionality for 
 * managing enemy animations and reactions upon being hit.
 * 
 * @extends MovableObject
 */
class Enemy extends MovableObject {
  /**
   * @type {string} hitboxColor - The color of the hitbox for the enemy.
   * @type {boolean} danger - Indicates whether the enemy is in a dangerous state.
   * @type {boolean} hit - Indicates if the enemy has been hit.
   * @type {Audio} sound - Audio file associated with enemy actions.
   * @type {number} damage - The amount of damage this enemy can inflict.
   * @type {number} dangerRange - Distance within which the enemy becomes dangerous.
   * @type {?number} dangerInterval - Interval for handling enemy danger state.
   * @type {?number} animationInterval - Interval for managing enemy animations.
   * @type {?number} movingInterval - Interval for handling enemy movement.
   * @type {?number} upstream - Interval reference for the upstream logic when hit.
   */
  hitboxColor = "red";
  danger = false;
  hit = false;
  sound;
  dangerInterval = null;
  animationInterval = null;
  movingInterval = null;
  damage = 5;
  dangerRange = 5000;

  /**
   * Initializes a new instance of the Enemy class.
   */
  constructor() {
    super();
  }

  /**
   * Handles the animation logic for the enemy, switching between different 
   * animations based on the enemy's state (normal, danger, or hit).
   */
  animationLogic() {
    this.animationInterval = setInterval(() => {
      if (this.hit) {
        this.playAnimation(this.IMAGES_HIT);
        this.upstreamLogic();
      } else if (this.danger && !this.hit) {
        this.playAnimation(this.IMAGES_DANGER);
      } else {
        this.playAnimation(this.IMAGES_SWIMMING);
      }
    }, 200);
  }

  /**
   * Logic for handling the enemy's upstream movement when hit, applying an upward
   * motion and clearing it after a set duration.
   */
  upstreamLogic() {
    if (!this.upstream) {
      this.applyUpstream(2, 1);
    }
    setTimeout(() => {
      if (this.upstream) {
        clearInterval(this.upstream);
        console.log("Upstream interval cleared:", this.upstream);
        this.upstream = null;
      } else {
        console.log("No upstream interval to clear.");
      }
    }, 1200);
  }

  /**
   * Stops all ongoing intervals related to the enemy, including animation,
   * movement, and danger intervals, preventing further actions after being hit or removed.
   */
  stopAllIntervals() {
    if (this.animationInterval) {
      clearInterval(this.animationInterval);
      this.animationInterval = null;
    }
    if (this.movementIntervalJellyfish) {
      clearInterval(this.movementIntervalJellyfish);
      this.movementIntervalJellyfish = null;
    }
    if (this.dangerInterval) {
      clearInterval(this.dangerInterval);
      this.dangerInterval = null;
    }
  }
}
