

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var tree, treeImg, stone, stoneImg, ground, boy, boyImg,mango;
var score;


function setup() {
	createCanvas(1500, 750);


	engine = Engine.create();
	world = engine.world;

	stone = new Stone(160,500,20);
	mango1 = new Mango(1100,300,30);
	mango2 = new Mango(1110,169,30);
	mango3 = new Mango(1210,200,30);
	mango4 = new Mango(1190,300,30);
	mango5 = new Mango(1230,300,30);
    tree = new Tree(1150,680);
    ground = new Ground(0,680,4000,20);
	boy = new Boy(250,600);
	chain = new Chain(stone.body,{x:160, y:500});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(500);

  background("cyan")
  fill('blue');
  textSize(24);
  text("PRESS SPACE TO GET A SECOND CHANCE TO PLAY", 200,200);
  text("AND ENJOY THE GAME BY PLUCKING MANGOES",300,300);
  text("SCORE:"+score,100,100);
  ground.display();
  tree.display();
  boy.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  chain.display();

  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY});
}
function mouseReleased(){
    chain.fly();
}
function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stone.body,{x:235, y:420});
    chain.attach(stone.body);
  }
}
function detectCollision(stone,mango1){
  stoneBodyPosition = stone.body.position;
  mangoBodyPosition = mango1.body.position;

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
  if(distance <= mango1.r + stone.r){
    Matter.Body.setStatic(mango1.body, false);
  }

}


