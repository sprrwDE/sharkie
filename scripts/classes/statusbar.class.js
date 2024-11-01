class Statusbar extends DrawableObject {

    // wie boss bar erst nach einer weile anzeigen?

    IMAGES_HP = [
        './assets/imgs/4. Marcadores/green/Life/100_  copia 2.png',
        './assets/imgs/4. Marcadores/green/Life/80_  copia 3.png',
        './assets/imgs/4. Marcadores/green/Life/60_  copia 3.png',
        './assets/imgs/4. Marcadores/green/Life/40_  copia 3.png',
        './assets/imgs/4. Marcadores/green/Life/20_ copia 4.png',
        './assets/imgs/4. Marcadores/green/Life/0_ copia 3.png'
    ]
    IMAGES_ENDBOSS = [
        './assets/imgs/4. Marcadores/orange/100_  copia.png',
        './assets/imgs/4. Marcadores/orange/80_  copia.png',
        './assets/imgs/4. Marcadores/orange/60_  copia.png',
        './assets/imgs/4. Marcadores/orange/40_  copia.png',
        './assets/imgs/4. Marcadores/orange/20_ copia 2.png',
        './assets/imgs/4. Marcadores/orange/0_  copia.png'
    ]
    percentage = 100;
    barType;

    constructor(x, y, width, height, bar) {
        super().loadImage('./assets/imgs/4. Marcadores/green/Life/100_  copia 2.png');
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.defineBar(bar);
    }

    setPercentage(pctg) {
        this.percentage = pctg;
        const path = this.setPath();
        this.img = this.imgCache[path];
    }

    setPath() {
        let path;
        if (this.barType === 'char') {
            return path = this.IMAGES_HP[this.resolveImageIndex(this.percentage)];
        } else if (this.barType === 'boss') {
            return path = this.IMAGES_ENDBOSS[this.resolveImageIndex(this.percentage)];
        }
    }

    resolveImageIndex(pctg) {
        if (pctg > 80) {
            return 0;
        } else if (pctg > 60) {
            return 1;
        } else if (pctg > 40) {
            return 2;
        } else if (pctg > 20) {
            return 3;
        } 
        if (pctg > 0) {
            return 4;
        } else {
            return 5;
        }
    }

    defineBar(bar) {
        if (bar === "char") {
            this.setCharacterBar();
        }
        if (bar === "boss") {
            this.setBossBar();
        }
    }

    setCharacterBar() {
        this.loadImages(this.IMAGES_HP);
        this.barType = 'char';
        this.setPercentage(100);
    }

    setBossBar() {
        this.loadImages(this.IMAGES_ENDBOSS);
        this.barType = 'boss';
        this.setPercentage(100);
    }
}

