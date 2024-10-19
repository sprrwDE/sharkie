const canvas = document.getElementById('canvas');
const canvasHeight = canvas.height;
const canvasWidth = canvas.width;

const level_1 = new Level(
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
        new PufferFishGreen(), // mehrere verschiedene Farben erstellen
        new PufferFishGreen(), // left + right?
        new PufferFishGreen(),
        new JellyFishYellow(),
        new JellyFishPurple(),
        new Endboss()
    ],
    [
        new Light('./assets/imgs/3. Background/Layers/1. Light/1.png'), // wie animieren?
    ],
    [
        new Bottle()
    ]

);