class DrawableObject {
    x = 100;
    y = 200;
    height = 200;
    width = 200;
    img;
    currentImage = 0;
    imgCache = {};


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
}