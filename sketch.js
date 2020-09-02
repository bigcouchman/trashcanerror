
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1,dustbin2,dustbin3;
var trash;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin1 = new dustbin(900,680,200,20);
	dustbin2 = new dustbin(800,640,20,100);
	dustbin3 = new dustbin(1000,640,20,100);

	trash = new Paper(300,400,50,50);

	ground = new Ground(600,height,1200,20);

	Engine.run(engine);

	keyPressed();
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  trash.display();
  ground.display();

  drawSprites();
 
}
function keyPressed(){
	if (keyCode===UP_ARROW){

		Matter.Body.applyForce(trash.body,trash.body.position,{x:85,y:-85});
	}
}


