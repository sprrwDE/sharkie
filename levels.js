const canvas = document.getElementById('canvas');
const canvasHeight = canvas.height;
const canvasWidth = canvas.width;
let level_1;

async function createLevel() {
    level_1 = new Level(
        [
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
            // new PufferFishGreen(), // mehrere verschiedene Farben erstellen
            // new PufferFishGreen(), // left + right?
            // new PufferFishGreen(),
            // new JellyFishYellow(),
            new JellyFishPurple(),
        ],
        [
            new Light('./assets/imgs/3. Background/Layers/1. Light/1.png'), // wie animieren?
        ],
        [
            new Poison(300, 300),
            new Poison(400, 300),
            new Poison(500, 300),
            new Poison(600, 300),
            new Poison(700, 300),
            new Poison(800, 300),
            new Poison(900, 300)
        ],
        [
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