
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constr = Matter.Constraint;

var Rop,bob1,bob2,bob3,bob4,bob5,rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  Rop =  new Roof(400,200,400,50);
  bob1 = new balls(300,500);
  bob2 = new balls(350,500);
  bob3 = new balls(400,500);
  bob4 = new balls(450,500);
  bob5 = new balls(500,500);
  rope1 = new Chain(bob1.body,Rop.body,-110,0)
  rope2 = new Chain(bob2.body,Rop.body,-55,0)
  rope3 = new Chain(bob3.body,Rop.body,00,0)
  rope4 = new Chain(bob4.body,Rop.body,55,0)
  rope5 = new Chain(bob5.body,Rop.body,110,0)

	Engine.run(engine);
  
}


function draw() {
  background(200);
  Engine.update(engine);
  
Rop.display()
rope1.display()
rope2.display()
rope3.display()
rope4.display()
rope5.display()
bob1.display()
bob2.display()
bob3.display()
bob4.display()
bob5.display()


}

function keyPressed(){
  if (keyCode === UP_ARROW){
 Body.applyForce(bob1.body,bob1.body.position,{x:-30,y:-20});
 
   }
 }


