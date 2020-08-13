var car,wall, speed , weight
 
 
 function setup() {
  
  createCanvas(1000,1000);
  car=createSprite(50,200.50,50);
  wall=createSprite(1500,200,60,height/2);

  speed=random(55,90);
  weight=random(400,1500);

  car.velocityX=speed;
}

function draw() {
  background(255,255,255); 
  car.display();
  wall.display();
  speed.display();
  weight.display(); 
  drawSprites();
}