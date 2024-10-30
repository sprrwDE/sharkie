class CharacterDB {
    finslap_sound = new Audio('./assets/sounds/finslap.wav')
    death_sound = new Audio('./assets/sounds/char_dying.wav')
    snore_sound = new Audio('./assets/sounds/snoring.wav')
    swim_sound = new Audio('./assets/sounds/swimming.wav')
    IMAGES_IDLE = [
        './assets/imgs/1.Sharkie/1.IDLE/1.png',
        './assets/imgs/1.Sharkie/1.IDLE/2.png',
        './assets/imgs/1.Sharkie/1.IDLE/3.png',
        './assets/imgs/1.Sharkie/1.IDLE/4.png',
        './assets/imgs/1.Sharkie/1.IDLE/5.png',
        './assets/imgs/1.Sharkie/1.IDLE/6.png',
        './assets/imgs/1.Sharkie/1.IDLE/7.png',
        './assets/imgs/1.Sharkie/1.IDLE/8.png',
        './assets/imgs/1.Sharkie/1.IDLE/9.png',
        './assets/imgs/1.Sharkie/1.IDLE/10.png',
        './assets/imgs/1.Sharkie/1.IDLE/11.png',
        './assets/imgs/1.Sharkie/1.IDLE/12.png',
        './assets/imgs/1.Sharkie/1.IDLE/13.png',
        './assets/imgs/1.Sharkie/1.IDLE/14.png',
        './assets/imgs/1.Sharkie/1.IDLE/15.png',
        './assets/imgs/1.Sharkie/1.IDLE/16.png',
        './assets/imgs/1.Sharkie/1.IDLE/17.png',
        './assets/imgs/1.Sharkie/1.IDLE/18.png'
    ];
    IMAGES_SNOOZE = [
        './assets/imgs/1.Sharkie/2.Long_IDLE/i1.png',
        './assets/imgs/1.Sharkie/2.Long_IDLE/I2.png',
        './assets/imgs/1.Sharkie/2.Long_IDLE/I3.png',
        './assets/imgs/1.Sharkie/2.Long_IDLE/I4.png',
        './assets/imgs/1.Sharkie/2.Long_IDLE/I5.png',
        './assets/imgs/1.Sharkie/2.Long_IDLE/I6.png',
        './assets/imgs/1.Sharkie/2.Long_IDLE/I7.png',
        './assets/imgs/1.Sharkie/2.Long_IDLE/I8.png',
        './assets/imgs/1.Sharkie/2.Long_IDLE/I9.png',
        './assets/imgs/1.Sharkie/2.Long_IDLE/I10.png',
        './assets/imgs/1.Sharkie/2.Long_IDLE/I11.png',
        './assets/imgs/1.Sharkie/2.Long_IDLE/I12.png',
        './assets/imgs/1.Sharkie/2.Long_IDLE/I13.png',
        './assets/imgs/1.Sharkie/2.Long_IDLE/I14.png'
    ];
    IMAGES_SWIM = [
        './assets/imgs/1.Sharkie/3.Swim/1.png',
        './assets/imgs/1.Sharkie/3.Swim/2.png',
        './assets/imgs/1.Sharkie/3.Swim/3.png',
        './assets/imgs/1.Sharkie/3.Swim/4.png',
        './assets/imgs/1.Sharkie/3.Swim/5.png',
        './assets/imgs/1.Sharkie/3.Swim/6.png'
    ]
    IMAGES_FINSLAP = [
        './assets/imgs/1.Sharkie/4.Attack/Fin slap/1.png',
        './assets/imgs/1.Sharkie/4.Attack/Fin slap/2.png',
        './assets/imgs/1.Sharkie/4.Attack/Fin slap/3.png',
        './assets/imgs/1.Sharkie/4.Attack/Fin slap/4.png',
        './assets/imgs/1.Sharkie/4.Attack/Fin slap/5.png',
        './assets/imgs/1.Sharkie/4.Attack/Fin slap/6.png',
        './assets/imgs/1.Sharkie/4.Attack/Fin slap/7.png',
        './assets/imgs/1.Sharkie/4.Attack/Fin slap/8.png'
    ]
    IMAGES_SHOOTING = [
        './assets/imgs/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/1.png',
        './assets/imgs/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/2.png',
        './assets/imgs/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/3.png',
        './assets/imgs/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/4.png',
        './assets/imgs/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/5.png',
        './assets/imgs/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/6.png',
        './assets/imgs/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/7.png',
        './assets/imgs/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/8.png'
    ];
    IMAGES_POISONBUBBLE = [
        './assets/imgs/1.Sharkie/4.Attack/Bubble trap/For Whale/1.png',
        './assets/imgs/1.Sharkie/4.Attack/Bubble trap/For Whale/2.png',
        './assets/imgs/1.Sharkie/4.Attack/Bubble trap/For Whale/3.png',
        './assets/imgs/1.Sharkie/4.Attack/Bubble trap/For Whale/4.png',
        './assets/imgs/1.Sharkie/4.Attack/Bubble trap/For Whale/5.png',
        './assets/imgs/1.Sharkie/4.Attack/Bubble trap/For Whale/6.png',
        './assets/imgs/1.Sharkie/4.Attack/Bubble trap/For Whale/7.png',
        './assets/imgs/1.Sharkie/4.Attack/Bubble trap/For Whale/8.png'
    ]
    IMAGES_POISONED = [
        './assets/imgs/1.Sharkie/5.Hurt/1.Poisoned/1.png',
        './assets/imgs/1.Sharkie/5.Hurt/1.Poisoned/2.png',
        './assets/imgs/1.Sharkie/5.Hurt/1.Poisoned/3.png',
        './assets/imgs/1.Sharkie/5.Hurt/1.Poisoned/4.png',
        './assets/imgs/1.Sharkie/5.Hurt/1.Poisoned/5.png'
    ]
    IMAGES_SHOCK = [
        './assets/imgs/1.Sharkie/5.Hurt/2.Electric shock/1.png',
        './assets/imgs/1.Sharkie/5.Hurt/2.Electric shock/2.png',
        './assets/imgs/1.Sharkie/5.Hurt/2.Electric shock/3.png',
    ]
    IMAGES_DEAD = [ 
        './assets/imgs/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00000.png',
        './assets/imgs/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00001.png',
        './assets/imgs/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00002.png',
        './assets/imgs/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00003.png',
        './assets/imgs/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00004.png',
        './assets/imgs/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00005.png',
        './assets/imgs/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00006.png',
        './assets/imgs/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00007.png',
        './assets/imgs/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00008.png',
        './assets/imgs/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00009.png',
        './assets/imgs/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00010.png',
        './assets/imgs/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00011.png'
    ]
    IMAGES_DEAD_SHOCK = [
        './assets/imgs/1.Sharkie/6.dead/2.Electro_shock/1.png',
        './assets/imgs/1.Sharkie/6.dead/2.Electro_shock/2.png',
        './assets/imgs/1.Sharkie/6.dead/2.Electro_shock/3.png',
        './assets/imgs/1.Sharkie/6.dead/2.Electro_shock/4.png',
        './assets/imgs/1.Sharkie/6.dead/2.Electro_shock/5.png',
        './assets/imgs/1.Sharkie/6.dead/2.Electro_shock/6.png',
        './assets/imgs/1.Sharkie/6.dead/2.Electro_shock/7.png',
        './assets/imgs/1.Sharkie/6.dead/2.Electro_shock/8.png',
        './assets/imgs/1.Sharkie/6.dead/2.Electro_shock/9.png',
        './assets/imgs/1.Sharkie/6.dead/2.Electro_shock/10.png'
    ];
    allImages = [
        this.IMAGES_IDLE,
        this.IMAGES_SNOOZE,
        this.IMAGES_SWIM,
        this.IMAGES_FINSLAP,
        this.IMAGES_SHOOTING,
        this.IMAGES_POISONBUBBLE,
        this.IMAGES_POISONED,
        this.IMAGES_SHOCK,
        this.IMAGES_DEAD_SHOCK,
        this.IMAGES_DEAD
    ]
}   