var pathImg,boyImg;
var boy,path,leftBoundary,rightBoundary;

function preload(){
  //pre-load images
  pathImg = loadImage("path.png")
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale = 1.2;

  boy = createSprite(180,340,30,30);
  boy.addAnimation("JakeRunning",boyImg);
  boy.scale = 0.08;

  leftBoundary = createSprite(0,0,100,800);
  leftBoundary.visible = false;

  rightBoundary = createSprite(390,200,10,400);
  rightBoundary.visible = false;
  console.log(height);
}

function draw() {
  background(51);
  
  path.velocityY = 4;
  //boy mooving on x-axis with mouse
  boy.x = World.mouseX;

  if(path.y > 400){
  path.y = height/2;
  }
  edges = createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);

  drawSprites();
}
