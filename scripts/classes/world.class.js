class World {

    canvas;
    ctx;

    backgroundObects = [
        new BackgroundObject('./assets/imgs/3. Background/Layers/5. Water/D1.png', 0, 0),
        new BackgroundObject('./assets/imgs/3. Background/Layers/4.Fondo 2/D1.png', 0, 80),
        new BackgroundObject('./assets/imgs/3. Background/Layers/3.Fondo 1/D1.png', 0, 80),
        new BackgroundObject('./assets/imgs/3. Background/Layers/2. Floor/D1.png', 0, 80),
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

        this.addObjectToMap(this.backgroundObects);
        this.addObjectToMap(this.enemies);

        this.renderToCanvas(this.character);    

        // Draw wird wiederholt aufgerufen
        let self = this;
        requestAnimationFrame(function () {
            self.draw()
        }
        );
    };

    addObjectToMap(objects) {
        objects.forEach(object => {
            this.renderToCanvas(object)
        })
    }

    renderToCanvas(object) {
        this.ctx.drawImage(object.img, object.x, object.y, object.width, object.height);
    }
}