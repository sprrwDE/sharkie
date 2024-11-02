/**
 * Represents a level in the game, containing various game elements such as 
 * background objects, light sources, enemies, poison bottles, and coins.
 */
class Level {

    /**
     * @type {Array} backgroundObects - Array of background objects in the level.
     */
    backgroundObects;

    /**
     * @type {Array} light - Array of light sources in the level.
     */
    light;

    /**
     * @type {Array} enemies - Array of enemies present in the level.
     */
    enemies;

    /**
     * @type {number} levelEndX - The x-coordinate indicating the end of the level.
     * Default is set to 2160 (720 * 3).
     */
    levelEndX = 720 * 3;

    /**
     * @type {Array} poison - Array of poison bottles available in the level.
     */
    poison;

    /**
     * @type {Array} coins - Array of coins available in the level.
     */
    coins;

    /**
     * Initializes a new instance of the Level class.
     * @param {Array} backgroundObjects - The background objects to be displayed in the level.
     * @param {Array} enemies - The enemies that populate the level.
     * @param {Array} light - The light sources in the level.
     * @param {Array} poison - The poison bottles that can be collected in the level.
     * @param {Array} coins - The coins that can be collected in the level.
     */
    constructor(backgroundObjects, enemies, light, poison, coins) {
        this.height = canvasHeight;
        this.width = canvasWidth;
        this.backgroundObects = backgroundObjects;
        this.light = light;
        this.enemies = enemies;
        this.poison = poison;
        this.coins = coins;
    }
}
