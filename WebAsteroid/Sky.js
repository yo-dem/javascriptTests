class Sky
{
  constructor(starNumber)
  {
    this.starNumber = starNumber;
    this.position=[];
    for(let i=0;i<this.starNumber;i++)
    {
      this.position[i]=createVector(random(width), random(height));
    }
  }
  
  show()
  {
    push();
      stroke(255);
      for(let i=0;i<this.starNumber;i++)
      {
        if(i%5==0)
        {
          strokeWeight(random(3));
          point(this.position[i].x,this.position[i].y);
        }
        strokeWeight(1);
        point(this.position[i].x,this.position[i].y);
      }
    pop();
  }
  
}
