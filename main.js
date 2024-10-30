let world;
let keyboard = new Keyboard();
let startContainer = document.getElementById('startscreen');
let endContainer = document.getElementById('endscreen');
let winContainer = document.getElementById('win');
let startButton = document.getElementById('start');
let dynamicContentRef = document.getElementById('dyn');
let infobox = document.getElementById('infobox');
let cvs = document.getElementById('canvas');
let bgSound = new Audio('./assets/sounds/bg_sound.mp3')

let mute = false;

async function init() {
    await createLevel()
    world = new World(keyboard);
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
    if (event.keyCode == 81) { // Q-Taste
        keyboard.POISON = true;
    };
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
    if (event.keyCode == 81) {
        keyboard.POISON = false;
    };
});

function startGame() {
    startContainer.classList.add('d-none')
    endContainer.classList.add('d-none');
    winContainer.classList.add('d-none');
    cvs.classList.remove('d-none');
    toggleBgSound()
}

function clearAllIntervals() {
    for (let i = 0; i < 9999; i++) window.clearInterval(i);
}

function showEndScreen() {
    resetGame()
    endContainer.classList.remove('d-none')
    cvs.classList.add('d-none');
}

function showWinScreen() {
    dynamic();
    resetGame()
    winContainer.classList.remove('d-none')
    cvs.classList.add('d-none');
    console.log(world.killedEnemies)
}

function showHomeScreen() {
    startContainer.classList.remove('d-none');
    endContainer.classList.add('d-none');
    winContainer.classList.add('d-none');
}

function toggleInfoBox() {
    infobox.classList.toggle('d-none')
}

function toggleMuteAllSounds() {
    mute = !mute
    toggleBgSound()
}

function toggleBgSound() {
    if (mute) {
        bgSound.pause()
        world.character.db.snore_sound.pause()
        world.character.db.swim_sound.pause()
    } else {
        bgSound.play()
    }
}

function resetGame() {
    clearAllIntervals();
    console.log('all intervals cleared')
    setFlexibleValues()
}

function restartGame() {
    resetGame();
    toggleBgSound()
    startGame();
    init()
}

function setFlexibleValues() {
    world.collectedBottles = 0;
    world.collectedCoins = 0;
    world.character.health = 100;
    world.boss.health = 100;
    world.boss.visible = false;
    world.boss.contact = false;
    world.character.x = 0;
    world.boss.x = 700 * 3;
    world.boss.index = 0;
}

function dynamic() {
    dynamicContentRef.innerHTML = dynamicTemplate()
}

function dynamicTemplate() {
    return `<p>Enemies Killed: ${world.killedEnemies}</p>
    <p>Coins Collected: ${world.collectedCoins}</p>`
}