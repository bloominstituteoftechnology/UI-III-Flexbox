window.addEventListener("load", function() {

//Game Constants
  var GAME_WIDTH = 700;
  var GAME_HEIGHT = 700;
  var CONTROL_CANVAS_HEIGHT = 100;
  var BLOCK_WIDTH = 100;
  var BLOCK_HEIGHT = 30;
  var CONTROL_BOX_WIDTH = 120;
  var CONTROL_BOX_HEIGHT = 75;
  var CONTROL_BOX_Y = 10;
  var CONTROL_BOX_X = 300;
  var MAX_ROW_COUNT = 5;
  var COLUMN_COUNT = 5;

//game states
  var startScreen = true;
  var gameScreen = false;
  var gameOverScreen = false;
  var youWinScreen = false;

//game controller constructor
function GameController(){
  this.lives = 3;
  this.score = 0;
  this.level = 1;
  this.blocksDestroyed = 0;
  this.maxBlocks = this.level * COLUMN_COUNT;
}
//player constructor
function Paddle(){
  this.x = 10;
  this.y = 600;
  this.speedX = 2;
  this.width = 150;
  this.height = 30;
  this.speed = 20;
  this.moveLeft = false;
  this.moveRight= false;
}

//ball constructor
function Ball(){
  this.x = 0;
  this.y = 0;
  this.speedX = 0;
  this.speedY = 0;
  this.startSpeed = 10;
  this.maxSpeed = 30;
  this.width = 20;
  this.height = 20;
  this.isDocked = true;
}

//blocks constructor
function Block(posX, posY){
  this.x = posX;
  this.y = posY;
  this.width = BLOCK_WIDTH;
  this.height = BLOCK_HEIGHT;
  this.health = 1;
}

var gameController = new GameController();
var paddle = new Paddle();
var ball = new Ball();
var blockController = [];

function init() {

  gameController.maxBlocks = gameController.level * COLUMN_COUNT;

  ball.isDocked = true;
  ball.x = paddle.x+((paddle.width/2)+ball.width);
  ball.y = paddle.y-ball.height-(ball.height/2);
  ball.speedX = 0;
  ball.speedY = 0;

  for(var i=0;i<COLUMN_COUNT;i++){
    for(var n=0;n<gameController.level;n++){
      blockController.push(
        new Block(
          80+(i*(BLOCK_WIDTH+10)),100+(n*(BLOCK_HEIGHT+10))
        )
      );
    }
  }

}

//Input Controller
var keys = [];
function keyPressed(key){
  var code = key.keyCode;
  keys[code] = true;

  if(startScreen){
      startScreen = false;
      gameScreen = true;
      init();
  }
  if(gameOverScreen){
     window.location = "";
  }
  if(youWinScreen){
     window.location = "";
  }

  if(gameScreen){
    if(keys[37]){
      //paddle.x-=paddle.speed;
      paddle.moveLeft = true;
    }
    if(keys[39]){
      //paddle.x+=paddle.speed;
      paddle.moveRight = true;
    }
    if(keys[38]){
      if(ball.isDocked){
        ball.isDocked = false;
        ball.speedX = ball.startSpeed;
        ball.speedY = -ball.startSpeed;
      }
    }
    key.preventDefault();
  }
}

function keyReleased(key){
  var code = key.keyCode;
  keys[code] = false;
  if(code==37){
    paddle.moveLeft = false;
  }
  if(code==39){
    paddle.moveRight = false;
  }
}

function clickScreen(event){
  //var x = event.clientX - controlCanvas.offsetLeft;
  //var y = event.clientY - controlCanvas.offsetTop;

var rect = controlCanvas.getBoundingClientRect();
var sx = controlCanvas.scrollWidth / GAME_WIDTH;
var sy = controlCanvas.scrollHeight / CONTROL_CANVAS_HEIGHT;

var x = (event.clientX - rect.left)/ sx;
var y = (event.clientY - rect.top)/ sy;

  //alert(x);

if(
  x>(CONTROL_BOX_X+CONTROL_BOX_WIDTH+10) &&
  x<(CONTROL_BOX_X+CONTROL_BOX_WIDTH+10) + CONTROL_BOX_WIDTH &&
  y > CONTROL_BOX_Y &&
  y < CONTROL_BOX_Y + CONTROL_BOX_HEIGHT)
  {
    paddle.moveRight = true;
  }
if(
  x>CONTROL_BOX_X &&
  x<CONTROL_BOX_X + CONTROL_BOX_WIDTH &&
  y > CONTROL_BOX_Y &&
  y < CONTROL_BOX_Y + CONTROL_BOX_HEIGHT)
  {
    paddle.moveLeft = true;
  }
if(
  x>CONTROL_BOX_X + (2*(CONTROL_BOX_WIDTH+10)) &&
  x<CONTROL_BOX_X + (2*(CONTROL_BOX_WIDTH+10)) + CONTROL_BOX_WIDTH &&
  y > CONTROL_BOX_Y &&
  y < CONTROL_BOX_Y + CONTROL_BOX_HEIGHT)
    {
    ball.isDocked = false;
    ball.speedX = ball.startSpeed;
    ball.speedY = -ball.startSpeed;
    }
}

function clickReleased(event){
  paddle.moveLeft = false;
  paddle.moveRight = false;
}

function touchScreen(event){
  //var x = event.clientX - controlCanvas.offsetLeft;
  //var y = event.clientY - controlCanvas.offsetTop;

var rect = controlCanvas.getBoundingClientRect();
var sx = controlCanvas.scrollWidth / GAME_WIDTH;
var sy = controlCanvas.scrollHeight / CONTROL_CANVAS_HEIGHT;

var x = (event.touches[0].clientX - rect.left)/ sx;
var y = (event.touches[0].clientY - rect.top)/ sy;

  //alert(x);

if(
  x>(CONTROL_BOX_X+CONTROL_BOX_WIDTH+10) &&
  x<(CONTROL_BOX_X+CONTROL_BOX_WIDTH+10) + CONTROL_BOX_WIDTH &&
  y > CONTROL_BOX_Y &&
  y < CONTROL_BOX_Y + CONTROL_BOX_HEIGHT)
  {
    paddle.moveRight = true;
  }
if(
  x>CONTROL_BOX_X &&
  x<CONTROL_BOX_X + CONTROL_BOX_WIDTH &&
  y > CONTROL_BOX_Y &&
  y < CONTROL_BOX_Y + CONTROL_BOX_HEIGHT)
  {
    paddle.moveLeft = true;
  }
if(
  x>CONTROL_BOX_X + (2*(CONTROL_BOX_WIDTH+10)) &&
  x<CONTROL_BOX_X + (2*(CONTROL_BOX_WIDTH+10)) + CONTROL_BOX_WIDTH &&
  y > CONTROL_BOX_Y &&
  y < CONTROL_BOX_Y + CONTROL_BOX_HEIGHT)
    {
    ball.isDocked = false;
    ball.speedX = ball.startSpeed;
    ball.speedY = -ball.startSpeed;
    }
}

function touchReleased(event){
  paddle.moveLeft = false;
  paddle.moveRight = false;
}

function mouseAny(event){
  if(startScreen){
      startScreen = false;
      gameScreen = true;
      init();
  }
  if(gameOverScreen){
     window.location = "";
  }
  if(youWinScreen){
     window.location = "";
  }
}
function touchAny(event){
  if(startScreen){
      startScreen = false;
      gameScreen = true;
      init();
  }
  if(gameOverScreen){
     window.location = "";
  }
  if(youWinScreen){
     window.location = "";
  }
}


window.addEventListener('keydown', keyPressed, false);
window.addEventListener('keyup', keyReleased, false);

window.addEventListener('mousedown', mouseAny, false);
window.addEventListener('touchstart', touchAny, false);

controlCanvas.addEventListener('mousedown', clickScreen, false);
controlCanvas.addEventListener('mouseup', clickReleased, false);

controlCanvas.addEventListener('touchstart', touchScreen, false);
controlCanvas.addEventListener('touchend', touchReleased, false);

var canvas = document.getElementById('gameCanvas');
var ctx = canvas.getContext("2d");

var contCanvas = document.getElementById('controlCanvas');
var contCtx = contCanvas.getContext("2d");

function update() {

  if(gameScreen){

    if(gameController.lives <=0)
    {
      gameScreen = false;
      gameOverScreen = true;
    }

    if(gameController.blocksDestroyed >=gameController.maxBlocks)
    {
      if(gameController.level>MAX_ROW_COUNT){
        gameScreen = false;
        youWinScreen = true;
      }
      else{
        gameController.level++;
        gameController.blocksDestroyed =0;
        init();
      }
      
    }

    //Paddle
    if(paddle.moveLeft)
      paddle.x-=paddle.speed;
    if(paddle.moveRight)
      paddle.x+=paddle.speed;
    if(paddle.x<=0)
      paddle.x = 0;
    if(paddle.x>=GAME_WIDTH-paddle.width)
      paddle.x = GAME_WIDTH-paddle.width;

    //Ball
    if(ball.isDocked){
      ball.x = paddle.x+((paddle.width/2)+ball.width);
      ball.y = paddle.y-ball.height-(ball.height/2);
      ball.speedX = 0;
      ball.speedY = 0;
    }
    else {
        ball.x+=ball.speedX;
        ball.y+=ball.speedY;
    }

    if(ball.speedX>=ball.maxSpeed)
      ball.speedX = ball.maxSpeed;
    if(ball.speedX<=-ball.maxSpeed)
      ball.speedX = -ball.maxSpeed;

  //collision with paddle
    if(checkCollision(ball,paddle)){


      if(ball.x <= paddle.x+(paddle.width/2) && ball.speedX <=0){
          ball.speedX -= 4;
      }

      if(ball.x <= paddle.x+(paddle.width/2) && ball.speedX >0){
        /*ball.speedX = -ball.speedX;
        if(ball.speedX<-12){
          ball.speedX+=2;
        }
        else {
          ball.speedX = -10;
        }*/
        ball.speedX -=2
      }

      if(ball.x >= paddle.x+(paddle.width/2) && ball.speedX <=0){
        /*ball.speedX = -ball.speedX;
        if(ball.speedX>12){
          ball.speedX-=2;
        }
        else {
          ball.speedX = 10;
        }*/
        ball.speedX+=2;
      }

      if(ball.x >= paddle.x+(paddle.width/2) && ball.speedX >=0){
        ball.speedX+=4;
      }

      if(ball.y+ball.height>paddle.y && ball.x<= paddle.x){
        ball.speedX = -ball.speedX;
      }
      else if(ball.y+ball.height>paddle.y && ball.x+ball.width>= paddle.x+paddle.width){
        ball.speedX = -ball.speedX;
      }
      else {
        ball.y = paddle.y-ball.height-1;
        ball.speedY = -ball.speedY;
        }
    }

    //collision with Blocks
    blockController.forEach(function(element, index){
      if(element.health>0){
        if(checkCollision(ball,element)){
          element.health --;
          gameController.blocksDestroyed++;
          gameController.score += 100;
          if(ball.x<element.x && ball.y>element.y-ball.height && ball.y>(element.y-element.height))
            ball.speedX = -ball.speedX;
          else if(ball.x>=element.x+element.width && ball.y>element.y-ball.height && ball.y>(element.y-element.height))
            ball.speedX = -ball.speedX;
          else {
            ball.speedY = -ball.speedY;
          }
        }
      }
    })

    if(ball.x<=0){
      ball.x = 0;
      ball.speedX = -ball.speedX;
    }
    if(ball.x>=GAME_WIDTH-ball.width){
      ball.x = GAME_WIDTH-ball.width;
      ball.speedX = -ball.speedX;
    }
    if(ball.y<=0){
      ball.y = 0;
      ball.speedY = -ball.speedY;
    }
    if(ball.y>=GAME_HEIGHT-ball.height){
      ball.isDocked=true;
      gameController.lives -=1;
    }
}


}

function draw() {
  ctx.clearRect(0,0,GAME_WIDTH,GAME_HEIGHT);
  contCtx.clearRect(0,0,GAME_WIDTH,GAME_HEIGHT);

  contCtx.font = "20px Arial";
  contCtx.fillText("Lives: " + gameController.lives, 10, 40);
  contCtx.fillText("Score: " + gameController.score, 10, 80);

  contCtx.fillStyle = "#00FF00";
  contCtx.fillRect(CONTROL_BOX_X, CONTROL_BOX_Y, CONTROL_BOX_WIDTH, CONTROL_BOX_HEIGHT);
  contCtx.fillRect(CONTROL_BOX_X + CONTROL_BOX_WIDTH + 10, CONTROL_BOX_Y, CONTROL_BOX_WIDTH, CONTROL_BOX_HEIGHT);
  contCtx.fillRect(CONTROL_BOX_X + (2*(CONTROL_BOX_WIDTH+10)) , CONTROL_BOX_Y, CONTROL_BOX_WIDTH, CONTROL_BOX_HEIGHT);

  contCtx.font = "50px Arial";
  contCtx.fillStyle = "#FF0000";
  contCtx.fillText("<", 345, 65);
  contCtx.fillText(">", 475, 65);
  contCtx.font = "25px Arial";
  //ctx.fillStyle = "#FF0000";
  contCtx.fillText("LAUNCH", 570, 55);



  if (startScreen) {
    ctx.font = "30px Arial";
    ctx.fillText("Brick Breaker", 10, 50);
    ctx.fillText("Use The Left and Right arrows to move", 10, 100);
    ctx.fillText("Use the Up Arrow to launch the ball", 10, 150);
    ctx.fillText("Press Any Key to start", 10, 200);

  }
  if (gameOverScreen) {
    ctx.font = "30px Arial";
    ctx.fillText("GAME OVER", 10, 50);
  }
  if (youWinScreen) {
    ctx.font = "30px Arial";
    ctx.fillText("You Win", 10, 50);
    ctx.fillText("Your Score: " + gameController.score, 10, 150);
    ctx.fillText("Lives Left: " + gameController.lives, 10, 100);

  }

  if(gameScreen){
    //Paddle
    ctx.fillStyle = "#00FF00";
    ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);

    //Ball
    ctx.fillStyle = "#3333FF";
    ctx.fillRect(ball.x, ball.y, ball.width, ball.height);

    //Blocks
    ctx.fillStyle = "rgb(128,128,0)";
    blockController.forEach(function(element, index){
        if(element.health>0)
            ctx.fillRect(element.x, element.y, element.width, element.height);
          });
    }

}

function step() {
  update();
  draw();

  window.requestAnimationFrame(step);
}

function checkCollision(obj1,obj2){
  /*var checkWidth = Math.abs(obj1.x - obj2.x) <= Math.max(obj1.width, obj2.width);
  var checkHeight = Math.abs(obj1.y - obj2.y) <= Math.max(obj1.height, obj2.height);
  return checkWidth && checkHeight;*/
  return !(
		( ( obj1.y + obj1.height ) < ( obj2.y ) ) ||
		( obj1.y > ( obj2.y + obj2.height ) ) ||
		( ( obj1.x + obj1.width ) < obj2.x ) ||
		( obj1.x > ( obj2.x + obj2.width ) ));
}
step();

});
