class MovableObject {
    x = 120;
    y = 200;
    height = 200;
    width = 200;
    img;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    moveRight() {
        console.log('moving right')
    }

    moveLeft() {

    }
}