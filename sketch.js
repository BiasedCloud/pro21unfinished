
var ball,ground,leftSide;	

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth,windowHeight);

	var ball_Options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	};

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ball = Matter.Bodies.circle(10,10,20,ball_Options);
	World.add(world,ball);

	
	ground = new Ground(width/2,670,width,20);
	leftSide = new Ground(1100,600,20,120);

	Engine.run(engine);
	World.add(world,engine)  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);
  
  ground.display();
  leftSide.display();	
  
  drawSprites();
}



