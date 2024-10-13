let canvas = document.getElementById('canvas');
let canvasHeight = 480;
let canvasWidth = 720;
let world;

function init() {
    world = new World(canvas);
    console.log('char', world.character);
    console.log('enemies', world.enemies);
}