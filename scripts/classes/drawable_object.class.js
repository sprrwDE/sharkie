/**
 * Represents a drawable object with basic properties like position, dimensions, 
 * and the ability to load and cache images. This class also includes optional 
 * hitbox functionality for collision purposes.
 */
class DrawableObject {
    /**
     * @type {number} x - The x-coordinate of the object.
     * @type {number} y - The y-coordinate of the object.
     * @type {number} height - The height of the object.
     * @type {number} width - The width of the object.
     * @type {Image} img - The current image of the object.
     * @type {number} currentImage - The index of the current image in the animation.
     * @type {Object.<string, Image>} imgCache - A cache of images for faster access.
     * @type {boolean} mirror - Determines if the object should be mirrored.
     * @type {number} totalImages - Total number of images loaded for the object.
     * @type {boolean} visible - Visibility status of the object.
     * @type {Object} offset - Offset values for the hitbox (left, right, top, bottom).
     */
    x = 100;
    y = 200;
    height = 200;
    width = 200;
    img;
    currentImage = 0;
    imgCache = {};
    mirror = false;
    totalImages = 0;
    visible = true;
  
    offset = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    };
  
    /**
     * Loads a single image for the object.
     * @param {string} path - Path to the image file.
     */
    loadImage(path) {
      this.img = new Image();
      this.img.src = path;
    }
  
    /**
     * Loads multiple images for the object, caching them for faster access.
     * Also tracks the progress of image loading.
     * @param {string[]} array - Array of image paths.
     */
    loadImages(array) {
      array.forEach((path) => {
        let img = new Image();
        img.src = path;
        img.onload = () => {
          loadedImages++;
          if (loadedImages === allImages) {
            loadingComplete = true;
          }
        };
        this.imgCache[path] = img;
      });
    }
  
    /**
     * Loads a set of image caches for various animation states.
     * @param {Array<string[]>} cache - Array of arrays, each containing paths to images for different animations.
     */
    loadImageCaches(cache) {
      cache.forEach((array) => {
        this.loadImages(array);
      });
    }
  
    /**
     * Draws the object on the provided canvas context.
     * @param {CanvasRenderingContext2D} ctx - The canvas context to draw on.
     */
    draw(ctx) {
      try {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
      } catch (error) {
        console.warn("Error loading Image", error);
        console.log("broken img src", this.img.src);
      }
    }
  
    /**
     * Draws the hitbox around the object for debugging and collision detection.
     * Only applicable for specific subclasses like Character, PufferFishGreen, JellyFishYellow, and JellyFishPurple.
     * @param {CanvasRenderingContext2D} ctx - The canvas context to draw on.
     */
    hitbox(ctx) {
      if (
        this instanceof Character ||
        this instanceof PufferFishGreen ||
        this instanceof JellyFishYellow ||
        this instanceof JellyFishPurple
      ) {
        ctx.beginPath();
        ctx.lineWidth = "3";
        ctx.strokeStyle = this.hitboxColor;
        ctx.rect(
          this.x + this.offset["left"],
          this.y + this.offset["top"],
          this.width - this.offset["right"],
          this.height - this.offset["bottom"]
        );
        ctx.stroke();
      }
    }
  }
  