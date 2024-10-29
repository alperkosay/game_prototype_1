import { GameLoop } from "./src/GameLoop";
import { gridCells } from "./src/helpers/grid";
import { moveTowards } from "./src/helpers/moveTowards";
import { Input, KEY } from "./src/Input";
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
  position: new Vector2(gridCells(6), gridCells(3)),
});

const input = new Input();

const heroDestinationPosition = hero.position.duplicate();

const update = () => {
  // Updating entities in the game

  const distance = moveTowards(hero, heroDestinationPosition, 1);
  const hasArrived = distance <= 1;
  if (hasArrived) {
    tryMove();
  }
};

const tryMove = () => {
  if (!input.direction) {
    return;
  }

  let nextX = heroDestinationPosition.x;
  let nextY = heroDestinationPosition.y;
  const gridSize = 16;

  if (input.direction === KEY.DOWN) {
    nextY += gridSize;
    hero.frame = 0;
  }

  if (input.direction === KEY.UP) {
    nextY -= gridSize;

    hero.frame = 14;
  }

  if (input.direction === KEY.RIGHT) {
    nextX += gridSize;
    hero.frame = 7;
    hero.setDirection(KEY.RIGHT);
  }

  if (input.direction === KEY.LEFT) {
    nextX -= gridSize;

    hero.frame = 7;
    hero.setDirection(KEY.LEFT);
  }

  //TODO: Check if that space is free
  console.log(nextX, nextY);

  heroDestinationPosition.x = nextX;
  heroDestinationPosition.y = nextY;
};

const draw = () => {
  const heroOffset = new Vector2(-8, -21);
  const heroPosX = hero.position.x + heroOffset.x;
  const heroPosY = hero.position.y + heroOffset.y;
  treeSprite.drawImage(ctx, 0, 0);
  hero.drawImage(ctx, heroPosX, heroPosY);
};

const gameLoop = new GameLoop(update, draw);

gameLoop.start();
