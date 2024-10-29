export const KEY = {
  LEFT: "LEFT",
  RIGHT: "RIGHT",
  UP: "UP",
  DOWN: "DOWN",
};

export class Input {
  constructor() {
    this.heldDirections = [];
    document.addEventListener("keydown", (e) => {
      if (e.code === "ArrowUp" || e.code === "KeyW") {
        this.onArrowPressed(KEY.UP);
      }

      if (e.code === "ArrowDown" || e.code === "KeyS") {
        this.onArrowPressed(KEY.DOWN);
      }

      if (e.code === "ArrowLeft" || e.code === "KeyA") {
        this.onArrowPressed(KEY.LEFT);
      }

      if (e.code === "ArrowRight" || e.code === "KeyD") {
        this.onArrowPressed(KEY.RIGHT);
      }
    });

    document.addEventListener("keyup", (e) => {
      if (e.code === "ArrowUp" || e.code === "KeyW") {
        this.onArrowReleased(KEY.UP);
      }

      if (e.code === "ArrowDown" || e.code === "KeyS") {
        this.onArrowReleased(KEY.DOWN);
      }

      if (e.code === "ArrowLeft" || e.code === "KeyA") {
        this.onArrowReleased(KEY.LEFT);
      }

      if (e.code === "ArrowRight" || e.code === "KeyD") {
        this.onArrowReleased(KEY.RIGHT);
      }
    });
  }

  get direction() {
    return this.heldDirections[0];
  }

  onArrowPressed(direction) {
    if (this.heldDirections.indexOf(direction) === -1) {
      this.heldDirections.unshift(direction);
    }
  }

  onArrowReleased(direction) {
    const index = this.heldDirections.indexOf(direction);

    if (index === -1) {
      return;
    }

    // Remove this key from the list
    this.heldDirections.splice(index, 1);
  }
}
