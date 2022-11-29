console.log("Webpack is working!")

const MovingObject = require("./moving_object.js");

// const canvasEl = document.getElementsById("game-canvas")[0];
// canvasEl.height = window.innerHeight;
// canvasEl.width = window.innerWidth;
// new Game(
//   canvasEl.width,
//   canvasEl.height
// ).start(canvasEl);

window.MovingObject = MovingObject;
