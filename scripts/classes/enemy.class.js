class Enemy extends MovableObject {
    hitboxColor = 'red';
    danger = false;
    hit = false;

    constructor() {
        super()
    }

    checkDanger() {
        setInterval(() => {
            this.danger = !this.danger;
        }, 5000 + (5000 * Math.random()));
    }

}

