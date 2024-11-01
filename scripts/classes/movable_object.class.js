class MovableObject extends DrawableObject {
    moveSpeed;
    health = 100;
    lastHit = 0;
    finslapActive = false;
    finslapInProgress = false;
    movementIntervalJellyfish = null;
    upstream = null;
    offset = {
        'left': 0,
        'right': 0,
        'top': 0,
        'bottom': 0 
    };

    constructor() {
        super();
    }

    setEnemyCharacteristics() {
        this.y = this.height + (Math.random() * 360);
        this.x = 300 + Math.random() * 700;
        this.height = 80;
        this.width = this.height;
        this.moveSpeed = 0.15 + Math.random() * 0.45;
    }

    isColliding(object) {
        return (this.x + this.width - (this.offset.right / 2)) >= object.x + object.offset.left &&
            (this.x + (this.offset.left / 2)) <= (object.x + (object.width - object.offset.right)) &&
            (this.y + this.height - (this.offset.bottom / 3)) >= object.y + object.offset.top &&
            (this.y + this.offset.top) <= (object.y + (object.height - object.offset.bottom));
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
        let timespan = (new Date() - this.lastHit) / 1000;
        return timespan < 0.3;
    }

    isDead() {
        return this.health === 0;
    }

    playAnimation(images) {
        let index = this.currentImage % images.length;
        let path = images[index];
        this.img = this.imgCache[path];
        this.currentImage++;
    }

    moveRight() {
        this.x += this.moveSpeed;
    }

    moveLeft() {
        this.x -= this.moveSpeed;
    }

    moveUp() {
        this.y -= this.moveSpeed;
    }

    moveDown() {
        this.y += this.moveSpeed;
    }

    stopMovement() {
        if (this.movementIntervalJellyfish) {
            clearInterval(this.movementIntervalJellyfish);
            console.log('Movement interval cleared:', this.movementIntervalJellyfish);
            this.movementIntervalJellyfish = null;
        }
    }

    enemyUpAndDown() {
        if (this.movementIntervalJellyfish) {
            clearInterval(this.movementIntervalJellyfish);
        }
        this.movementIntervalJellyfish = setInterval(() => {
            if (this.movingUp) {
                this.enemyUp();
            } else {
                this.enemyDown();
            }
            console.log('Interval started jelly movement:', this.movementIntervalJellyfish);
        }, 1000 / 60);
    }

    enemyUp() {
        this.moveUp();
        if (this.y <= 0) {
            this.movingUp = false;
        }
    }

    enemyDown() {
        this.moveDown();
        if (this.y + this.height >= 480) {
            this.movingUp = true;
        }
    }

    applyGravity(grav, acc) {
        if (this.y + this.height <= 440) {
            this.y += grav;
            grav += acc;
        }
    }


    applyUpstream(up, acc) {
        this.stopMovement(); 
        if (this.upstream) {
            clearInterval(this.upstream); 
            console.log('upstream interval cleared:', this.upstream);
        }
        this.upstream = setInterval(() => {
            this.y -= up;
            up += acc;
        }, 1000 / 25);
        console.log('Upstream interval started:', this.upstream);
    }

    bossDash() {
        this.moveLeft();
        console.log('Boss dash speed:', this.moveSpeed);
    }

    bossDashRight() {
        this.moveRight();
        console.log('Boss dash speed:', this.moveSpeed);
    }

    checkDanger(range) {
        if (this.dangerInterval) {
            clearInterval(this.dangerInterval);
        }
        this.dangerInterval = setInterval(() => {
            this.danger = !this.danger;
            this.damage = this.danger ? 10 : 5;
        }, range + (range * Math.random()));
    }
}