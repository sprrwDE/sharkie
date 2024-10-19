class Level {

    backgroundObects;
    light;
    enemies;
    levelEndX = 720 * 3;
    bottles;
    coins;


    constructor(backgroundObjects, enemies, light, bottles, coins) {
        this.height = canvasHeight;
        this.width = canvasWidth;
        this.backgroundObects = backgroundObjects;
        this.light = light;
        this.enemies = enemies;
        this.bottles = bottles;
        this.coins = coins;
    }
}