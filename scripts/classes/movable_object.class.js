class MovableObject extends DrawableObject {
    moveSpeed;
    health = 100;
    lastHit = 0;


    constructor() {
        super()
    }

    setEnemyCharacteristics() {
        this.y = Math.random() * 480;
        this.x = 300 + Math.random() * 700;
        this.height = 80
        this.width = this.height;
        this.moveSpeed = 0.15 + Math.random() * 0.45
    }



    isColliding(object) {
        return (this.x + this.width - (this.offsetRight / 2)) >= object.x + object.offsetLeft && 
            (this.x + (this.offsetLeft / 2)) <= (object.x + (object.width - object.offsetRight)) &&
            (this.y + this.height - (this.offsetBottom / 3)) >= object.y + object.offsetTop &&
            (this.y + (this.offsetTop)) <= (object.y + (object.height - object.offsetBottom))
    }

    getHit(hp) {
        this.health -= hp;
        if (this.health < 0) {
            this.health = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isHurt() {
        let timespan = new Date() - this.lastHit; // differenz in ms
        timespan = timespan / 1000 // differenz in s
        return timespan < 0.3;
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

    Fische Spiegeln
    mirror(object) {
        this.ctx.save();
        this.ctx.translate(object.width, 0);
        this.ctx.scale(-1, 1);
        object.x = object.x * -1;
    }

    }; 
    
    */




}