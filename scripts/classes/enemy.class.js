class Enemy extends MovableObject {
  hitboxColor = "red";
  danger = false;
  hit = false;
  sound;
  dangerInterval = null;
  animationInterval = null;
  movingInterval = null;
  damage = 5;
  dangerRange = 5000;

  constructor() {
    super();
  }

  animationLogic() {
    this.animationInterval = setInterval(() => {
      if (this.hit) {
        this.playAnimation(this.IMAGES_HIT);
        this.upstreamLogic();
      } else if (this.danger && !this.hit) {
        this.playAnimation(this.IMAGES_DANGER);
      } else {
        this.playAnimation(this.IMAGES_SWIMMING);
      }
    }, 200);
  }

  upstreamLogic() {
    if (!this.upstream) {
      this.applyUpstream(2, 1);
    }
    setTimeout(() => {
      if (this.upstream) {
        clearInterval(this.upstream);
        console.log("Upstream interval cleared:", this.upstream);
        this.upstream = null;
      } else {
        console.log("No upstream interval to clear.");
      }
    }, 1200);
  }
}
