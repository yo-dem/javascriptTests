function setup() 
{
  createCanvas(windowWidth-50, windowHeight-50);
  noCursor();
  ship = new SpaceShip(width/2, height/2);
  sky = new Sky(150);
}

function draw() 
{
  background(40); 
  ship.show();
  sky.show(); 
}

function keyPressed() 
{
  switch(keyCode)
  {
    case UP_ARROW:
      ship.startMove();
    break;
    case LEFT_ARROW:
      ship.turnLeft();
    break;
    case RIGHT_ARROW:
      ship.turnRight();
    break;
    case 32:
      ship.fire();
    break;
  }
}

function keyReleased() 
{
  switch(keyCode)
  {
    case UP_ARROW:
      ship.stopMove();
    break;
    case LEFT_ARROW:
      ship.stopTurnLeft();
    break;
    case RIGHT_ARROW:
      ship.stopTurnRight();
    break;
  }
  
}
