class Bullet
{
  constructor(x, y, shipSpeedX, shipSpeedY, alpha)
  { 
    this.position = createVector(x,y);
    this.alpha = alpha;
    
    this.speed = createVector(0, 0);
    this.shipSpeed = createVector(shipSpeedX, shipSpeedY);
  }
  
  show()
  {
    push();
    ellipseMode(CENTER);
    translate(this.position.x,this.position.y);
    ellipse(0,0,8,8);
    this.speed.x = 8*sin(this.alpha)+this.shipSpeed.x;
    this.speed.y = -8*cos(this.alpha)+this.shipSpeed.y;
    this.position.x+=this.speed.x;
    this.position.y+=this.speed.y;
    pop();
  }
  
}
