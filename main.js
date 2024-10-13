const canvas = document.getElementById('canvas');
let canvasHeight = 480;
let canvasWidth = 720;
let world;
let keyboard = new Keyboard();

function init() {
    world = new World(canvas, keyboard);
}

document.addEventListener('keydown', (event) => {
    if (event.keyCode == 87) {  // W-Taste
        keyboard.UP = true;
    }
    if (event.keyCode == 83) {  // S-Taste
        keyboard.DOWN = true;
    }
    if (event.keyCode == 65) {  // A-Taste
        keyboard.LEFT = true;
    }
    if (event.keyCode == 68) {  // D-Taste
        keyboard.RIGHT = true;
    }
    if (event.keyCode == 32) {  // Leertaste (Space)
        keyboard.FIN = true;
    }
    if (event.keyCode == 69) {  // E-Taste
        keyboard.SHOOT = true;
    }
    console.log(event);
});


document.addEventListener('keyup', (event) => {
    if (event.keyCode == 87) {
        keyboard.UP = false;
    } 
    if (event.keyCode == 83) {
        keyboard.DOWN = false;
    } 
    if (event.keyCode == 65) {
        keyboard.LEFT = false;
    } 
    if (event.keyCode == 68) {
        keyboard.RIGHT = false;
    } 
    if (event.keyCode == 32) {
        keyboard.FIN = false;
    } 
    if (event.keyCode == 69) {
        keyboard.SHOOT = false;
    }
});