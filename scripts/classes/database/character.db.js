/**
 * Database class containing assets and sound files for the Character.
 * Includes image paths for various animations and sound effects.
 */
class CharacterDB {
    /**
     * Sound effect for the character's finslap attack.
     * @type {HTMLAudioElement}
     */
    finslap_sound = new Audio('./assets/sounds/finslap.wav');

    /**
     * Sound effect for the character's death.
     * @type {HTMLAudioElement}
     */
    death_sound = new Audio('./assets/sounds/char_dying.wav');

    /**
     * Sound effect for the character snoring when idle.
     * @type {HTMLAudioElement}
     */
    snore_sound = new Audio('./assets/sounds/snoring.wav');

    /**
     * Sound effect for the character swimming.
     * @type {HTMLAudioElement}
     */
    swim_sound = new Audio('./assets/sounds/swimming.wav');

    /**
     * Array of image paths for the character idle animation.
     * @type {string[]}
     */
    IMAGES_IDLE = [
        './assets/imgs/1.Sharkie/1.IDLE/1.png',
        './assets/imgs/1.Sharkie/1.IDLE/2.png',
        './assets/imgs/1.Sharkie/1.IDLE/3.png',
        './assets/imgs/1.Sharkie/1.IDLE/4.png',
        //...
        './assets/imgs/1.Sharkie/1.IDLE/18.png'
    ];

    /**
     * Array of image paths for the character snooze animation.
     * @type {string[]}
     */
    IMAGES_SNOOZE = [
        './assets/imgs/1.Sharkie/2.Long_IDLE/i1.png',
        './assets/imgs/1.Sharkie/2.Long_IDLE/I2.png',
        //...
        './assets/imgs/1.Sharkie/2.Long_IDLE/I14.png'
    ];

    /**
     * Array of image paths for the character swimming animation.
     * @type {string[]}
     */
    IMAGES_SWIM = [
        './assets/imgs/1.Sharkie/3.Swim/1.png',
        './assets/imgs/1.Sharkie/3.Swim/2.png',
        //...
        './assets/imgs/1.Sharkie/3.Swim/6.png'
    ];

    /**
     * Array of image paths for the character finslap animation.
     * @type {string[]}
     */
    IMAGES_FINSLAP = [
        './assets/imgs/1.Sharkie/4.Attack/Fin slap/1.png',
        //...
        './assets/imgs/1.Sharkie/4.Attack/Fin slap/8.png'
    ];

    /**
     * Array of image paths for the character shooting bubble animation.
     * @type {string[]}
     */
    IMAGES_SHOOTING = [
        './assets/imgs/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/1.png',
        //...
        './assets/imgs/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/8.png'
    ];

    /**
     * Array of image paths for the character's poisoned bubble attack.
     * @type {string[]}
     */
    IMAGES_POISONBUBBLE = [
        './assets/imgs/1.Sharkie/4.Attack/Bubble trap/For Whale/1.png',
        //...
        './assets/imgs/1.Sharkie/4.Attack/Bubble trap/For Whale/8.png'
    ];

    /**
     * Array of image paths for the character poisoned hurt animation.
     * @type {string[]}
     */
    IMAGES_POISONED = [
        './assets/imgs/1.Sharkie/5.Hurt/1.Poisoned/1.png',
        //...
        './assets/imgs/1.Sharkie/5.Hurt/1.Poisoned/5.png'
    ];

    /**
     * Array of image paths for the character electric shock animation.
     * @type {string[]}
     */
    IMAGES_SHOCK = [
        './assets/imgs/1.Sharkie/5.Hurt/2.Electric shock/1.png',
        //...
        './assets/imgs/1.Sharkie/5.Hurt/2.Electric shock/3.png'
    ];

    /**
     * Array of image paths for the character death by poison animation.
     * @type {string[]}
     */
    IMAGES_DEAD = [
        './assets/imgs/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00000.png',
        //...
        './assets/imgs/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00011.png'
    ];

    /**
     * Array of image paths for the character death by electric shock animation.
     * @type {string[]}
     */
    IMAGES_DEAD_SHOCK = [
        './assets/imgs/1.Sharkie/6.dead/2.Electro_shock/1.png',
        //...
        './assets/imgs/1.Sharkie/6.dead/2.Electro_shock/10.png'
    ];

    /**
     * Collection of all character image arrays for preloading.
     * @type {string[][]}
     */
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
    ];
}