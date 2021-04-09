class mainFruit{
    constructor(x,y,width,height){
       var options={
        isStatic: true

       }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
    this.image=loadImage("apple.png");
    World.add(world,this.body);

}
velocity(){
    if(keyDown(UP_ARROW)) {
        this.body.velocityX = 0;
        this.body.velocityY = -4;
      }
      if (keyDown(DOWN_ARROW)) {
        this.body.velocityX=0;
        this.body.velocityY=4;
     } 
      if (keyDown(LEFT_ARROW)) {
        this.body.velocityX=-4;  
        this.body.velocityY=0;
       }
     if (keyDown(RIGHT_ARROW)) {
        this.body.velocityX=4;
        this.body.velocityY=0;
      }   
}
display(){
    image(this.image,this.x,this.y,this.width,this.height);
}
}