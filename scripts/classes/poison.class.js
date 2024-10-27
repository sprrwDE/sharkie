class Poison extends MovableObject {
    IMAGES_BOTTLE = [
        './assets/imgs/4. Marcadores/Posion/Animada/1.png',
        './assets/imgs/4. Marcadores/Posion/Animada/2.png',
        './assets/imgs/4. Marcadores/Posion/Animada/3.png',
        './assets/imgs/4. Marcadores/Posion/Animada/4.png',
        './assets/imgs/4. Marcadores/Posion/Animada/5.png',
        './assets/imgs/4. Marcadores/Posion/Animada/6.png',
        './assets/imgs/4. Marcadores/Posion/Animada/7.png',
        './assets/imgs/4. Marcadores/Posion/Animada/8.png'
    ]
    sound = new Audio('./assets/sounds/bottle.mp3')

    constructor(x, y) {
        super();
        this.loadImages(this.IMAGES_BOTTLE);
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50;
        this.animate();
    };

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_BOTTLE)
        }, 200);
    }
}