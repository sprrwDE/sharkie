class PufferFish extends MovableObject {
    constructor(){
        super().loadImage('./assets/imgs/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png')
        this.y = Math.random() * 480;
        this.x = 300 + Math.random() * 700;
        this.height = 80
        this.width = this.height;

    }
}