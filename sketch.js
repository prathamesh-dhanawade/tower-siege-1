const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


function preload(){

  polygon_image = loadImage("filled-hexagon.jpg");

}



function setup(){
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  groundObject = new Ground(600,height,1200,20);
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);
 
  block8 = new Block(330,235,30,40);
  block9 = new Block (360,235,30,40);
  block10 = new Block (390,235,30,40);
  block11 = new Block (420,235,30,40);
  block12 = new Block (450,235,30,40);
  block13 = new Block (360,195,30,40);
  block14 = new Block (390,195,30,40);
  block15 = new Block (420,195,30,40);
  block16 = new Block (390,155,30,40);

  block1 = new Block(530,235,30,40);
  block2 = new Block (560,235,30,40);
  block3 = new Block (590,235,30,40);
  block4 = new Block (620,235,30,40);
  block5 = new Block (650,235,30,40);
  block6 = new Block (560,195,30,40);
  block7 = new Block (590,195,30,40);
  block21 = new Block (620,195,30,40);
  block20 = new Block (590,155,30,40);

  rope = new Rope(this.polygon,{x : 100,y : 200});

  
}
function draw() {
  background(255);   
  fill("gold");
  imageMode (CENTER) 
    image(polygon_image,polygon.position.x,polygon.position.y,40,40);
  
  groundObject.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block20.display();
  block21.display();

  rope.display();    

  drawSprites();
}

function mouseDragged(){

Matter.Body.setPosition(this.polygon,{x : mouseX,y : mouseY});


}

function mouseReleased(){

rope.fly();

}

