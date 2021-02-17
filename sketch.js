//declaring the variables
var playerpaddle,computerPaddle,ball,edges, gameState,playerscore,computerscore

function setup()
{
  createCanvas(400,400);
  playerPaddle= createSprite(390,200,10,100)
  playerPaddle.shapeColor="red"
  computerPaddle= createSprite(10,200,10,100)
  computerPaddle.shapeColor="orange"
  ball= createSprite(200,200,10,10)
  ball.shapeColor="yellow"
  gameState="serve";
  edges= createEdgeSprites()
  playerscore=0;
  computerscore=0;

}

function draw()
{
  background("black");

 stroke("white")
 text(playerscore,225,15)
 text(computerscore,170,15)

for(var y= 0; y<400;y=y+20)
{
  line(200,y,200,y+10)
}
  playerPaddle.y=mouseY;

  if(keyDown("space") && gameState === "serve")
  {
    ball.velocityY=3;
    ball.velocityX=3;
    gameState="play";
  }
computerPaddle.y=ball.y

ball.bounceOff(edges[2])
ball.bounceOff(edges[3])
ball.bounceOff(playerPaddle)
ball.bounceOff(computerPaddle)

if(ball.x>400 || ball.x< 0)
{
  if(ball.x>400)
  {
    computerscore+=1;
  }
  if(ball.x<0)
  {
    playerscore+=1;
  }
    
  ball.x=200;
  ball.y=200;
  ball.velocityY=0;
  ball.velocityX=0;
  gameState="serve"
}

if(playerscore ===5 || computerscore===5)
{
  gameState="over";
  fill("black")
  text("Game Over", 170,170)
  text("Press R to Restart", 155, 190)
}
if(keyDown("R")&& gameState==="over")
{
  playerscore=0;
  computerscore=0;
  gameState="serve";
}

  drawSprites();
  
}
