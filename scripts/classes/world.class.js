class World {

    canvas;
    ctx;

    backgroundObects = [
        new BackgroundObject('./assets/imgs/3. Background/Layers/2. Floor/D1.png'),
    ]

    character = new Character();
    enemies = [
        new PufferFish(),
        new PufferFish(),
        new PufferFish(),
        
        new JellyFish(),
        new JellyFish(),
    ];

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.backgroundObects.forEach(bgObject => {
            this.addToMap(bgObject)        
        })

        this.addToMap(this.character)    

        this.enemies.forEach(enemy => {
            this.addToMap(enemy)        
        });

        // Draw wird wiederholt aufgerufen
        let self = this;
        requestAnimationFrame(function () {
            self.draw()
        }
        );
    };

    addToMap(mo) {
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
    }
}