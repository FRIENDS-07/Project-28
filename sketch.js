const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var boy;
var stone1;
var tree
var mango1,mango2,mango3,mango4,mango5,mango6;
var line1;
var ground;

function preload(){	
}

function setup() {

	createCanvas(900,600);

	engine = Engine.create();
  world = engine.world;
  
  ground = Bodies.rectangle(455, 560, 910, 30, {isStatic:true} );
  World.add(world,ground);

  stone1 = new Stone(90,420);
  boy = new Boy(150,470);
  tree = new Tree();

  mango1 = new Mango(550,300);
  mango2 = new Mango(620,270);
  mango3 = new Mango(690,280);
  mango4 = new Mango(760,250);
  mango5 = new Mango(700,200);
  mango6 = new Mango(620,210);

  line1 = new Chain(stone1.body,{x:90,y:415});

}


function draw() {

  rectMode(CENTER);
  background("lavender");

  Engine.update(engine);

  stone1.display();
  boy.display();
  tree.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();

  line1.display();

  rectMode(CENTER);
  noStroke();
  rect(ground.position.x,ground.position.y,910,30);

  detectollision(stone1,mango1);
  detectollision(stone1,mango2);
  detectollision(stone1,mango3);
  detectollision(stone1,mango4);
  detectollision(stone1,mango5);
  detectollision(stone1,mango6);
 
}

function mouseDragged(){
  Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  line1.fly();
}

function keyPressed(){
  if(keyCode === 32){
    line1.attach(stone1.body);
  }
}

function detectollision(lstone,lmango){

  mangoPosition = lmango.body.position;
  stonePosition = lstone.body.position;

  var distance = dist(mangoPosition.x,mangoPosition.y,stonePosition.x,stonePosition.y);

  if(distance<=lmango.r + lstone.r){
    Matter.Body.setStatic(lmango.body,false);
  }

}



