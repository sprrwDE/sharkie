class World {

    canvas;
    ctx;
    keyboard;
    camera_x = -2;
    character = new Character();
    level = level_1;
    statusbar = new Statusbar(50, 20, 200, 60, 'char');
    bossbar = new Statusbar(480, 20, 200, 60, 'boss')
    bubbles = []
    collectedBottles = 0;
    collectedCoins = 0;
    enemyType;
    // collectables = new Statusbar(50, 20, 200, 60);
    // poisonbar = new Statusbar(50, 120, 200, 60);

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.setWorld();
        this.run()
        this.draw();
    }

    setWorld() {
        this.character.world = this;
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0); // camera back
        this.addObjectToMap(this.level.backgroundObects);
        this.addObjectToMap(this.level.light)
        this.addObjectToMap(this.level.enemies);
        this.addObjectToMap(this.level.poison);
        this.addObjectToMap(this.level.coins);
        this.renderToCanvas(this.character);
        this.addObjectToMap(this.bubbles);

        this.ctx.translate(-this.camera_x, 0); // camera forward
        // fixed
        this.renderToCanvas(this.statusbar);
        this.renderToCanvas(this.bossbar);
        this.drawText(this.collectedBottles, 120, 120);
        this.drawText(this.collectedCoins, 120, 160);

        let self = this;
        requestAnimationFrame(function () {
            self.draw()
        }
        );
    };

    drawText(item, x, y) {
        const ctx = document.getElementById("canvas").getContext("2d");
        ctx.font = "48px sans-serif";
        ctx.fillText(item, x, y);
    }

    run() {
        setInterval(() => {
            this.checkCollissions();
            this.checkBubbleHit();
            this.collectBottle();
            this.collectCoin();
        }, 50)

        setInterval(() => {
            this.checkBubbleThrow();
            this.checkEndbossHit();
        }, 500)
    }

    // if !immune (bei finslap immune = true setzen)
    checkCollissions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && !this.character.immune) {
                this.character.getHit(5);
                this.statusbar.setPercentage(this.character.health)
                this.enemyType = this.checkEnemyType(enemy)
            } else if ((this.character.isColliding(enemy) && this.character.immune)) {
                this.hitByFinslap(enemy);
            }
        })
    }

    // enemy.deadly = true / false für schaden zufügen bzw cancellen in todesanimation

    checkEnemyType(enemy) {
        if (enemy.type === 'pufferfish') {
            return 'pufferfish'
        } else if (enemy.type === 'jellyfish') {
            return 'jellyfish'
        } else if (enemy.type === 'endboss') {
            return 'endboss'
        }
    }

    hitByFinslap(enemy) {
        // funktion in movableObjekt definieren, animation abspielen, enemy.kill(), eventuell super klasse erstellen /// Instance of Pufferfish
        let i = this.level.enemies.indexOf(enemy)
        this.enemyType = this.checkEnemyType(enemy)
        // setTimeout(() => {}, 1000) -> wie umsetzen dass nicht alles splices, wie animationen einmalig ausführen
        this.level.enemies.splice(i, 1)
    }

    checkBubbleThrow() {
        if (this.keyboard.SHOOT) {
            let bubble = new Bubble(this.character.x, this.character.y, this.character.width, this.character.height, this.character.mirror, './assets/imgs/1.Sharkie/4.Attack/Bubble trap/Bubble.png');
            this.bubbles.push(bubble);
        } if (this.keyboard.POISON) {
            let poison = new Bubble(this.character.x, this.character.y, this.character.width, this.character.height, this.character.mirror, './assets/imgs/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble.png');
            this.bubbles.push(poison);
        }
    }

    checkBubbleHit() {
        this.bubbles.forEach((bubble) => {
            this.level.enemies.forEach((enemy) => {
                if (bubble.isColliding(enemy)) {
                    this.killJellyfish(enemy)
                }
            })
        })
    }

    killJellyfish(enemy, bubble) {
        if (enemy.type == 'jellyfish' && !enemy.hit) {
            enemy.hit = true;
            let n = this.bubbles.indexOf(bubble)
            this.bubbles.splice(n, 1)
            setTimeout(() => {
                let i = this.level.enemies.indexOf(enemy)
                this.level.enemies.splice(i, 1)
            }, 1000)
        }
    }

    checkEndbossHit() {
        this.bubbles.forEach((bubble) => {
            const bossEnemy = this.level.enemies[this.level.enemies.length - 1]
            if (bubble.isColliding(bossEnemy)) {
                this.damageEndboss(bossEnemy, bubble)
            }
        })
    }

    damageEndboss(boss, bubble) {
        if (boss.type == 'endboss' && !boss.immune) {
            boss.immune = true;
            let n = this.bubbles.indexOf(bubble)
            this.bubbles.splice(n, 1)
            boss.getHit(5);
            this.bossbar.setPercentage(boss.health)
            console.log(boss.health)
        } 
        setTimeout(() => {
            boss.immune = false
        }, 300)
    } // noch fehlerhaft

    collectBottle() {
        this.level.coins.forEach((coin) => {
            if (this.character.isColliding(coin)) {
                let i = this.level.coins.indexOf(coin)
                this.level.coins.splice(i, 1)
                coin.coin_sound.play()
                this.collectedCoins++
                console.log(this.collectedCoins)
            }
        })
    }

    collectCoin() {
        this.level.poison.forEach((bottle) => {
            if (this.character.isColliding(bottle)) {
                let i = this.level.poison.indexOf(bottle)
                this.level.poison.splice(i, 1)
                bottle.bottle_sound.play()
                this.collectedBottles++
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

        object.draw(this.ctx)
        object.hitbox(this.ctx)

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
}