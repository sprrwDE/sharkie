class World {

    canvas;
    ctx;

    backgroundObects = [
        new BackgroundObject('./assets/imgs/3. Background/Layers/5. Water/D1.png'),
        new BackgroundObject('./assets/imgs/3. Background/Layers/4.Fondo 2/D1.png'),
        new BackgroundObject('./assets/imgs/3. Background/Layers/3.Fondo 1/D1.png'),
        new BackgroundObject('./assets/imgs/3. Background/Layers/2. Floor/D1.png'),
    ]

    light = [
        new Light('./assets/imgs/3. Background/Layers/1. Light/1.png'),
        new Light('./assets/imgs/3. Background/Layers/1. Light/2.png'),
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
        // Reset
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Render Schleifen
        this.addObjectToMap(this.backgroundObects);
        this.addObjectToMap(this.light)
        this.addObjectToMap(this.enemies);

        // Render
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