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
    acceleration = 0.01;

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

    moveLeft() {
        setInterval(() => {
            this.x -= this.moveSpeed;
        }, 1000 / 60);
    };

    moveRight() {
        setInterval(() => {
            this.x += this.moveSpeed;
        }, 1000 / 60);
    };

    moveUp() {
        setInterval(() => {
            this.y -= this.moveSpeed;
        }, 1000 / 60);
    };

    moveDown() {
        setInterval(() => {
            this.y += this.moveSpeed;
        }, 1000 / 60);
    };

    moveUpAndDown() {
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

    /* Fehlerhaft

    moveLeftAndRight() {
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
        // gravity wird schneller, wie resetten bei nach oben button? 
        // oder feste werte ohne acceleration?
        setInterval(() => {
            if (this.isAboveGround()) {
                this.y -= this.gravitySpeed;
                this.gravitySpeed -= this.acceleration;
            }
        }, 50 )
    }

    isAboveGround() {
        return this.y < 480 - this.height
    }
}