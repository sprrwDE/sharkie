/**
 * Represents the Endboss character in the game, with specific animations, movements, and interactions.
 * Extends MovableObject to allow for dynamic positioning, movement, and collisions.
 */
class Endboss extends MovableObject {
  /**
   * @type {BossDB} db - Database for endboss images and sounds.
   * @type {Object} offset - Defines the hitbox offset for accurate collision.
   * @type {string} hitboxColor - Color used to render the hitbox for debugging.
   * @type {string} type - Specifies the object type as 'endboss'.
   * @type {boolean} immune - Immunity status of the endboss to avoid consecutive hits.
   * @type {boolean} contact - Contact status with the player character.
   * @type {boolean} firstContact - Flag indicating if the first contact with the player has been made.
   * @type {number} index - Image index for animations.
   * @type {boolean} mirror - Indicates if the endboss should be mirrored.
   * @type {boolean} visible - Visibility status of the endboss.
   * @type {number} dangerRange - Range within which the endboss becomes dangerous to the player.
   * @type {number} moveSpeed - Movement speed of the endboss.
   * @type {World} world - Reference to the game world for accessing character position.
   * @type {number} imageIndex - Current image index for animation frames.
   * @type {boolean} deathAnimationPlayed - Flag to track if the death animation has been played.
   */

  db;
  offset = { left: 20, right: 20, top: 160, bottom: 120 };
  hitboxColor = "red";
  type = "endboss";
  immune = false;
  contact = false;
  firstContact = false;
  index = 0;
  mirror = false;
  visible = false;
  dangerRange = 3000;
  moveSpeed = 0.8;
  world;
  contactInterval;
  sound;
  imageIndex = 0;
  deathAnimationPlayed = false;

  /**
   * Initializes a new Endboss instance with specific attributes and sets up animations and event listeners.
   * @param {World} world - The game world instance that contains the player and other entities.
   */
  constructor(world) {
    super().loadImage("./assets/imgs/2.Enemy/3 Final Enemy/2.floating/1.png");
    this.db = new BossDB();
    this.sound = this.db.sound;
    this.loadImageCaches(this.db.allImages);
    this.world = world;
    this.y = 0;
    this.x = 700 * 3;
    this.height = 467;
    this.width = 400;
    this.checkEndbossContact();
    this.animate();
  }

  /**
   * Manages the overall animations of the endboss, including death, contact introduction, hurt, and dash animations.
   */
  animate() {
    this.animationLogic();
    this.movementLogic();
  }

  /**
   * Controls the logic of endboss animations based on health, contact, immunity, and danger status.
   */
  animationLogic() {
    setInterval(() => {
      if (this.health <= 0 && !this.deathAnimationPlayed) {
        this.playDeathAnimation();
      } else if (this.contact && !this.firstContact) {
        this.introduceEndboss();
      } else if (this.immune) {
        this.playAnimation(this.db.IMAGES_HURT);
      } else if (this.danger) {
        this.playAnimation(this.db.IMAGES_DASH);
      } else if (this.firstContact && !this.deathAnimationPlayed) {
        this.playAnimation(this.db.IMAGES_SWIMMING);
      }
    }, 100);
  }

  /**
   * Plays the endboss introduction animation when contact is first made.
   */
  introduceEndboss() {
    if (this.imageIndex < this.db.IMAGES_SPAWNING.length) {
      this.img = this.imgCache[this.db.IMAGES_SPAWNING[this.imageIndex]];
      this.imageIndex++;
    } else {
      this.firstContact = true;
      this.imageIndex = 0;
    }
  }

  /**
   * Plays the endboss death animation once, setting a flag once completed.
   */
  playDeathAnimation() {
    if (this.imageIndex < this.db.IMAGES_DEAD.length) {
      this.img = this.imgCache[this.db.IMAGES_DEAD[this.imageIndex]];
      this.imageIndex++;
    } else {
      this.deathAnimationPlayed = true;
      this.imageIndex = this.db.IMAGES_DEAD.length - 1;
      this.playSoundBoss(this.db.death_sound);
    }
  }

  /**
   * Moves the endboss based on player character's position.
   * Mirrors the endboss to face the player as it moves.
   */
  endbossMove() {
    if (
      this.world.character.x + this.world.character.width <
      this.x + this.width / 2
    ) {
      this.mirror = false;
      this.moveLeft();
    } else {
      this.mirror = true;
      this.moveRight();
    }
  }

  /**
   * Controls the movement logic, including standard and dangerous attack modes.
   */
  movementLogic() {
    setInterval(() => {
      if (this.contact && !this.danger) {
        this.moveSpeed = 1;
        this.endbossMove();
        this.damage = 15;
      } else if (this.contact && this.danger) {
        this.damage = 10;
        this.endbossAttack();
      }
    }, 1000 / 60);
  }

  /**
   * Engages the endboss attack by dashing towards the player.
   */
  endbossAttack() {
    this.moveSpeed = 1.5;
    if (this.world.character.x + this.world.character.width + this.width / 2) {
      this.mirror = false;
      this.bossDash();
    } else {
      this.mirror = true;
      this.bossDashRight();
    }
  }

  /**
   * Checks if the endboss is within range to initiate contact with the player.
   */
  checkEndbossContact() {
    this.contactInterval = setInterval(() => {
      if (
        this.world.character.x + this.world.character.width > this.x - 240 &&
        !this.contact
      ) {
        this.spawnEndboss();
      }
    }, 200);
  }

  /**
   * Spawns the endboss by making it visible and initiating its danger state.
   */
  spawnEndboss() {
    this.checkDanger(this.dangerRange);
    this.contact = true;
    this.visible = true;
  }

  /**
   * Plays the specified sound for the endboss if sounds are not muted.
   * @param {Audio} soundelement - The audio element to play.
   */
  playSoundBoss(soundelement) {
    if (!mute) {
      soundelement.play();
    }
  }
}
