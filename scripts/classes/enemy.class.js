class Enemy extends MovableObject {
    hitboxColor = 'red';
    danger = false;
    hit = false;
    sound;
    dangerInterval;
    animationInterval;
    movingInterval;

    constructor() {
        super()
    }

    checkDanger() {
        this.dangerIntverval = setInterval(() => {
            this.danger = !this.danger;
        }, 5000 + (5000 * Math.random()));
    }

    animationLogic() {
        this.animationInterval = setInterval(() => {
            if (this.hit) {
                this.playAnimation(this.IMAGES_HIT);
                this.applyUpstream(2, 1)
            } else if (this.danger && !this.hit) {
                this.playAnimation(this.IMAGES_DANGER);
            } else {
                this.playAnimation(this.IMAGES_SWIMMING);
            }
        }, 200);
    }
}

