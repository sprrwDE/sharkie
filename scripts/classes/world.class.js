class World {

    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    
    backgroundObects = level_1.backgroundObects;
    light = level_1.light;
    character = new Character();
    enemies = level_1.enemies;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectToMap(this.backgroundObects);
        this.addObjectToMap(this.light)
        this.addObjectToMap(this.enemies);
        this.renderToCanvas(this.character);

        this.ctx.translate(-this.camera_x, 0);

        let self = this;
        requestAnimationFrame(function () {
            self.draw()
        }
        );
    };

    addObjectToMap(objects) {
        objects.forEach(object => {
            this.renderToCanvas(object)
        });
    };

    renderToCanvas(object) {
        if (object.mirror) {
            this.ctx.save();
            this.ctx.translate(object.width, 0);
            this.ctx.scale(-1, 1);
            object.x = object.x * -1;
        }
        this.ctx.drawImage(object.img, object.x, object.y, object.width, object.height);
        if (object.mirror) {
            object.x = object.x * -1;
            this.ctx.restore()
        }
    };

    setWorld() {
        this.character.world = this;
    }
}