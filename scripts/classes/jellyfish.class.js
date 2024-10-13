class JellyFish extends MovableObject {

    IMAGES_SWIMMING = [
        './assets/imgs/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png',
        './assets/imgs/2.Enemy/2 Jelly fish/Regular damage/Yellow 2.png',
        './assets/imgs/2.Enemy/2 Jelly fish/Regular damage/Yellow 3.png',
        './assets/imgs/2.Enemy/2 Jelly fish/Regular damage/Yellow 4.png'
    ]

    constructor(){
        super().loadImage('./assets/imgs/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png')
        this.y = Math.random() * 480;
        this.x = 300 + Math.random() * 700;
        this.height = 80
        this.width = this.height;

        this.moveSpeed = 0.15 + Math.random() * 0.45
        this.loadImages(this.IMAGES_SWIMMING);
        this.animate();

    }

    animate() {
        setInterval( () => {
            let index = this.currentImage % this.IMAGES_SWIMMING.length 
            let path = this.IMAGES_SWIMMING[index];
            this.img = this.imgCache[path]
            this.currentImage++;
        }, 200);

        this.moveUp()
    };

}

