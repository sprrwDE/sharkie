class JellyFish extends MovableObject {
    constructor(){
        super().loadImage('./assets/imgs/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png')
        this.y = Math.random() * 480;
        this.x = 300 + Math.random() * 700;
        this.height = 80
        this.width = this.height;

    }
}

