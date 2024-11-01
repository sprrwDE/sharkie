class Endboss extends MovableObject {
  db;
  offset = {
    left: 20,
    right: 20,
    top: 160,
    bottom: 120,
  };
  hitboxColor = "red";
  type = "endboss";
  immune = false;
  contact = false;
  firstContact = false;
  index = 0;
  mirror = false;
  visible = false;
  dangerRange = 3000;
  moveSpeed = 0.8;
  world;
  contactInterval;
  sound;
  imageIndex = 0;

  constructor(world) {
    super().loadImage("./assets/imgs/2.Enemy/3 Final Enemy/2.floating/1.png");
    this.db = new BossDB();
    this.sound = this.db.sound;
    this.loadImageCaches(this.db.allImages);
    this.world = world;
    this.y = 0;
    this.x = 700 * 3;
    this.height = 467;
    this.width = 400;
    this.checkEndbossContact();
    this.animate();
  }

  animate() {
    this.animationLogic();
    this.movementLogic();
  }

  animationLogic() {
    setInterval(() => {
      if (this.contact && !this.firstContact) {
        this.playAnimation(this.db.IMAGES_SPAWNING);
        this.introduceEndboss();
      } else if (this.immune) {
        this.playAnimation(this.db.IMAGES_HURT);
      } else if (this.health <= 0) {
        this.playAnimation(this.db.IMAGES_DEAD);
        this.playSoundBoss(this.db.death_sound);
      } else if (this.danger) {
        this.playAnimation(this.db.IMAGES_DASH);
      } else if (this.firstContact) {
        this.playAnimation(this.db.IMAGES_SWIMMING);
      }
    }, 100);
  }

  introduceEndboss() {
    if (this.imageIndex < this.db.IMAGES_SPAWNING.length) {
    } else if (this.imageIndex > this.db.IMAGES_SPAWNING.length) {
      this.imageIndex = 0;
    } else if (this.imageIndex === this.db.IMAGES_SPAWNING.length) {
      this.firstContact = true;
    }
    this.imageIndex++;
  }

  endbossMove() {
    if (
      this.world.character.x + this.world.character.width <
      this.x + this.width / 2
    ) {
      this.mirror = false;
      this.moveLeft();
    } else {
      this.mirror = true;
      this.moveRight();
    }
  }

  movementLogic() {
    setInterval(() => {
      if (this.contact && !this.danger) {
        this.moveSpeed = 1;
        this.endbossMove();
        console.log("dash over");
      } else if (this.contact && this.danger) {
        this.endbossAttack();
      }
    }, 1000 / 60);
  }

  endbossAttack() {
    this.moveSpeed = 1.5;
    if (this.world.character.x + this.world.character.width + this.width / 2) {
      this.mirror = false;
      this.bossDash();
    } else {
      this.mirror = true;
      this.bossDashRight();
    }
    console.log("dashed");
  }

  checkEndbossContact() {
    this.contactInterval = setInterval(() => {
      if (
        this.world.character.x + this.world.character.width > this.x - 240 &&
        !this.contact
      ) {
        this.spawnEndboss();
      }
    }, 200);
  }

  spawnEndboss() {
    this.checkDanger(this.dangerRange);
    this.contact = true;
    this.visible = true;
  }

  playSoundBoss(soundelement) {
    if (!mute) {
      soundelement.play();
    }
  }

  // mittelpunkt in mitte mit transform bei mirror
  // move up logik??
}
