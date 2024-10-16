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
    gravitySpeed = 0;
    acceleration = 0.05;

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

    playAnimation(images) {
        let index = this.currentImage % images.length;
        let path = images[index];
        this.img = this.imgCache[path];
        this.currentImage++;
    }

    worldLeft() {
        setInterval(() => {
            this.x -= this.moveSpeed;
        }, 1000 / 60);
    };

    moveRight() {
        this.x += this.moveSpeed;
        this.world.camera_x = -this.x + 100
        this.mirror = false;
    };

    moveLeft() {
        this.x -= this.moveSpeed;
        this.world.camera_x = -this.x + 100
        this.mirror = true;
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
                    this.mirror = true;
                }
            } else {
                this.x -= this.moveSpeed; 
                if (this.x - this.width <= 0) { 
                    this.movingLeft = true;
                    this.mirror = false;
                }
            }
        }, 1000 / 60);
    }; 
    
    */

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
}