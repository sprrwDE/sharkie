class World {
    canvas;
    ctx;
    keyboard;
    camera_x = -2;
    character = new Character(this);
    level = level_1;
    boss;
    statusbar = new Statusbar(50, 20, 200, 60, 'char');
    bossbar = new Statusbar(480, 20, 200, 60, 'boss')
    bottleIcon = new StatusIcon(55, 80, 40, 40, 'bottle')
    coinIcon = new StatusIcon(60, 130, 30, 30, 'coin');
    bubbles = []
    collectedBottles = 0;
    collectedCoins = 0;
    killedEnemies = 0; // objekt?
    enemyType;

    constructor(keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.boss = new Endboss(this); // Übergibt die Referenz zur Welt
        this.level.enemies.push(this.boss); 
        this.setWorld()
        this.run()
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawMirroredObjects();
        this.drawFixedObjects();
        this.update()
    };

    setWorld() {
        this.character.world = this;
        this.level.world = this;
        this.level.enemies.forEach((enemy) => {
            enemy.world = this;
        });
    };

    drawMirroredObjects() {
        this.ctx.translate(this.camera_x, 0); // camera back
        this.addObjectToMap(this.level.backgroundObects);
        this.lights();
        this.addObjectToMap(this.level.enemies);
        this.addObjectToMap(this.level.poison);
        this.addObjectToMap(this.level.coins);
        this.renderToCanvas(this.character);
        this.addObjectToMap(this.bubbles);
        this.ctx.translate(-this.camera_x, 0);
    }

    drawFixedObjects() {
        this.renderToCanvas(this.statusbar);
        this.renderToCanvas(this.bottleIcon);
        this.renderToCanvas(this.coinIcon);
        this.drawText(this.collectedBottles, 120, 120);
        this.drawText(this.collectedCoins, 120, 160);
        if (this.boss.visible) {
            this.renderToCanvas(this.bossbar);
        }
    }

    update() {
        let self = this;
        requestAnimationFrame(function () {
            self.draw()
        }
        );
    }

    drawText(item, x, y) {
        const ctx = document.getElementById("canvas").getContext("2d");
        ctx.fillStyle = "white";
        ctx.font = "40px Luckiest Guy";
        ctx.fillText(item, x, y);
    }

    run() {
        setInterval(() => {
            this.checkCollissions();
            if (this.bubbles.length > 0) {
                this.checkBubbleHit();
            }
            this.collectBottle();
            this.collectCoin();
            this.checkEndbossHit();
            this.draw();
        }, 150)

        setInterval(() => {
            this.checkBubbleThrow();
        }, 600)
    }

    playSoundObject(object) {
        if (!mute) {
            object.sound.play()
        }
    }

    checkCollissions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && !this.character.immune && !enemy.hit && this.character.health > 0) {
                enemy.hit = false;
                this.playSoundObject(enemy);
                this.damageCharacter(enemy);
            } else if ((this.character.isColliding(enemy) && this.character.immune && enemy.type == 'jellyfish')) {
                this.damageCharacter(enemy)
                this.playSoundObject(enemy);
            } else if ((this.character.isColliding(enemy) && this.character.immune && enemy.type == 'endboss')) {
                this.damageCharacter(enemy)
                this.playSoundObject(enemy);
            } else if (this.character.isColliding(enemy) && enemy.type == 'pufferfish' && enemy.danger) {
                this.damageCharacter(enemy)
                this.playSoundObject(enemy);
            } else if ((this.character.isColliding(enemy) && this.character.immune && enemy.type == 'pufferfish')) {
                this.killPufferfish(enemy);
            }
        })
    }

    damageCharacter(enemy) {
        this.character.getHit(enemy.damage);
        this.statusbar.setPercentage(this.character.health)
        this.enemyType = this.checkEnemyType(enemy)
    }

    checkEnemyType(enemy) {
        if (enemy.type === 'pufferfish') {
            return 'pufferfish'
        } else if (enemy.type === 'jellyfish') {
            return 'jellyfish'
        } else if (enemy.type === 'endboss') {
            return 'endboss'
        }
    }

    killPufferfish(enemy) {
        this.enemyType = this.checkEnemyType(enemy)
        enemy.hit = true;
        this.killedEnemies++
        setTimeout(() => {
            this.clearEnemyIntervals(enemy);
            this.level.enemies = this.level.enemies.filter(e => e !== enemy);
        }, 1200)
    }

    checkBubbleThrow() {
        if (this.keyboard.SHOOT) {
            this.throwAirBubble()
        } if (this.keyboard.POISON && this.collectedBottles > 0) {
            this.throwToxicBubble()
        }
    }

    throwAirBubble() {
        let air = './assets/imgs/1.Sharkie/4.Attack/Bubble trap/Bubble.png'
        let bubble = new Bubble(this.character.x, this.character.y, this.character.width, this.character.height, this.character.mirror, air);
        bubble.world = this;
        this.playSoundObject(bubble);
        bubble.air = true
        this.bubbles.push(bubble);
    }

    throwToxicBubble() {
        let toxicIMG = './assets/imgs/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble.png'
        let poison = new Bubble(this.character.x, this.character.y, this.character.width, this.character.height, this.character.mirror, toxicIMG);
        poison.world = this;
        poison.toxic = true
        this.playSoundObject(poison);
        this.bubbles.push(poison);
        this.collectedBottles--
    }

    checkBubbleHit() {
        this.bubbles.forEach((bubble) => {
            this.level.enemies.forEach((enemy) => {
                if (bubble.isColliding(enemy) && bubble.air == true) {
                    this.killJellyfish(enemy);
                    bubble.clearBubbleIntervals();
                }
            })
        })
    }

    killJellyfish(enemy, bubble) {
        if (enemy.type == 'jellyfish' && !enemy.hit) {
            enemy.hit = true;
            let n = this.bubbles.indexOf(bubble)
            this.bubbles.splice(n, 1)
            this.killedEnemies++
            setTimeout(() => {
                this.removeJelly(enemy)
                enemy.stopAllIntervals();
            }, 1000)
        }
    }

    removeJelly(enemy) {
        this.clearEnemyIntervals(enemy);
        clearInterval(enemy.jellyfishMovement);
        let i = this.level.enemies.indexOf(enemy)
        this.level.enemies.splice(i, 1)
    }

    checkEndbossHit() {
        this.bubbles.forEach((bubble) => {
            if (bubble.isColliding(this.boss) && bubble.toxic == true) {
                this.damageEndboss(this.boss, bubble)
                bubble.clearBubbleIntervals();
            }
        })
    }

    damageEndboss(boss, bubble) {
        if (boss.type == 'endboss' && !boss.immune) {
            this.hitBoss(boss, bubble);
        }
        if (boss.health <= 0) {
            this.killBoss(boss);
        }
        setTimeout(() => {
            boss.immune = false
        }, 400)
    }

    hitBoss(boss, bubble) {
        boss.immune = true;
        let n = this.bubbles.indexOf(bubble)
        this.bubbles.splice(n, 1)
        boss.getHit(15);
        this.playSoundObject(boss);
        this.bossbar.setPercentage(boss.health)
    }

    killBoss(boss) {
        setTimeout(() => {
            boss.visible = false;
            this.level.enemies.splice((this.boss), 1)
            showWinScreen()
            bgSound.pause()
        }, 600)
    }

    collectCoin() {
        this.level.coins.forEach((coin) => {
            if (this.character.isColliding(coin)) {
                let i = this.level.coins.indexOf(coin)
                this.level.coins.splice(i, 1)
                this.playSoundObject(coin);
                this.collectedCoins++
                this.clearCollectableIntervals(coin);
            }
        })
    }

    collectBottle() {
        this.level.poison.forEach((bottle) => {
            if (this.character.isColliding(bottle)) {
                let i = this.level.poison.indexOf(bottle)
                this.level.poison.splice(i, 1)
                this.playSoundObject(bottle);
                this.collectedBottles++
                this.clearCollectableIntervals(bottle);
            }
        })
    }

    addObjectToMap(objects) {
        objects.forEach(object => {
            this.renderToCanvas(object)
        });
    };

    renderToCanvas(object) {
        if (object.mirror) {
            this.mirror(object);
        }

        if (object.visible) {
            object.draw(this.ctx)
            // object.hitbox(this.ctx) // hitbox
        }

        if (object.mirror) {
            this.restoreDirection(object);
        }
    };

    mirror(object) {
        this.ctx.save();
        this.ctx.translate(object.width, 0);
        this.ctx.scale(-1, 1);
        object.x = object.x * -1;
    }

    restoreDirection(object) {
        object.x = object.x * -1;
        this.ctx.restore();
    }

    clearEnemyIntervals(enemy) {
        clearInterval(enemy.animationInterval);
        clearInterval(enemy.dangerInterval);
        if (enemy.movingInterval) {
            clearInterval(enemy.movingInterval);
        }
        console.log('enemy intervals cleared')
    }

    clearCollectableIntervals(object) {
        clearInterval(object.animationInterval);
        console.log('interval cleared')
    }

    lights() {
        this.ctx.translate(-this.camera_x * 0.9, 0);
        this.addObjectToMap(this.level.light);
        this.ctx.translate(this.camera_x * 0.9, 0);
    }
}