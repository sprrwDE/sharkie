class Level {

    backgroundObects;
    light;
    enemies;
    levelEndX = 720 * 3;
    bottles;


    constructor(backgroundObjects, enemies, light, bottles) {
        this.height = canvasHeight;
        this.width = canvasWidth;
        this.backgroundObects = backgroundObjects;
        this.light = light;
        this.enemies = enemies;
        this.bottles = bottles;
    }
}