class DrawableObject {
    x = 100;
    y = 200;
    height = 200;
    width = 200;
    img;
    currentImage = 0;
    imgCache = {};
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

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    // Kollission
    hitbox(ctx) {
        if (this instanceof Character ||
            this instanceof PufferFishGreen ||
            this instanceof JellyFishYellow ||
            this instanceof JellyFishPurple ||
            this instanceof Endboss) {
            ctx.beginPath();
            ctx.lineWidth = '3';
            ctx.strokeStyle = this.hitboxColor;
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

    
}