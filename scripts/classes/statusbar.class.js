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

    constructor(x, y, width, height) {
        super();
        // this.loadImage('./assets/imgs/4. Marcadores/green/100_ copia 5.png')
        // this.loadImage('./assets/imgs/4. Marcadores/green/100_ copia 6.png')
        this.loadImages(this.IMAGES_HP)
        this.loadImages(this.IMAGES_ENDBOSS)
        this.setPercentage(100)
        this.setBossPercentage(100)
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    setPercentage(pctg) {

        this.percentage = pctg
        let path = this.IMAGES_HP[this.resolveImageIndex()];
        this.img = this.imgCache[path]; 
    }

    setBossPercentage(pctg) {

        this.percentage = pctg
        let path = this.IMAGES_ENDBOSS[this.resolveImageIndex()];
        this.img = this.imgCache[path]; 
    }

    resolveImageIndex() {
        if(this.percentage == 100) {
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

}