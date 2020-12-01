var fixedRect;
var movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200, 200, 50, 80);
  movingRect = createSprite(500, 400, 80, 30);

}

function draw() {
  background(0,0,0);  
  drawSprites();

 movingRect.y = World.mouseY;
 movingRect.x = World.mouseX;

 if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
    }
  else{
 movingRect.shapeColor = "red";
 fixedRect.shapeColor = "red";
    }

}