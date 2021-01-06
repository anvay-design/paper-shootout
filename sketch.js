const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;

var engine, world;
var box1, box2
var bird1;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
    rubbish1=new Rubbish(200,450,40);
    dustbin1=new dustbin(1200,650);
	ground=new Ground(width/2,670,width,20);
	//Create a Ground
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	//Render.run(render);
  
}



function draw(){
    background("white");
    Engine.update(engine);
   
   
    rubbish1.display();

    dustbin1.display();

    ground.display();
}

function keyPressed(){
    if (keyCode === UP_ARROW) {
        Matter.Body.applyForce(rubbish1.body,rubbish1.body.position, {x:120,y:-85});

    }
}