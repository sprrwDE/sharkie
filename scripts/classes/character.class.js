/**
 * Represents the main character in the game, handling its movement, animations, and interactions with the environment.
 * Extends MovableObject to allow for position, movement, and animation logic.
 */
class Character extends MovableObject {
  /**
   * @type {World} world - Reference to the game world to access keyboard inputs and enemy interactions.
   * @type {CharacterDB} db - Database containing character assets and sounds.
   * @type {boolean} moving - Indicates if the character is currently moving.
   * @type {number} moveSpeed - Speed of the character's movement.
   * @type {string} hitboxColor - Color of the character's hitbox for debugging.
   * @type {Object} offset - Offset for the character's hitbox positioning.
   * @type {boolean} immune - If true, the character is immune to damage.
   * @type {boolean} finslapActive - If true, the finslap attack is active.
   * @type {number} health - Current health of the character.
   * @type {number} lastMovement - Timestamp of the last movement action.
   * @type {boolean} deathAnimationPlayed - Flag to indicate if the death animation has been played.
   */

  world;
  db;
  moving = false;
  moveSpeed = 4;
  hitboxColor = "green";
  offset = { left: 40, right: 80, top: 90, bottom: 130 };
  immune = false;
  finslapActive = false;
  health = 100;
  lastMovement = 0;
  deathAnimationPlayed = false;

  /**
   * Initializes the character with assets and sets up the game world reference.
   * @param {World} world - The game world where the character is placed.
   */
  constructor(world) {
    super().loadImage("./assets/imgs/1.Sharkie/1.IDLE/1.png");
    this.db = new CharacterDB();
    this.world = world;
    this.loadImageCaches(this.db.allImages);
    this.animate();
    this.checkSnooze();
  }

  /**
   * Begins character movement and animation logic.
   */
  animate() {
    this.movementLogic();
    this.animationLogic();
  }

  /**
   * Controls the animations for movement and fighting actions.
   */
  animationLogic() {
    setInterval(() => {
      if (!this.finslapActive && !this.bubbleActive) {
        this.animationLogicMoving();
        this.animationLogicFighting();
      }
    }, 150);
  }

  /**
   * Defines the logic for character movement, checking keyboard inputs for movement direction.
   */
  movementLogic() {
    this.moving = false;
    this.movementInterval = setInterval(() => {
      if (this.world.keyboard.RIGHT && this.x < this.world.level.levelEndX) {
        this.characterRightLogic();
      }
      if (this.world.keyboard.LEFT && this.x > 0) {
        this.characterLeftLogic();
      }
      if (this.world.keyboard.UP && this.y > -80) {
        this.moveUp();
        this.moving = true;
      }
      if (this.world.keyboard.DOWN && this.y < 300) {
        this.moveDown();
        this.moving = true;
      }
    }, 1000 / 60);
  }

  /**
   * Handles logic for moving the character to the right, adjusting the camera position.
   */
  characterRightLogic() {
    this.world.camera_x = -this.x + 100;
    this.mirror = false;
    this.moving = true;
    this.moveRight();
  }

  /**
   * Handles logic for moving the character to the left, adjusting the camera position.
   */
  characterLeftLogic() {
    this.world.camera_x = -this.x + 100;
    this.mirror = true;
    this.moving = true;
    this.moveLeft();
  }

  /**
   * Checks if any movement-related button is pressed.
   * @returns {boolean} True if any movement button is pressed, otherwise false.
   */
  buttonPressed() {
    this.checkSnooze();
    return (
      this.world.keyboard.UP ||
      this.world.keyboard.DOWN ||
      this.world.keyboard.LEFT ||
      this.world.keyboard.RIGHT
    );
  }

  /**
   * Controls the logic for movement-related animations and idle state animations.
   */
  animationLogicMoving() {
    this.moving = false;
    this.slap = false;
    if (this.isDead()) {
      this.animationLogicDeath();
    } else if (this.isHurt()) {
      this.hurtByEnemy();
    } else if (this.buttonPressed()) {
      this.characterSwimmingLogic();
    } else if (this.checkSnooze()) {
      this.snoozeLogic();
    } else {
      this.playAnimation(this.db.IMAGES_IDLE);
      this.db.swim_sound.pause();
      this.db.snore_sound.pause();
    }
  }

  /**
   * Plays hurt animation based on the type of enemy that caused damage.
   */
  hurtByEnemy() {
    if (this.world.enemyType === "pufferfish") {
      this.playAnimation(this.db.IMAGES_POISONED);
    } else if (this.world.enemyType === "endboss") {
      this.playAnimation(this.db.IMAGES_POISONED);
    } else if (this.world.enemyType === "jellyfish") {
      this.playAnimation(this.db.IMAGES_SHOCK);
    }
  }

  /**
   * Plays the swimming animation and sound, setting the character's state to moving.
   */
  characterSwimmingLogic() {
    this.playAnimation(this.db.IMAGES_SWIM);
    this.db.snore_sound.pause();
    this.moving = true;
    this.lastMovement = new Date().getTime();
    this.playSoundCharacter(this.db.swim_sound);
  }

  /**
   * Checks if the character has been idle long enough to enter a snooze state.
   * @returns {boolean} True if the character has been idle for more than 5 seconds.
   */
  checkSnooze() {
    if (!this.lastMovement) {
      this.lastMovement = new Date().getTime();
    }
    let timespan = (new Date().getTime() - this.lastMovement) / 1000;
    return timespan > 5;
  }

  /**
   * Plays the snooze animation and applies gravity if the character is near the bottom of the screen.
   */
  snoozeLogic() {
    this.playAnimation(this.db.IMAGES_SNOOZE);
    this.playSoundCharacter(this.db.snore_sound);
    if (this.y < this.world.canvas.height - 50) {
      this.applyGravity(1, 0.5);
    } else {
      this.y = this.world.canvas.height - this.height;
    }
  }

  /**
   * Plays the death animation, determining the type of death based on the enemy type.
   */
  animationLogicDeath() {
    if (this.deathAnimationPlayed) return;
    this.deathAnimationPlayed = true;
    this.imageIndex = 0;
    const deathImages =
      this.isDead() && this.world.enemyType === "jellyfish"
        ? this.db.IMAGES_DEAD_SHOCK
        : this.db.IMAGES_DEAD;
    this.playDeathAnimation(deathImages);
    this.playSoundCharacter(this.db.death_sound);
  }

  /**
   * Plays the death animation frame by frame and shows the end screen when complete.
   * @param {string[]} images - Array of images representing the death animation.
   */
  playDeathAnimation(images) {
    const deathInterval = setInterval(() => {
      if (this.imageIndex < images.length) {
        clearInterval(this.movementInterval);
        this.img = this.imgCache[images[this.imageIndex]];
        this.imageIndex++;
      } else {
        this.endAfterDeath(deathInterval, images);
      }
    }, 100);
  }

  /**
   * Ends the death animation and displays the game over screen.
   * @param {number} deathInterval - Interval ID for the death animation.
   * @param {string[]} images - Array of images representing the death animation.
   */
  endAfterDeath(deathInterval, images) {
    this.imageIndex = images.length - 1;
    bgSound.pause();
    this.db.snore_sound.pause();
    this.db.swim_sound.pause();
    showEndScreen();
    clearInterval(deathInterval);
  }

  /**
   * Controls the fighting animation logic, handling different attacks.
   */
  animationLogicFighting() {
    if (this.world.keyboard.FIN && !this.finslapActive) {
      this.activateFinslap();
    } else if (this.world.keyboard.SHOOT && !this.bubbleActive) {
      this.bubbleAnimation(this.db.IMAGES_SHOOTING, 'air');
    } else if (this.world.keyboard.POISON  && !this.bubbleActive) {
      this.bubbleAnimation(this.db.IMAGES_POISONBUBBLE, 'poison');
    }
  }

/**
 * Activates the bubble animation by setting `bubbleActive` to true and initializing the animation sequence.
 * @param {string[]} arr - Array of images representing the bubble animation.
 */
activateBubble(arr) {
  this.bubbleActive = true;
  this.imageIndex = 0;
  this.bubbleAnimation(arr);
}

/**
 * Plays the bubble animation frame by frame and triggers `endBubble` once the animation completes.
 * @param {string[]} arr - Array of images representing the bubble animation.
 * @param {boolean} val - Optional flag passed to check if a new bubble should be thrown after animation.
 */
bubbleAnimation(arr, val) {
  if (this.bubbleActive) return; 
  this.bubbleActive = true;
  this.imageIndex = 0;

  const bubbleInterval = setInterval(() => {
    if (this.imageIndex < arr.length) {
      this.img = this.imgCache[arr[this.imageIndex]];
      this.imageIndex++;
    } else {
      this.endBubble(bubbleInterval);
      this.world.checkBubbleThrow(val); // Check if another bubble should be thrown
    }
  }, 100); 
}

/**
 * Ends the bubble animation by clearing the interval and resetting `bubbleActive` after a brief delay.
 * @param {number} bubbleInterval - Interval ID for the bubble animation.
 */
endBubble(bubbleInterval) {
  clearInterval(bubbleInterval);
  this.imageIndex = 0;
  
  setTimeout(() => {
    this.bubbleActive = false; // Allows for a new bubble to be thrown after animation ends
  }, 50); 
}


  /**
   * Activates the finslap attack, starting its animation and setting immunity.
   */
  activateFinslap() {
    this.finslapActive = true;
    this.imageIndex = 0;
    this.finslapAnimation();
  }

  /**
   * Plays the finslap animation frame by frame and ends it when complete.
   */
  finslapAnimation() {
    const finslapInterval = setInterval(() => {
      if (this.imageIndex < this.db.IMAGES_FINSLAP.length) {
        this.immune = true
        this.img = this.imgCache[this.db.IMAGES_FINSLAP[this.imageIndex]];
        this.imageIndex++;
      } else {
        this.endSlap(finslapInterval);
      }
    }, 100);
    this.playSoundCharacter(this.db.finslap_sound);
  }

  /**
   * Ends the finslap attack, resetting relevant states and intervals.
   * @param {number} finslapInterval - Interval ID for the finslap animation.
   */
  endSlap(finslapInterval) {
    clearInterval(finslapInterval);
    this.finslapActive = false;
    this.immune = false;
    this.imageIndex = 0;
  }

  /**
   * Plays a character sound if sounds are not muted.
   * @param {Audio} soundelement - The sound element to play.
   */
  playSoundCharacter(soundelement) {
    if (!mute) {
      soundelement.play();
    }
  }
}