class Enemy extends MovableObject {
    hitboxColor = 'red';
    danger = false;
    hit = false;
    sound;
    constructor() {
        super()
    }

    checkDanger() {
        setInterval(() => {
            this.danger = !this.danger;
        }, 5000 + (5000 * Math.random()));
    }

    animationLogic() {
        setInterval(() => {
            if (this.hit) {
                this.playAnimation(this.IMAGES_HIT);
            } else if (this.danger) {
                this.playAnimation(this.IMAGES_DANGER);
            } else {
                this.playAnimation(this.IMAGES_SWIMMING);
            }
        }, 200);
    }

}

