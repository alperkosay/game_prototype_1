class Resources {
  constructor() {
    // Everything we plan to download
    this.toLoad = {
      tree: "/sprites/outdoor-decoration/Oak_Tree.png",
      hero: "/sprites/Player/Player.png",
    };

    // A bucket to keep all of our images
    this.images = {};

    // Load each image
    Object.keys(this.toLoad).forEach((key) => {
      const img = new Image();
      img.src = this.toLoad[key];
      this.images[key] = {
        image: img,
        isLoaded: false,
      };

      img.onload = () => {
        this.images[key].isLoaded = true;
      };
    });
  }
}

export const resources = new Resources();
