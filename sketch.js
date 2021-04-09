const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var fruit1 ,banana,apple,peer,watermelon,strawberry,mango,fruit2,fruit3,fruit4;
var fruit5,fruit6, fruitsGroup;
var engine, world;
function preload(){
  fruit1=loadImage("apple.png");
  fruit2=loadImage("banana.png");
  fruit3=loadImage("peer.png");
  fruit4=loadImage("mango_PNG.png");
  fruit5=loadImage("strawberry-png.png");
  fruit6=loadImage("watermelon.png");
  
}
function setup(){
    canvas = createCanvas(1276,602);
    engine = Engine.create();
    world = engine.world;
    apple=new mainFruit(200,200,70,70);
}

function draw()
{
 background('black');
 Engine.update(engine);
 apple.display();
  

}
function keyPressed(){
   apple.velocity();
}
