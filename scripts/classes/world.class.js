class World {

    canvas;
    ctx;
    keyboard;
    camera_x = -2;

    character = new Character();
    level = level_1;

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
        this.addObjectToMap(this.level.backgroundObects);
        this.addObjectToMap(this.level.light)
        this.addObjectToMap(this.level.enemies);
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
            this.mirror(object);
        }
        this.ctx.drawImage(object.img, object.x, object.y, object.width, object.height);
        if (object.mirror) {
            this.restoreDirection(object);
        }
        // Hitbox
        this.ctx.beginPath();
        this.ctx.lineWidth = '3';
        this.ctx.strokeStyle = 'blue';
        this.ctx.rect(object.x, object.y, object.width, object.height);
        this.ctx.stroke();
    };

    mirror(object) {
        this.ctx.save();
        this.ctx.translate(object.width, 0);
        this.ctx.scale(-1, 1);
        object.x = object.x * -1;
    }

    restoreDirection(object) {
        object.x = object.x * -1;
        this.ctx.restore();
    }

    setWorld() {
        this.character.world = this;
    }
}