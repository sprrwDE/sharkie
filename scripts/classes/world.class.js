class World {
  /**
   * @type {HTMLCanvasElement} The game canvas.
   * @type {CanvasRenderingContext2D} The rendering context for the canvas.
   * @type {Keyboard} The keyboard input for controlling the character.
   * @type {number} The x-coordinate of the camera offset for panning.
   * @type {Character} The main character in the game world.
   * @type {Level} The current level, containing enemies, background objects, etc.
   * @type {Endboss} The boss character in the game.
   * @type {Statusbar} The status bar for the character's health.
   * @type {Statusbar} The status bar for the boss's health.
   * @type {StatusIcon} The icon representing collected bottles.
   * @type {StatusIcon} The icon representing collected coins.
   * @type {Bubble[]} Array of bubbles that have been thrown.
   * @type {number} Counter for collected bottles.
   * @type {number} Counter for collected coins.
   * @type {number} Counter for killed enemies.
   * @type {string} Type of enemy currently colliding with the character.
   */
  canvas;
  ctx;
  keyboard;
  camera_x = -2;
  character = new Character(this);
  level = level_1;
  boss;
  statusbar = new Statusbar(50, 20, 200, 60, "char");
  bossbar = new Statusbar(480, 20, 200, 60, "boss");
  bottleIcon = new StatusIcon(55, 80, 40, 40, "bottle");
  coinIcon = new StatusIcon(60, 130, 30, 30, "coin");
  bubbles = [];
  collectedBottles = 0;
  collectedCoins = 0;
  killedEnemies = 0; // objekt?
  enemyType;

  /**
   * Initializes the game world, sets up the level, and starts the game loop.
   * @param {Keyboard} keyboard - The keyboard input for controlling the character.
   */
  constructor(keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.boss = new Endboss(this);
    this.level.enemies.push(this.boss);
    this.setWorld();
    this.run();
  }

  /**
   * Draws all objects in the game world, including background, enemies, items, and character.
   */
  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawMirroredObjects();
    this.drawFixedObjects();
    this.update();
  }

  /**
   * Links the main character and enemies to the current game world instance.
   */
  setWorld() {
    this.character.world = this;
    this.level.world = this;
    this.level.enemies.forEach((enemy) => {enemy.world = this;});
  }

  /**
   * Draws all mirrored (moving) objects relative to the camera.
   */
  drawMirroredObjects() {
    this.ctx.translate(this.camera_x, 0);
    this.addObjectToMap(this.level.backgroundObects);
    this.lights();
    this.addObjectToMap(this.level.enemies);
    this.addObjectToMap(this.level.poison);
    this.addObjectToMap(this.level.coins);
    this.renderToCanvas(this.character);
    this.addObjectToMap(this.bubbles);
    this.ctx.translate(-this.camera_x, 0);
  }

  /**
   * Draws fixed objects on the screen, such as status bars and counters.
   */
  drawFixedObjects() {
    this.renderToCanvas(this.statusbar);
    this.renderToCanvas(this.bottleIcon);
    this.renderToCanvas(this.coinIcon);
    this.drawText(this.collectedBottles, 120, 120);
    this.drawText(this.collectedCoins, 120, 160);
    if (this.boss.visible) {this.renderToCanvas(this.bossbar);}
  }

  /**
   * Draws the background lighting effect.
   */
  lights() {
    this.ctx.translate(-this.camera_x * 0.9, 0);
    this.addObjectToMap(this.level.light);
    this.ctx.translate(this.camera_x * 0.9, 0);
  }

  /**
   * Updates the game screen by repeatedly calling the draw method.
   */
  update() {
    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  /**
   * Displays the specified text on the canvas.
   * @param {number} item - The value to be displayed.
   * @param {number} x - The x-coordinate for the text.
   * @param {number} y - The y-coordinate for the text.
   */
  drawText(item, x, y) {
    const ctx = document.getElementById("canvas").getContext("2d");
    ctx.fillStyle = "white";
    ctx.font = "40px Luckiest Guy";
    ctx.fillText(item, x, y);
  }

  /**
   * Starts the game loop, checks collisions, and manages item collection and bubbles.
   */
  run() {
    setInterval(() => {
      this.checkCollissions();
      if (this.bubbles.length > 0) {
        this.checkBubbleHit();
      }
      this.collectItems();
      this.checkEndbossHit();
      this.draw();
    }, 150);
    setInterval(() => {
      this.checkBubbleThrow();
    }, 600);
  }

  collectItems() {
    this.collectItem(this.level.coins, "collectedCoins");
    this.collectItem(this.level.poison, "collectedBottles");
  }

  /**
   * Plays the sound of an object if the game is not muted.
   * @param {MovableObject} object - The object containing the sound to play.
   */
  playSoundObject(object) {
    if (!mute) {object.sound.play();}
  }

  /**
   * Checks for collisions between the character and enemies, managing damage and interactions.
   */
  checkCollissions() {
    this.level.enemies.forEach((enemy) => {
      if (this.character.isColliding(enemy) && !this.character.immune && !enemy.hit && this.character.health > 0) {
        enemy.hit = false;
        this.playSoundObject(enemy);
        this.damageCharacter(enemy);
      } else if (this.character.isColliding(enemy) && this.character.immune && enemy.type == "jellyfish") {
        this.damageCharacter(enemy);
        this.playSoundObject(enemy);
      } else if (this.character.isColliding(enemy) && this.character.immune && enemy.type == "endboss") {
        this.damageCharacter(enemy);
        this.playSoundObject(enemy);
      } else if (this.character.isColliding(enemy) && enemy.type == "pufferfish" && enemy.danger) {
        this.damageCharacter(enemy);
        this.playSoundObject(enemy);
      } else if ( this.character.isColliding(enemy) && this.character.immune && enemy.type == "pufferfish") {
        this.killPufferfish(enemy);
      }
    });
  }

  /**
   * Reduces the character's health and updates the status bar when hit by an enemy.
   * @param {Enemy} enemy - The enemy that caused the damage.
   */
  damageCharacter(enemy) {
    this.character.getHit(enemy.damage);
    this.statusbar.setPercentage(this.character.health);
    this.enemyType = this.checkEnemyType(enemy);
  }

  /**
   * Identifies the type of enemy that the character is colliding with.
   * @param {Enemy} enemy - The enemy to check.
   * @returns {string} The type of the enemy.
   */
  checkEnemyType(enemy) {
    if (enemy.type === "pufferfish") {
      return "pufferfish";
    } else if (enemy.type === "jellyfish") {
      return "jellyfish";
    } else if (enemy.type === "endboss") {
      return "endboss";
    }
  }

  /**
   * Marks the pufferfish as hit and removes it after a delay.
   * @param {Enemy} enemy - The pufferfish to be removed.
   */
  killPufferfish(enemy) {
    this.enemyType = this.checkEnemyType(enemy);
    enemy.hit = true;
    this.killedEnemies++;
    setTimeout(() => {
      this.clearEnemyIntervals(enemy);
      this.level.enemies = this.level.enemies.filter((e) => e !== enemy);
    }, 1200);
  }

  /**
   * Checks whether to throw an air or poison bubble based on user input.
   */
  checkBubbleThrow() {
    if (this.keyboard.SHOOT) {this.throwAirBubble();} 
    if (this.keyboard.POISON && this.collectedBottles > 0) {this.throwToxicBubble();}
  }

  /**
   * Throws an air bubble to trap jellyfish.
   */
  throwAirBubble() {
    let air = "./assets/imgs/1.Sharkie/4.Attack/Bubble trap/Bubble.png";
    let bubble = new Bubble(this.character.x, this.character.y, this.character.width, this.character.height, this.character.mirror, air);
    bubble.world = this;
    this.playSoundObject(bubble);
    bubble.air = true;
    this.bubbles.push(bubble);
  }

  /**
   * Throws a poison bubble to damage the boss.
   */
  throwToxicBubble() {
    let toxicIMG =
      "./assets/imgs/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble.png";
    let poison = new Bubble(this.character.x, this.character.y, this.character.width, this.character.height, this.character.mirror, toxicIMG);
    poison.world = this;
    poison.toxic = true;
    this.playSoundObject(poison);
    this.bubbles.push(poison);
    this.collectedBottles--;
  }

  /**
   * Checks for bubble collision with enemies and removes jellyfish when trapped.
   */
  checkBubbleHit() {
    this.bubbles.forEach((bubble) => {
      this.level.enemies.forEach((enemy) => {
        if (bubble.isColliding(enemy) && bubble.air == true) {
          this.killJellyfish(enemy);
          bubble.clearBubbleIntervals();
        }
      });
    });
  }

  /**
   * Removes a jellyfish enemy when hit by an air bubble.
   * @param {Enemy} enemy - The jellyfish to remove.
   * @param {Bubble} bubble - The bubble that hit the jellyfish.
   */
  killJellyfish(enemy, bubble) {
    if (enemy.type == "jellyfish" && !enemy.hit) {
      enemy.hit = true;
      let n = this.bubbles.indexOf(bubble);
      this.bubbles.splice(n, 1);
      this.killedEnemies++;
      setTimeout(() => {
        this.removeJelly(enemy);
        enemy.stopAllIntervals();
      }, 1000);
    }
  }

  /**
   * Removes the jellyfish from the game world.
   * @param {Enemy} enemy - The jellyfish to remove.
   */
  removeJelly(enemy) {
    this.clearEnemyIntervals(enemy);
    clearInterval(enemy.jellyfishMovement);
    let i = this.level.enemies.indexOf(enemy);
    this.level.enemies.splice(i, 1);
  }

  /**
   * Checks for collisions between toxic bubbles and the boss, and applies damage.
   */
  checkEndbossHit() {
    this.bubbles.forEach((bubble) => {
      if (bubble.isColliding(this.boss) && bubble.toxic == true) {
        this.damageEndboss(this.boss, bubble);
        bubble.clearBubbleIntervals();
      }
    });
  }

  /**
   * Damages the boss when hit by a toxic bubble.
   * @param {Endboss} boss - The boss to damage.
   * @param {Bubble} bubble - The toxic bubble that hit the boss.
   */
  damageEndboss(boss, bubble) {
    if (boss.type == "endboss" && !boss.immune) {
      this.hitBoss(boss, bubble);
    } if (boss.health <= 0) {
      this.killBoss(boss);
    }
    setTimeout(() => {boss.immune = false;}, 400);
  }

  /**
   * Applies damage to the boss and updates the boss health bar.
   * @param {Endboss} boss - The boss to hit.
   * @param {Bubble} bubble - The bubble that hit the boss.
   */
  hitBoss(boss, bubble) {
    boss.immune = true;
    let n = this.bubbles.indexOf(bubble);
    this.bubbles.splice(n, 1);
    boss.getHit(15);
    this.playSoundObject(boss);
    this.bossbar.setPercentage(boss.health);
  }

  /**
   * Removes the boss from the game world after being defeated.
   * @param {Endboss} boss - The boss to remove.
   */
  killBoss(boss) {
    setTimeout(() => {
      boss.visible = false;
      this.level.enemies.splice(this.boss, 1);
      showWinScreen();
      bgSound.pause();
    }, 600);
  }

  /**
   * Checks if the character is collecting an item and updates the corresponding counter.
   * @param {Array} items - The array of items to check for collection (e.g., coins or bottles).
   * @param {string} counter - The property name of the counter to increment (e.g., 'collectedCoins' or 'collectedBottles').
   */
  collectItem(items, counter) {
    items.forEach((item) => {
      if (this.character.isColliding(item)) {
        const index = items.indexOf(item);
        items.splice(index, 1);
        this.playSoundObject(item);
        this[counter]++;
        this.clearCollectableIntervals(item);
      }
    });
  }

  /**
   * Adds each object in an array to the game world.
   * @param {Array<DrawableObject>} objects - The objects to add.
   */
  addObjectToMap(objects) {
    objects.forEach((object) => {this.renderToCanvas(object);});
  }

  /**
   * Renders an object onto the canvas.
   * @param {DrawableObject} object - The object to render.
   */
  renderToCanvas(object) {
    if (object.mirror) {
      this.mirror(object);
    } if (object.visible) {
      object.draw(this.ctx);
    } if (object.mirror) {
      this.restoreDirection(object);
    }
  }

  /**
   * Mirrors the object horizontally on the canvas.
   * @param {DrawableObject} object - The object to mirror.
   */
  mirror(object) {
    this.ctx.save();
    this.ctx.translate(object.width, 0);
    this.ctx.scale(-1, 1);
    object.x = object.x * -1;
  }

  /**
   * Restores the object orientation on the canvas after mirroring.
   * @param {DrawableObject} object - The object to restore.
   */
  restoreDirection(object) {
    object.x = object.x * -1;
    this.ctx.restore();
  }

  /**
   * Clears intervals associated with an enemy to stop its animations and movement.
   * @param {Enemy} enemy - The enemy whose intervals to clear.
   */
  clearEnemyIntervals(enemy) {
    clearInterval(enemy.animationInterval);
    clearInterval(enemy.dangerInterval);
    if (enemy.movingInterval) {clearInterval(enemy.movingInterval);}
  }

  /**
   * Clears intervals associated with collectible items, stopping their animations.
   * @param {MovableObject} object - The collectible item to clear intervals for.
   */
  clearCollectableIntervals(object) {
    clearInterval(object.animationInterval);
  }
}