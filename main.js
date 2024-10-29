import { GameLoop } from "./src/GameLoop";
import { resources } from "./src/Resource";
import { Sprite } from "./src/Sprite";
import { Vector2 } from "./src/Vector2";
import "./style.css";

/**
 * @type {HTMLCanvasElement} - Our Game Canvas
 */
const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");

const treeSprite = new Sprite({
  resource: resources.images.tree,
  frameSize: new Vector2(64, 80),
});

const hero = new Sprite({
  resource: resources.images.hero,
  frameSize: new Vector2(32, 32),
  hFrames: 6,
  vFrames: 10,
  frame: 1,
});

const heroPos = new Vector2(16 * 5, 16 * 1);

const update = () => {
  // Updating entities in the game
};

const draw = () => {
  const heroOffset = new Vector2(-8, -21);
  const heroPosX = heroPos.x + heroOffset.x;
  const heroPosY = heroPos.y + heroOffset.y;
  treeSprite.drawImage(ctx, 0, 0);
  hero.drawImage(ctx, heroPosX, heroPosY);
};

const gameLoop = new GameLoop(update, draw);

gameLoop.start();
