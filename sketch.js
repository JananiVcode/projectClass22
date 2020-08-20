
var bullet;
var wall;
var speed;
var weight;
var thickness;

function setup() {
 createCanvas(1600,400);
 
 bullet = createSprite(100,200,50,10);
 bullet.shapeColor = color(255,255,255);
 wall= createSprite(1200,203,thickness,height/2);
 wall.shapeColor= color(80,80,80);
 speed = random(223,321);
 weight= random(30,52);
 thickness = random(22,83);
 bullet.debug = true;
 wall.debug= true;

}

function draw() {
  background(0,0,0);  

  bullet.velocityX = speed;
  

  function hasCollided( lbullet, lwall){
    bulletRightEdge = lbullet.x + lbullet.width;
    wallLeftEdge = lwall.x;
  

  if(bulletRightEdge>= wallLeftEdge){
    return true;
  }

  return false;
}
     
 if(hasCollided( wall,bullet)){
    bullet.velocityX = 0;

    var damage = 0.5* weight* speed* speed/(thickness*thickness*thickness);

    if(damage>10){
      wall.shapeColor = color(255,0,0);
    }

    if(damage<10){
      wall.shapecolor = color(0,255,0);
    }

  }

  drawSprites();
  
}
  
  
