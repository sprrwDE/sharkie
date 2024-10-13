class MovableObject {
    x = 120;
    y = 200;
    height = 200;
    width = 200;
    img;
    imgCache = {};

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(cache) {
        cache.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imgCache[path] = img;
        });
    }

    moveRight() {
        console.log('moving right')
    }

    moveLeft() {

    }
}