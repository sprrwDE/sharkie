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
}