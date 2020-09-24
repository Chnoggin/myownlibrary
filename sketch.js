var fixedRect, movingRect;

var gameObject1, gameObject2

var topin, bopin

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = false;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "red";
  movingRect.debug = false;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  gameObject1 = createSprite(100,100,50,80);
  gameObject1.shapeColor = "green";
  gameObject2 = createSprite(800,100,80,30);
  gameObject2.shapeColor = "red";


  gameObject1.velocityX = 0;
  gameObject2.velocityX = -5;

  topin = createSprite(200,100,50,80);
  topin.shapeColor = "blue";

  bopin = createSprite(400,100,50,80);
  bopin.shapeColor = "purple";



}

function draw() {
  background(0,0,0);  

  bounceOff(movingRect, fixedRect);
  collide(gameObject1, gameObject2);

  if(isTouching(gameObject2, topin, bopin )) {
    topin.shapeColor = "purple";
    bopin.shapeColor = "blue"
    
  }

  


  else {
    topin.shapeColor = "blue"
    
  }



  drawSprites();
}


















