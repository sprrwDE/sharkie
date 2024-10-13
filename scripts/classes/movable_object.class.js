class MovableObject {
    x = 120;
    y = 200;
    height = 200;
    width = 200;
    img;
    currentImage = 0;
    imgCache = {};
    moveSpeed = 0.10 + Math.random() * 0.25

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

    moveRight() {
        console.log('moving right')
    }

    moveLeft() {
        setInterval( () => {
            this.x -= this.moveSpeed;
        }, 1000 / 60);
    };
}