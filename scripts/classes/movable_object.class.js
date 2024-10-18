class MovableObject {
    x = 100;
    y = 200;
    height = 200;
    width = 200;
    img;
    currentImage = 0;
    imgCache = {};
    moveSpeed;
    mirror = false;
    health = 100;
    // gravitySpeed = 0;
    // acceleration = 0.05;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(array) {
        array.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imgCache[path] = img;
        });
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    setEnemyCharacteristics() {
        this.y = Math.random() * 480;
        this.x = 300 + Math.random() * 700;
        this.height = 80
        this.width = this.height;
        this.moveSpeed = 0.15 + Math.random() * 0.45
    }

    // Kollission
    hitbox(ctx) {
        if (this instanceof Character ||
            this instanceof PufferFishGreen ||
            this instanceof JellyFishYellow ||
            this instanceof JellyFishPurple ||
            this instanceof Endboss) {
            ctx.beginPath();
            ctx.lineWidth = '3';
            ctx.strokeStyle = this.hitboxColor;
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

    isColliding(object) {
        let offsetY = 0; // was macht es?
        return (this.x + this.width) >= object.x && this.x <= (object.x + object.width) &&
            (this.y + offsetY + this.height) >= object.y &&
            (this.y + offsetY) <= (object.y + object.height)
    }

    getHit(hp) {
        this.health -= hp;
        if (this.health < 0) {
            this.health = 0;
        }
    }

    isDead() {
        return this.health == 0;
    }

    // Animation
    playAnimation(images) {
        let index = this.currentImage % images.length;
        let path = images[index];
        this.img = this.imgCache[path];
        this.currentImage++;
    }

    // Bewegen
    moveRight() {
        this.x += this.moveSpeed;
    };

    moveLeft() {
        this.x -= this.moveSpeed;
    };

    moveUp() {
        this.y -= this.moveSpeed;
    };

    moveDown() {
        this.y += this.moveSpeed;
    };

    enemyUpAndDown() {
        setInterval(() => {
            if (this.movingUp) {
                this.y -= this.moveSpeed;
                if (this.y <= 0) {
                    this.movingUp = false;
                }
            } else {
                this.y += this.moveSpeed;
                if (this.y + this.height >= 480) {
                    this.movingUp = true;
                }
            }
        }, 1000 / 60);
    };

    /* noch Fehlerhaft

    enemyLeftAndRight() {
        setInterval(() => {
            if (this.movingLeft) {
                this.x += this.moveSpeed; 
                if (this.x>= 720*3) { 
                    this.movingLeft = false;
                    mirror(this.enemy)
                }
            } else {
                this.x -= this.moveSpeed; 
                if (this.x - this.width <= 0) { 
                    this.movingLeft = true;
                    mirror(this.enemy)
                }
            }
        }, 1000 / 60);

    mirror(object) {
        this.ctx.save();
        this.ctx.translate(object.width, 0);
        this.ctx.scale(-1, 1);
        object.x = object.x * -1;
    }

    }; 
    
    */

    /* 
    applyGravity() {
        // fragen!!
        // gravity wird schneller, wie resetten bei nach oben button? 
        // oder stattdessen feste werte ohne acceleration benutzen?
        // -> in character bei move gravity speed definiert / fixed?
        // aber gravitation bei stillstand ruckelig
        setInterval(() => {
            if (this.isAboveGround()) {
                this.y -= this.gravitySpeed;
                this.gravitySpeed -= this.acceleration;
            }
        }, 50)
    } 

    isAboveGround() {
        return this.y < 480 - this.height
    }
    */


}