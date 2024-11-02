/**
 * Main game world instance.
 * @type {World}
 */
let world;

/**
 * Keyboard instance for managing player input.
 * @type {Keyboard}
 */
let keyboard = new Keyboard();

/**
 * UI element references for various game states and controls.
 * @type {HTMLElement}
 */
let startContainer = document.getElementById("startscreen");
let endContainer = document.getElementById("endscreen");
let winContainer = document.getElementById("win");
let startButton = document.getElementById("start");
let loadingScreenRef = document.getElementById("loadingscreen");
let muteScreenRef = document.getElementById("mutescreen");
let dynamicContentRef = document.getElementById("dyn");
let infobox = document.getElementById("infobox");
let cvs = document.getElementById("canvas");

/**
 * Background sound element for the game.
 * @type {HTMLAudioElement}
 */
let bgSound = new Audio("./assets/sounds/bg_sound.mp3");

/**
 * Interval for loading screen display.
 * @type {number|null}
 */
let loadingInterval = null;

/**
 * Counter for loaded images.
 * @type {number}
 */
let loadedImages = 0;

/**
 * Total number of images to load.
 * @type {number}
 */
let allImages = 233;

/**
 * Flag indicating if all images are loaded.
 * @type {boolean}
 */
let loadingComplete = false;

/**
 * Flag indicating if sound is muted.
 * @type {boolean}
 */
let mute = false;

/**
 * Initializes the game world, sets up levels, and handles assets.
 * @async
 */
async function init() {
  checkMobileEvents();
  loadingScreen();
  await createLevel();
  world = new World(keyboard);
}

/**
 * Displays the loading screen while assets are loading.
 */
function loadingScreen() {
  loadingScreenRef.classList.remove("d-none");
  loadingInterval = setInterval(() => {
    if (loadingComplete) {
      removeLoadingScreen();
      startGame();
      muteScreenRef.classList.remove("d-none");
    }
  }, 60);
}

/**
 * Removes the loading screen when assets are fully loaded.
 */
function removeLoadingScreen() {
  setTimeout(() => {
    clearInterval(loadingInterval);
    loadingScreenRef.classList.add("d-none");
  }, 200);
}

/**
 * Handles keyboard input for movement and actions.
 * @param {KeyboardEvent} event - The keyboard event.
 */
document.addEventListener("keydown", (event) => {
  if (event.keyCode === 87) keyboard.UP = true; // W key
  if (event.keyCode === 83) keyboard.DOWN = true; // S key
  if (event.keyCode === 65) keyboard.LEFT = true; // A key
  if (event.keyCode === 68) keyboard.RIGHT = true; // D key
  if (event.keyCode === 32) keyboard.FIN = true; // Space key
  if (event.keyCode === 69) keyboard.SHOOT = true; // E key
  if (event.keyCode === 81) keyboard.POISON = true; // Q key
});

/**
 * Resets keyboard input state on key release.
 * @param {KeyboardEvent} event - The keyboard event.
 */
document.addEventListener("keyup", (event) => {
  if (event.keyCode === 87) keyboard.UP = false;
  if (event.keyCode === 83) keyboard.DOWN = false;
  if (event.keyCode === 65) keyboard.LEFT = false;
  if (event.keyCode === 68) keyboard.RIGHT = false;
  if (event.keyCode === 32) keyboard.FIN = false;
  if (event.keyCode === 69) keyboard.SHOOT = false;
  if (event.keyCode === 81) keyboard.POISON = false;
});

/**
 * Starts the game, hides start and end screens, and displays the canvas.
 */
function startGame() {
  startContainer.classList.add("d-none");
  endContainer.classList.add("d-none");
  winContainer.classList.add("d-none");
  cvs.classList.remove("d-none");
  toggleBgSound();
}

/**
 * Clears all intervals in the game.
 */
function clearAllIntervals() {
  for (let i = 0; i < 9999; i++) window.clearInterval(i);
}

/**
 * Shows the end screen and hides the canvas.
 */
function showEndScreen() {
  resetGame();
  endContainer.classList.remove("d-none");
  cvs.classList.add("d-none");
  muteScreenRef.classList.add("d-none");
}

/**
 * Shows the win screen and hides the canvas.
 */
function showWinScreen() {
  dynamic();
  resetGame();
  winContainer.classList.remove("d-none");
  cvs.classList.add("d-none");
  muteScreenRef.classList.add("d-none");
}

/**
 * Shows the home screen by resetting relevant screens.
 */
function showHomeScreen() {
  startContainer.classList.remove("d-none");
  endContainer.classList.add("d-none");
  winContainer.classList.add("d-none");
  muteScreenRef.classList.add("d-none");
}

/**
 * Toggles visibility of the information box.
 */
function toggleInfoBox() {
  infobox.classList.toggle("d-none");
}

/**
 * Toggles the mute state for all sounds.
 */
function toggleMuteAllSounds() {
  mute = !mute;
  toggleBgSound();
}

/**
 * Toggles the background sound based on the mute state.
 */
function toggleBgSound() {
  if (mute) {
    bgSound.pause();
    world.character.db.snore_sound.pause();
    world.character.db.swim_sound.pause();
  } else {
    bgSound.play();
  }
}

/**
 * Resets the game by clearing intervals and setting default values.
 */
function resetGame() {
  clearAllIntervals();
  setFlexibleValues();
}

/**
 * Restarts the game by resetting values and reinitializing world settings.
 */
function restartGame() {
  resetGame();
  toggleBgSound();
  startGame();
  init();
}

/**
 * Sets default values for game variables on reset.
 */
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

/**
 * Populates the dynamic content with collected stats.
 */
function dynamic() {
  dynamicContentRef.innerHTML = dynamicTemplate();
}

/**
 * Template for dynamic content display on the win screen.
 * @returns {string} HTML string with collected stats.
 */
function dynamicTemplate() {
  return `<p>Enemies Killed: ${world.killedEnemies}</p>
    <p>Coins Collected: ${world.collectedCoins}</p>`;
}

/**
 * Adds mobile event listeners for on-screen controls.
 */
function checkMobileEvents() {
  document.getElementById("pressup").addEventListener("touchstart", (event) => {
    event.preventDefault();
    keyboard.UP = true;
  });
  document.getElementById("pressup").addEventListener("touchend", (event) => {
    event.preventDefault();
    keyboard.UP = false;
  });

  document
    .getElementById("pressdown")
    .addEventListener("touchstart", (event) => {
      event.preventDefault();
      keyboard.DOWN = true;
    });
  document.getElementById("pressdown").addEventListener("touchend", (event) => {
    event.preventDefault();
    keyboard.DOWN = false;
  });

  document
    .getElementById("pressright")
    .addEventListener("touchstart", (event) => {
      event.preventDefault();
      keyboard.RIGHT = true;
    });
  document
    .getElementById("pressright")
    .addEventListener("touchend", (event) => {
      event.preventDefault();
      keyboard.RIGHT = false;
    });

  document
    .getElementById("pressleft")
    .addEventListener("touchstart", (event) => {
      event.preventDefault();
      keyboard.LEFT = true;
    });
  document.getElementById("pressleft").addEventListener("touchend", (event) => {
    event.preventDefault();
    keyboard.LEFT = false;
  });

  document
    .getElementById("pressfin")
    .addEventListener("touchstart", (event) => {
      event.preventDefault();
      keyboard.FIN = true;
    });
  document.getElementById("pressfin").addEventListener("touchend", (event) => {
    event.preventDefault();
    keyboard.FIN = false;
  });

  document
    .getElementById("pressbubble")
    .addEventListener("touchstart", (event) => {
      event.preventDefault();
      keyboard.SHOOT = true;
    });
  document
    .getElementById("pressbubble")
    .addEventListener("touchend", (event) => {
      event.preventDefault();
      keyboard.SHOOT = false;
    });

  document
    .getElementById("presspoison")
    .addEventListener("touchstart", (event) => {
      event.preventDefault();
      keyboard.POISON = true;
    });
  document
    .getElementById("presspoison")
    .addEventListener("touchend", (event) => {
      event.preventDefault();
      keyboard.POISON = false;
    });
}
