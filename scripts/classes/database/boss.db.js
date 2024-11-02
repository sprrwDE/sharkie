/**
 * Class representing the data and assets related to the Boss character.
 */
class BossDB {
    /**
     * Background sound for the Boss.
     * @type {HTMLAudioElement}
     */
    sound = new Audio('./assets/sounds/boss.wav');

    /**
     * Sound effect played when the Boss dies.
     * @type {HTMLAudioElement}
     */
    death_sound = new Audio('./assets/sounds/boss_dying.wav');

    /**
     * Array of image paths for the Boss swimming animation.
     * @type {string[]}
     */
    IMAGES_SWIMMING = [
        './assets/imgs/2.Enemy/3 Final Enemy/2.floating/1.png',
        './assets/imgs/2.Enemy/3 Final Enemy/2.floating/2.png',
        './assets/imgs/2.Enemy/3 Final Enemy/2.floating/3.png',
        './assets/imgs/2.Enemy/3 Final Enemy/2.floating/4.png',
        './assets/imgs/2.Enemy/3 Final Enemy/2.floating/5.png',
        './assets/imgs/2.Enemy/3 Final Enemy/2.floating/6.png',
        './assets/imgs/2.Enemy/3 Final Enemy/2.floating/7.png',
        './assets/imgs/2.Enemy/3 Final Enemy/2.floating/8.png',
        './assets/imgs/2.Enemy/3 Final Enemy/2.floating/9.png',
        './assets/imgs/2.Enemy/3 Final Enemy/2.floating/10.png',
        './assets/imgs/2.Enemy/3 Final Enemy/2.floating/11.png',
        './assets/imgs/2.Enemy/3 Final Enemy/2.floating/12.png',
        './assets/imgs/2.Enemy/3 Final Enemy/2.floating/13.png'
    ];

    /**
     * Array of image paths for the Boss spawning/introducing animation.
     * @type {string[]}
     */
    IMAGES_SPAWNING = [
        './assets/imgs/2.Enemy/3 Final Enemy/1.Introduce/1.png',
        './assets/imgs/2.Enemy/3 Final Enemy/1.Introduce/2.png',
        './assets/imgs/2.Enemy/3 Final Enemy/1.Introduce/3.png',
        './assets/imgs/2.Enemy/3 Final Enemy/1.Introduce/4.png',
        './assets/imgs/2.Enemy/3 Final Enemy/1.Introduce/5.png',
        './assets/imgs/2.Enemy/3 Final Enemy/1.Introduce/6.png',
        './assets/imgs/2.Enemy/3 Final Enemy/1.Introduce/7.png',
        './assets/imgs/2.Enemy/3 Final Enemy/1.Introduce/8.png',
        './assets/imgs/2.Enemy/3 Final Enemy/1.Introduce/9.png',
        './assets/imgs/2.Enemy/3 Final Enemy/1.Introduce/10.png',
        './assets/imgs/2.Enemy/3 Final Enemy/2.floating/13.png'
    ];

    /**
     * Array of image paths for the Boss hurt animation.
     * @type {string[]}
     */
    IMAGES_HURT = [
        './assets/imgs/2.Enemy/3 Final Enemy/Hurt/1.png',
        './assets/imgs/2.Enemy/3 Final Enemy/Hurt/2.png',
        './assets/imgs/2.Enemy/3 Final Enemy/Hurt/3.png',
        './assets/imgs/2.Enemy/3 Final Enemy/Hurt/4.png'
    ];

    /**
     * Array of image paths for the Boss death animation.
     * @type {string[]}
     */
    IMAGES_DEAD = [
        './assets/imgs/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 6.png',
        './assets/imgs/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 7.png',
        './assets/imgs/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 8.png',
        './assets/imgs/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 9.png',
        './assets/imgs/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 10.png'
    ];

    /**
     * Array of image paths for the Boss attack/dash animation.
     * @type {string[]}
     */
    IMAGES_DASH = [
        './assets/imgs/2.Enemy/3 Final Enemy/Attack/1.png',
        './assets/imgs/2.Enemy/3 Final Enemy/Attack/2.png',
        './assets/imgs/2.Enemy/3 Final Enemy/Attack/3.png',
        './assets/imgs/2.Enemy/3 Final Enemy/Attack/4.png',
        './assets/imgs/2.Enemy/3 Final Enemy/Attack/5.png',
        './assets/imgs/2.Enemy/3 Final Enemy/Attack/6.png'
    ];

    /**
     * Array containing all image arrays for easy access or bulk loading.
     * @type {string[][]}
     */
    allImages = [
        this.IMAGES_SWIMMING,
        this.IMAGES_SPAWNING,
        this.IMAGES_HURT,
        this.IMAGES_DEAD,
        this.IMAGES_DASH
    ];
}