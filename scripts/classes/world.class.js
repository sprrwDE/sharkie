class World {

    canvas;
    ctx;
    keyboard;
    camera_x = -2;

    character = new Character();
    level = level_1;

    statusbar = new Statusbar();        


    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollissions()
    }

    setWorld() {
        this.character.world = this;
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0); // camera back
        this.addObjectToMap(this.level.backgroundObects);
        this.addObjectToMap(this.level.light)
        this.addObjectToMap(this.level.enemies); 
        this.addObjectToMap(this.level.bottles); 
        this.renderToCanvas(this.character);
        this.ctx.translate(-this.camera_x, 0); // camera forward
        // fixed
        this.renderToCanvas(this.statusbar);
        let self = this;
        requestAnimationFrame(function () {
            self.draw()
        }
        );
    };

    checkCollissions() {
        setInterval(() => {
            this.level.enemies.forEach((enemy) => {
                if (this.character.isColliding(enemy)) {
                    this.character.getHit(5);
                    this.statusbar.setPercentage(this.character.health)
                }
            })
        }, 150)
    }

    addObjectToMap(objects) {
        objects.forEach(object => {
            this.renderToCanvas(object)
        });
    };

    renderToCanvas(object) {
        if (object.mirror) {
            this.mirror(object);
        }

        object.draw(this.ctx)
        object.hitbox(this.ctx)

        if (object.mirror) {
            this.restoreDirection(object);
        }
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
}