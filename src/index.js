console.log("Webpack is working!")

const MovingObject = require("./moving_object.js");

const canvasEl = document.getElementById('game-canvas');
const ctx = canvasEl.getContext('2d');

window.canvasEl = canvasEl;
window.ctx = ctx;



y = new MovingObject ({
  pos: [250,250],
  color: 'orange',
  radius: 100
})
y.draw(ctx)

x = new MovingObject ({
  pos: [200,200],
  color: 'blue',
  radius: 100
})
x.draw(ctx)

// canvasEl.height = window.innerHeight;
// canvasEl.width = window.innerWidth;
// new Game(
//   canvasEl.width,
//   canvasEl.height
// ).start(canvasEl);

window.MovingObject = MovingObject;
