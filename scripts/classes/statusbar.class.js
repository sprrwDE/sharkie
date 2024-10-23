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
        './assets/imgs/4. Marcadores/orange/20_  copia.png',
        './assets/imgs/4. Marcadores/orange/0_  copia.png'
    ]
    percentage = 100;
    barType;

    constructor(x, y, width, height, bar) {
        super();
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.defineBar(bar);
    }

    setPercentage(pctg) {
        let path;
        this.percentage = pctg;

        if (this.barType === 'char') {
            path = this.IMAGES_HP[this.resolveImageIndex(this.percentage)];
        } else if (this.barType === 'boss') {
            path = this.IMAGES_ENDBOSS[this.resolveImageIndex(this.percentage)];
        }

        this.img = this.imgCache[path];
    }

    resolveImageIndex(pctg) {
        if (pctg == 100) {
            return 0;
        } else if (pctg > 80) {
            return 1;
        } else if (pctg > 60) {
            return 2;
        } else if (pctg > 40) {
            return 3;
        } else if (pctg > 20) {
            return 4;
        } else {
            return 5;
        }
    }

    defineBar(bar) {
        if (bar === "char") {
            this.loadImages(this.IMAGES_HP);
            this.barType = 'char';
            this.setPercentage(100);
        }
        if (bar === "boss") {
            this.loadImages(this.IMAGES_ENDBOSS);
            this.barType = 'boss';
            this.setPercentage(100);
        }
    }
}

