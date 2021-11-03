

function preload(){
}

function setup(){
  createCanvas(600,200);

}

function draw(){
  background(150); 
} 
















/* Actividad de Profe  PRO C9 Trex 1
var trex,trex_running;
var edges;

function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png")
  
}

function setup(){
  createCanvas(600,200);
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  edges =createEdgeSprites();
  trex.scale = 0.5;
  trex.x =50;
}

function draw(){
  background(150);
  
  console.log(trex.y);
  if(keyDown("space")){
    trex.velocityY=-10
  }
  trex.velocityY= trex.velocityY + 0.5
  trex.collide(edges[3]);
  drawSprites()
}
*/


/* Actividad completa 
var trex, trex_running
var edges, groundImage;

function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage=loadImage("ground2.png");
}

function setup(){   
  createCanvas(600,200);
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running",trex_running);
  trex.scale= 0.5;
  trex.x=50;

  edges = createEdgeSprites(); 
  ground=createSprite(220,180,400,20);  
  ground.addImage("ground",groundImage);  
  ground.x=ground.width/2;   
  ground.velocityX = -4;     
  
}
function draw(){
  background(160);
  
  console.log(ground.x); 
  
  if(ground.x<0){ 
    ground.x=ground.width/2; 
  }

  
  //if(ground.x<0){
   // trex.velocityY=200;   
//}
  //console.log("trex_runner"); 
   //console.log(trex.y);    
  
  if(keyDown("space")){
    trex.velocityY=-10;
  }
  trex.velocityY=trex.velocityY+0.8;
  
  //trex.collide(edges[3]);
  trex.collide(ground);  
  drawSprites();
}
*/
