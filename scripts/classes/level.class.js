class Level {

    backgroundObects;
    light;
    enemies;
    levelEndX = 720 * 3;

    constructor(backgroundObjects, light, enemies) {
        this.height = canvasHeight;
        this.width = canvasWidth;
        this.backgroundObects = backgroundObjects;
        this.light = light;
        this.enemies = enemies;
    }
}