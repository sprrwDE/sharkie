class Statusbar extends DrawableObject {

    IMAGES_HP = [
        './assets/imgs/4. Marcadores/green/Life/100_  copia 2.png',
        './assets/imgs/4. Marcadores/green/Life/80_  copia 3.png',
        './assets/imgs/4. Marcadores/green/Life/60_  copia 3.png',
        './assets/imgs/4. Marcadores/green/Life/40_  copia 3.png',
        './assets/imgs/4. Marcadores/green/Life/20_ copia 4.png',
        './assets/imgs/4. Marcadores/green/Life/0_ copia 3.png'
    ]
    percentage = 100

    constructor() {
        super();
        this.loadImage('./assets/imgs/4. Marcadores/green/100_ copia 5.png')
        this.loadImage('./assets/imgs/4. Marcadores/green/100_ copia 6.png')
        this.loadImages(this.IMAGES_HP)
        this.setPercentage(100)
    }

    setPercentage(pctg) {
        this.x = 50;
        this.y = 20;
        this.width = 200;
        this.height = 60;
        this.percentage = pctg
        let path = this.IMAGES_HP[this.resolveImageIndex()];
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