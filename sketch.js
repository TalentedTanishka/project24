
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper , ground , invisibleground ,  dustbin1, dustbin2 , dustbin3;

function preload()
{
  
	
}

function setup() {
  
	var canvas = createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
paper = new Paper(250,50,70,keyPressed());
ground = new Ground(400,670,800,50);
dustbin1 = new Dustbin(780,555,20,170);
dustbin2 = new Dustbin(600,555,20,170);
dustbin3 = new Dustbin(690,650,200,20);

	Engine.run(engine);
  

}


function draw() {
  rectMode(CENTER);
Engine.update(engine);
  background("yellow");

  

  
  paper.display();
  ground.display();
dustbin1.display();
dustbin2.display();
dustbin3.display(); 
 
}

function keyPressed()
{
   if(keyCode == UP_ARROW)
  {
Matter.Body.applyForce(paper.body,paper.position,{x:700 , y:-840});



   }


}

