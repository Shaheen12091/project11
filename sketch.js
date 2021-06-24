var ship, ship_moving, edges;
var sea;
var seaImage;

function preload(){
ship_moving = loadAnimation("ship1.png,ship2.png,ship3.png,ship4.png");
seaImage = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  ship = createSprite(50,160,20,50);
  ship.addAnimation("woving",ship_moving);
  sea = createSprite(300,200,600,20);
  sea.addImage("sea",seaImage);
  sea.x=sea.width/2;
  sea.velocityX=-5;
  ship.scale = 0.5;
  ship.x = 50
}

function draw() {
  background("blue");
  ship.collide(sea);
  if(sea.x<0){
    sea.x=sea.width/2;
  }
 drawSprites();
}