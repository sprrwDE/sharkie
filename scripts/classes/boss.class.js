class Endboss extends MovableObject {
    hitboxColor = 'red';
    IMAGES_SWIMMING = [
        './assets/imgs/2.Enemy/3 Final Enemy/2.floating/1.png',
        './assets/imgs/2.Enemy/3 Final Enemy/2.floating/2.png',
        './assets/imgs/2.Enemy/3 Final Enemy/2.floating/3.png',
        './assets/imgs/2.Enemy/3 Final Enemy/2.floating/4.png',
        './assets/imgs/2.Enemy/3 Final Enemy/2.floating/5.png',
        './assets/imgs/2.Enemy/3 Final Enemy/2.floating/6.png',
        './assets/imgs/2.Enemy/3 Final Enemy/2.floating/7.png',
        './assets/imgs/2.Enemy/3 Final Enemy/2.floating/8.png',
        './assets/imgs/2.Enemy/3 Final Enemy/2.floating/9.png',
        './assets/imgs/2.Enemy/3 Final Enemy/2.floating/10.png',
        './assets/imgs/2.Enemy/3 Final Enemy/2.floating/11.png',
        './assets/imgs/2.Enemy/3 Final Enemy/2.floating/12.png',
        './assets/imgs/2.Enemy/3 Final Enemy/2.floating/13.png'
    ]
    IMAGES_SPAWNING = [
        './assets/imgs/2.Enemy/3 Final Enemy/1.Introduce/1.png',
        './assets/imgs/2.Enemy/3 Final Enemy/1.Introduce/2.png',
        './assets/imgs/2.Enemy/3 Final Enemy/1.Introduce/3.png',
        './assets/imgs/2.Enemy/3 Final Enemy/1.Introduce/4.png',
        './assets/imgs/2.Enemy/3 Final Enemy/1.Introduce/5.png',
        './assets/imgs/2.Enemy/3 Final Enemy/1.Introduce/6.png',
        './assets/imgs/2.Enemy/3 Final Enemy/1.Introduce/7.png',
        './assets/imgs/2.Enemy/3 Final Enemy/1.Introduce/8.png',
        './assets/imgs/2.Enemy/3 Final Enemy/1.Introduce/9.png',
        './assets/imgs/2.Enemy/3 Final Enemy/1.Introduce/10.png',
    ];
    offset = {
        'left': 20,
        'right': 20,
        'top': 160,
        'bottom': 240 
    }


    contact = false

    constructor() {
        super();
        this.loadImage('./assets/imgs/2.Enemy/3 Final Enemy/2.floating/1.png');
        this.y = 0;
        this.x = 700 * 3;
        this.height = 400;
        this.width = this.height;

        this.moveSpeed = 0.15 + Math.random() * 0.45
        this.loadImages(this.IMAGES_SWIMMING);
        this.loadImages(this.IMAGES_SPAWNING);
        this.animate();
    }

    /* funktioniert noch nicht, wie auf character zugreifen? -> Wirft Consolen Errors
    animate() {
        let i = 0;
        setInterval(()=> {
            if (i < 10) {
                this.playAnimation(this.IMAGES_SPAWNING);
            } else { 
                this.playAnimation(this.IMAGES_SWIMMING);
            }
            i++
            if (this.character.x > this.x && !contact) {
                i = 0;
                this.contact = true;
            }
        }, 180);


        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);   
    };    */

    animate() {
        setInterval(()=> {
                this.playAnimation(this.IMAGES_SWIMMING);
            }, 180);

        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);   
    }; 

}