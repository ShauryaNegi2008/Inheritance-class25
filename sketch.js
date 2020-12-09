
const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var engine,world;
var box1,box2,box3,box4;
var ground;
var pigs1,pigs3;
var log1,log3,log4,log5;
var bird;
let bg;
function preload(){
bg=loadImage("bg.png");

}
function setup() {
var canvas = createCanvas(1200,400);
engine=Engine.create();
world=engine.world;

box1=new Box(700,320,70,70);
box2=new Box(920,320,70,70);
box3=new Box(700,240,70,70);
box4=new Box(920,240,70,70);


ground=new Ground(600,height,1200,20);

pigs1= new Pig(810,350);
pigs3= new Pig(810,220);

log1= new Logs(810,260,300,PI/2)
log3= new Logs(810,180,300,PI/2)
log4= new Logs(760,120,150,PI/7)
log5= new Logs(870,120,150,-PI/7)

bird=new Bird(100,100);
}

function draw() {
  background(bg);  
  Engine.update(engine);

 box1.display();
 box2.display();
 box3.display();
 box4.display();

ground.display();
pigs1.display();
pigs3.display();

log1.display();
log3.display();
log4.display();
log5.display();

bird.display();
}
