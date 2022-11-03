class SpaceShip
{
  constructor(posX, posY)
  {
    this.position = createVector(posX, posY);
    this.speed = createVector(0,0);
    this.alpha = 0;
    this.bullets = [];
    this.isMoving = false;
    this.isTurningRight =false;
    this.isTurningLeft =false;
    this.isDead=false;
  }
  
  show()
  {
    if(!this.isDead)
    {
      push();
        translate(this.position.x,this.position.y);
        rotate(this.alpha);
        triangle(-15,15,0,-15,15,15);
        line(0,0,0,15);
        rect(-17,2,5,15);
        rect(12,2,5,15);
        rect(-5,15,10,5);
      pop();
      
      this.update();
      this.processBullets();
    }
  }
  
  update()
  {
    if(this.isMoving)
    {
      this.speed.y-=0.5*cos(this.alpha);
      this.speed.x+=0.5*sin(this.alpha);
    }
    
    if(this.isTurningRight)
    {
      this.alpha+=0.1;
    }
    
    if(this.isTurningLeft)
    {
      this.alpha-=0.1;
    }
    
    this.position.y+=this.speed.y;
    this.position.x+=this.speed.x;
    
    // Decelerate
    this.speed.x*=0.98;
    this.speed.y*=0.98;
    
    if(this.position.x<0)
    {
      this.position.x=width;
    }
    
    if(this.position.x>width+50)
    {
      this.position.x=0;
    }
    
    if(this.position.y<0)
    {
      this.position.y=height;
    }
    
    if(this.position.y>height+50)
    {
      this.position.y=0;
    }
    
  }
  
  processBullets()
  {
    for(let i = 0; i < this.bullets.length; i++) 
    {
      this.bullets[i].show();
      if(this.bullets[i].position.x>width || this.bullets[i].position.x<0 || this.bullets[i].position.y>height || this.bullets[i].position.y<0)
      {
        this.bullets.splice(i,1);
      }
    }
  }
  
  fire()
  {
    this.bullets.push(new Bullet(this.position.x, this.position.y, this.speed.x, this.speed.y, this.alpha-0.2));
    this.bullets.push(new Bullet(this.position.x, this.position.y, this.speed.x, this.speed.y, this.alpha));
    this.bullets.push(new Bullet(this.position.x, this.position.y, this.speed.x, this.speed.y, this.alpha+0.2));
  }
  
  startMove()
  {
    this.isMoving=true;
  }
  
  stopMove()
  {
    this.isMoving=false;
  }
  
  turnRight()
  {
    this.isTurningRight=true;
  }
  
  stopTurnRight()
  {
    this.isTurningRight=false;
  }
  
  turnLeft()
  {
    this.isTurningLeft=true;
  }
  
  stopTurnLeft()
  {
    this.isTurningLeft=false;
  }
  
}
