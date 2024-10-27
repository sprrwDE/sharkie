class DrawableObject {
    x = 100;
    y = 200;
    height = 200;
    width = 200;
    img;
    currentImage = 0;
    imgCache = {};
    mirror = false;
    totalImages = 0
    visible = true;
    
    // Hitbox
    offset = {
        'left': 0,
        'right': 0,
        'top': 0,
        'bottom': 0 
    }


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(array) {
        array.forEach(path => {
            this.totalImages++
            let img = new Image();
            img.src = path;
            this.imgCache[path] = img;
            ////// LOADINGSCREEN
            // this.img.onload -> globale variable wie viele bilder geladen wurden (console log checken)
            // am anfang images loaded = 0 -> hochzählen foreach(img) images loaded ++
            // if imagesLoaded = totalImages
            // loaded = true -> vorher definieren mehmet fragen
            // ladebalken / animation machen?
        });
    }

    draw(ctx) {
        try {
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        } catch(error) {
            console.warn('Error loading Image', error)
            console.log('broken img src', this.img)
        }
    }
 
    hitbox(ctx) {
        if (this instanceof Character ||
            this instanceof PufferFishGreen ||
            this instanceof JellyFishYellow ||
            this instanceof JellyFishPurple ||
            this instanceof Endboss) {
            ctx.beginPath();
            ctx.lineWidth = '3';
            ctx.strokeStyle = this.hitboxColor;
            ctx.rect(this.x + this.offset['left'] , this.y + this.offset['top'] , this.width - this.offset['right'] , this.height - this.offset['bottom']);
            ctx.stroke();
        }
    } 
    
}