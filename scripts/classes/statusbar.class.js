class Statusbar extends DrawableObject {

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
    percentage = 100
    bossPercentage = 100

    constructor(x, y, width, height, bar) {
        super();
        // this.loadImage('./assets/imgs/4. Marcadores/green/100_ copia 5.png')
        // this.loadImage('./assets/imgs/4. Marcadores/green/100_ copia 6.png')
        this.defineBar(bar)
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    setPercentage(pctg) {
        let path = './assets/imgs/4. Marcadores/green/Life/100_  copia 2.png';
        this.percentage = pctg
        path = this.IMAGES_HP[this.resolveImageIndex()];
        this.img = this.imgCache[path]; 
    }

    setBossPercentage(pctg) {
        let path = './assets/imgs/4. Marcadores/orange/100_  copia.png';
        this.bossPercentage = pctg
        path = this.IMAGES_ENDBOSS[this.resolveBossImageIndex()];
        this.img = this.imgCache[path]; 
    }

    resolveImageIndex(pctg) {
        if(pctg == 100) {
            return 0;
        } else if (this.percentage > 80) {
            return 1;
        } else if (this.percentage > 60) {
            return 2;
        } else if (this.percentage > 40) {
            return 3;
        } else if (this.percentage > 20) {
            return 4;
        } else {
            return 5;
        } 
    }

    resolveBossImageIndex() {
        if(this.bossPercentage == 100) {
            return 0;
        } else if (this.bossPercentage > 80) {
            return 1;
        } else if (this.bossPercentage > 60) {
            return 2;
        } else if (this.bossPercentage > 40) {
            return 3;
        } else if (this.bossPercentage > 20) {
            return 4;
        } else {
            return 5;
        } 
    }

    defineBar(bar) {
        if (bar === "char") {
            this.loadImages(this.IMAGES_HP);
            this.setPercentage(100)
        }
        if (bar === "boss") {
            this.loadImages(this.IMAGES_ENDBOSS);
            this.setBossPercentage(100)
        }
    }

}


