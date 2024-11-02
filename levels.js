/**
 * Reference to the HTML canvas element for the game.
 * @type {HTMLCanvasElement}
 */
const canvas = document.getElementById('canvas');

/**
 * Height of the canvas, used for setting up the game area.
 * @type {number}
 */
const canvasHeight = canvas.height;

/**
 * Width of the canvas, used for setting up the game area.
 * @type {number}
 */
const canvasWidth = canvas.width;

/**
 * The first level of the game, containing background objects, enemies, lights, poison bottles, and coins.
 * @type {Level}
 */
let level_1;

/**
 * Asynchronously creates and initializes `level_1` with specified game objects, including backgrounds, enemies, items, and lights.
 * Sets up the structure and components of the first level.
 * @async
 * @function
 */
async function createLevel() {
    level_1 = new Level(
        [
            // Background objects
            new BackgroundObject('./assets/imgs/3. Background/Layers/5. Water/D2.png', -719),
            new BackgroundObject('./assets/imgs/3. Background/Layers/4.Fondo 2/D2.png', -719),
            new BackgroundObject('./assets/imgs/3. Background/Layers/3.Fondo 1/D2.png', -719),
            new BackgroundObject('./assets/imgs/3. Background/Layers/2. Floor/D2.png', -719),
            new BackgroundObject('./assets/imgs/3. Background/Layers/5. Water/D1.png', 0),
            new BackgroundObject('./assets/imgs/3. Background/Layers/4.Fondo 2/D1.png', 0),
            new BackgroundObject('./assets/imgs/3. Background/Layers/3.Fondo 1/D1.png', 0),
            new BackgroundObject('./assets/imgs/3. Background/Layers/2. Floor/D1.png', 0),
            new BackgroundObject('./assets/imgs/3. Background/Layers/5. Water/D2.png', 719),
            new BackgroundObject('./assets/imgs/3. Background/Layers/4.Fondo 2/D2.png', 719),
            new BackgroundObject('./assets/imgs/3. Background/Layers/3.Fondo 1/D2.png', 719),
            new BackgroundObject('./assets/imgs/3. Background/Layers/2. Floor/D2.png', 719),
            new BackgroundObject('./assets/imgs/3. Background/Layers/5. Water/D1.png', 719 * 2),
            new BackgroundObject('./assets/imgs/3. Background/Layers/4.Fondo 2/D1.png', 719 * 2),
            new BackgroundObject('./assets/imgs/3. Background/Layers/3.Fondo 1/D1.png', 719 * 2),
            new BackgroundObject('./assets/imgs/3. Background/Layers/2. Floor/D1.png', 719 * 2),
            new BackgroundObject('./assets/imgs/3. Background/Layers/5. Water/D2.png', 719 * 3),
            new BackgroundObject('./assets/imgs/3. Background/Layers/4.Fondo 2/D2.png', 719 * 3),
            new BackgroundObject('./assets/imgs/3. Background/Layers/3.Fondo 1/D2.png', 719 * 3),
            new BackgroundObject('./assets/imgs/3. Background/Layers/2. Floor/D2.png', 719 * 3),
        ],
        [
            // Enemies
            new PufferFishGreen(),
            new PufferFishGreen(),
            new PufferFishGreen(),
            new PufferFishGreen(),
            new JellyFishYellow(),
            new JellyFishYellow(),
            new JellyFishPurple(),
            new JellyFishPurple(),
        ],
        [
            // Light effects
            new Light('./assets/imgs/3. Background/Layers/1. Light/2.png', 0),
            new Light('./assets/imgs/3. Background/Layers/1. Light/1.png', 719),
            new Light('./assets/imgs/3. Background/Layers/1. Light/2.png', 719 * 2),
            new Light('./assets/imgs/3. Background/Layers/1. Light/1.png', 719 * 3),
        ],
        [
            // Poison bottles
            new Poison(300, 300),
            new Poison(400, 300),
            new Poison(500, 300),
            new Poison(600, 250),
            new Poison(700, 250),
            new Poison(800, 300),
            new Poison(1000, 100),
            new Poison(1200, 300),
            new Poison(1400, 100),
            new Poison(1800, 150),
            new Poison(1800, 200),
        ],
        [
            // Coins
            new Coin(300, 200),
            new Coin(400, 200),
            new Coin(600, 100),
            new Coin(700, 100),
            new Coin(1000, 250),
            new Coin(1000, 300),
            new Coin(1200, 150),
            new Coin(1200, 200),
            new Coin(1400, 250),
            new Coin(1400, 300),
            new Coin(1600, 200),
            new Coin(1700, 250),
            new Coin(1800, 300),
            new Coin(1900, 250),
            new Coin(2000, 200)
        ]
    );
}