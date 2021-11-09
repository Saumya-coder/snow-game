 const Engine = Matter.Engine;
 const  World = Matter.World;
 const Events = Matter.Events;
 const Bodies = Matter.Bodies;

var bg
var girl, girlImage;
var snowflake = [];


function preload(){
bg = loadImage("snow1.jpg");
girl =  loadImage("girl.png");
snowflakeImg = loadImage("snow5.webp");


}
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
  
 girlImage = createSprite(400, 200, 50, 50);
 
 
}

function draw() {
  background(bg);
  Engine.update(engine); 
  
  girlImage.addImage(girl)
  girlImage.scale = 0.5
  

  if(frameCount%60===0){
    snowflake.push(new Snowflake(random(0,800),0))
  }

  for(var r = 0; r< snowflake.length; r++){
    snowflake[r].display();
  }

  if(keyCode===RIGHT_ARROW){
    girlImage.velocityX = 2
  }

  if(keyCode===LEFT_ARROW){
    girlImage.velocityX = -2
  }


drawSprites();



}





  
	
