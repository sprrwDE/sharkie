let canvas = document.getElementById('canvas');
let world;

function init() {
    world = new World(canvas);
    console.log('char', world.character);
    console.log('enemies', world.enemies);
}