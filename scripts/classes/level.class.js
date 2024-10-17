class Level {

    backgroundObects;
    light;
    enemies;
    levelEndX = 720 * 3;

    constructor(backgroundObjects, enemies, light) {
        this.height = canvasHeight;
        this.width = canvasWidth;
        this.backgroundObects = backgroundObjects;
        this.light = light;
        this.enemies = enemies;
    }
}