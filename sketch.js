
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper , ground , dustbin1, dustbin2 , dustbin2;

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
paper = new Paper(200,600,30,keyPressed());
ground = new Ground(400,650,800,10);
dustbin1 = new Dustbin(780,595,20,100);
dustbin2 = new Dustbin(600,595,20,100);
dustbin3 = new Dustbin(690,635,200,20);

	Engine.run(engine);
  

}


function draw() {
  rectMode(CENTER);
Engine.update(engine);
  background("black");

  

  ground.display();
  paper.display();
dustbin1.display();
dustbin2.display();
dustbin3.display(); 
 
}

function keyPressed()
{
   if(keyCode == UP_ARROW)
  {
Matter.Body.applyForce(paper.body,paper.position,{x:200 , y:-100});



   }


}

