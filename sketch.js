
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var ball;


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  var options= {
    isStatic:true
  }
  ground= Bodies.rectangle(0,390,400,10,options);
 
  World.add(world,ground);

  ball = Bodies.circle(60,60,30);
  World.add(world,ball);
}


function draw() 
{
  background(51);
  fill("yellow");
  Engine.update(engine);
  rect(ground.position.x,ground.position.y,400,10);

  ellipse(ball.position.x,ball.position.y,30);
}

