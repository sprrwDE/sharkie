class Level {

    backgroundObects;
    light;
    enemies;
    levelEndX = 720 * 3;
    poison;
    coins;


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