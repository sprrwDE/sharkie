/**
 * Represents a movable object in the game, inheriting properties from DrawableObject.
 * Provides movement and collision functionalities, as well as handling health and damage logic.
 * Used for various game entities that need movement, collision detection, and animation.
 * @extends DrawableObject
 */
class MovableObject extends DrawableObject {

    /** @type {number} The movement speed of the object. */
    moveSpeed;

    /** @type {number} The health level of the object, starting at 100. */
    health = 100;

    /** @type {number} Timestamp of the last hit. */
    lastHit = 0;

    /** @type {boolean} Indicates if finslap is active. */
    finslapActive = false;

    /** @type {boolean} Indicates if finslap is currently in progress. */
    finslapInProgress = false;

    /** @type {?number} Interval ID for jellyfish movement logic. */
    movementIntervalJellyfish = null;

    /** @type {?number} Interval ID for upstream logic. */
    upstream = null;

    /** @type {Object} Offset values for hitbox calculations. */
    offset = {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0 
    };

    /**
     * Initializes a new instance of the MovableObject class.
     */
    constructor() {
        super();
    }

    /**
     * Sets random characteristics for an enemy, including position, size, and speed.
     */
    setEnemyCharacteristics() {
        this.y = this.height + (Math.random() * 300);
        this.x = 300 + Math.random() * (720 * 2);
        this.height = 80;
        this.width = this.height;
        this.moveSpeed = 0.15 + Math.random() * 0.45;
    }

    /**
     * Checks if this object is colliding with another object.
     * @param {MovableObject} object - The object to check for collision.
     * @returns {boolean} True if objects are colliding, otherwise false.
     */
    isColliding(object) {
        return (this.x + this.width - (this.offset.right / 2)) >= object.x + object.offset.left &&
               (this.x + (this.offset.left / 2)) <= (object.x + (object.width - object.offset.right)) &&
               (this.y + this.height - (this.offset.bottom / 3)) >= object.y + object.offset.top &&
               (this.y + this.offset.top) <= (object.y + (object.height - object.offset.bottom));
    }

    /**
     * Reduces health by a specified amount and sets last hit time if health is above 0.
     * @param {number} hp - The amount of health to subtract.
     */
    getHit(hp) {
        this.health -= hp;
        if (this.health < 0) {
            this.health = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    /**
     * Checks if the object is in a hurt state, within a time span after last hit.
     * @returns {boolean} True if object is hurt, otherwise false.
     */
    isHurt() {
        let timespan = (new Date() - this.lastHit) / 1000;
        return timespan < 0.3;
    }

    /**
     * Checks if the object is dead (health at 0).
     * @returns {boolean} True if health is 0, otherwise false.
     */
    isDead() {
        return this.health === 0;
    }

    /**
     * Plays an animation by cycling through provided images.
     * @param {string[]} images - Array of image paths for the animation frames.
     */
    playAnimation(images) {
        let index = this.currentImage % images.length;
        let path = images[index];
        this.img = this.imgCache[path];
        this.currentImage++;
    }

    /** Moves the object to the right by moveSpeed amount. */
    moveRight() {
        this.x += this.moveSpeed;
    }

    /** Moves the object to the left by moveSpeed amount. */
    moveLeft() {
        this.x -= this.moveSpeed;
    }

    /** Moves the object up by moveSpeed amount. */
    moveUp() {
        this.y -= this.moveSpeed;
    }

    /** Moves the object down by moveSpeed amount. */
    moveDown() {
        this.y += this.moveSpeed;
    }

    /**
     * Stops the movement of the object by clearing the movement interval.
     */
    stopMovement() {
        if (this.movementIntervalJellyfish) {
            clearInterval(this.movementIntervalJellyfish);
            this.movementIntervalJellyfish = null;
        }
    }

    /**
     * Initiates up-and-down movement for enemies.
     */
    enemyUpAndDown() {
        this.movementIntervalJellyfish = setInterval(() => {
            if (this.movingUp) {
                this.enemyUp();
            } else {
                this.enemyDown();
            }
        }, 1000 / 60);
    }

    /** Moves the enemy up until it reaches the upper boundary. */
    enemyUp() {
        this.moveUp();
        if (this.y <= 0) {
            this.movingUp = false;
        }
    }

    /** Moves the enemy down until it reaches the lower boundary. */
    enemyDown() {
        this.moveDown();
        if (this.y + this.height >= 480) {
            this.movingUp = true;
        }
    }

    /**
     * Applies gravity to the object, moving it downwards until it reaches a boundary.
     * @param {number} grav - The initial gravity force.
     * @param {number} acc - The gravity acceleration.
     */
    applyGravity(grav, acc) {
        if (this.y + this.height <= 440) {
            this.y += grav;
            grav += acc;
        }
    }

    /**
     * Applies an upward force to the object, simulating an upstream effect.
     * @param {number} up - The initial upward force.
     * @param {number} acc - The acceleration for the upward force.
     */
    applyUpstream(up, acc) {
        this.stopMovement();
        if (this.upstream) {
            clearInterval(this.upstream);
        }
        this.upstream = setInterval(() => {
            this.y -= up;
            up += acc;
        }, 1000 / 25);
    }

    /** Moves the object left in a quick dash, used by bosses. */
    bossDash() {
        this.moveLeft();
    }

    /** Moves the object right in a quick dash, used by bosses. */
    bossDashRight() {
        this.moveRight();
    }

    /**
     * Checks for danger status at regular intervals, toggling the danger state and damage value.
     * @param {number} range - The time range for toggling the danger state.
     */
    checkDanger(range) {
        if (this.dangerInterval) {
            clearInterval(this.dangerInterval);
        }
        this.dangerInterval = setInterval(() => {
            this.danger = !this.danger;
            this.damage = this.danger ? 10 : 5;
        }, range + (range * Math.random()));
    }
}
