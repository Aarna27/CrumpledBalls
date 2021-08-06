const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    //backgroundImg = loadImage("sprites/bg.png");
    Dimage = loadImage("dustbingreen.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    paper = new Box(150, 305, 70, 70);
    dustbin1 = new Ground(700,390,200,20)
    dustbin2 = new Ground(800,350,20,100)
    dustbin3 = new Ground(600,350,20,100)

   
}

function draw(){
    background(255);
    Engine.update(engine);
    strokeWeight(4);
   
    ground.display();
    paper.display();
    dustbin1.display();
    dustbin2.display();
    dustbin3.display();

    image(Dimage,550,200,280,200)

}

function mouseDragged(){
//Matter.Body.setPosition(bird.body,{x:mouseX, y:mouseY})
}

function mouseReleased(){
//chain.fly()
}

function keyPressed(){
if (keyCode === UP_ARROW){

    Matter.Body.applyForce(paper.body, paper.body.position, {x:85, y:-180})
}

}
