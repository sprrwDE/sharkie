class MovableObject {
    x = 120;
    y = 200;
    height = 200;
    width = 200;
    img;
    currentImage = 0;
    imgCache = {};
    moveSpeed;

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

    stop() {
        setInterval(() => {
            this.y = this.y;
            this.x = this.x;
        }, 1000 / 60);
    };
}