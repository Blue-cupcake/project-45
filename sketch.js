var covid1,covid2;
var lady,lady2;
var sanitiser,mask;
var bg1,bg2;
var girl;

var virusArray = [];

function preload() {
  
  covid1=loadImage("Image/virus1.png");
  girlImg =loadImage("Image/girl.png");
  sanitiserImg=loadImage("Image/sanitizerImg.jpg");
  bg2=loadImage("Image/background2.jpg");
  bg1=loadImage("Image/backgroundImage.png");
  win=loadImage("Image/winImg.jpg")

}

function setup() {
  createCanvas(1000,600);

  girl = createSprite(98,370,10,10);
  girl.addImage(girlImg);
  girl.scale=0.6

  sanitiser = createSprite(210,370,10,10);
  sanitiser.addImage(sanitiserImg);
  sanitiser.scale=0.2


}

function draw() {
  background(bg1);
  drawSprites()

  //if frameCount is a multiple of 100 create a virus
  if (frameCount % 100 === 0){
    virus();
  }
  textSize(24)
  //fill(255);
  //stroke("lightblue");
  fill("lightblue");
  //stroke(255);
  text('Drag the sanitizer toward the virus to kill them',30,50)
  
}

function virus(){
  
  var virus = createSprite(1000,random(100,500),10,10);
  virus.addImage(covid1);
  virus.scale = random(0.1,0.3);
  virus.velocityX= -7/(virus.scale*10);
  virus.lifetime= (1000 / virus.velocityX) + 20;
  virusArray.push(virus)
  

  //virus should have a lifetime
  
}

function mouseDragged(){
  sanitiser.x = mouseX;
  sanitiser.y = mouseY;

  for (i=0; i < virusArray.length; i++){
    if(mousePressedOver(virusArray[i]))
    virusArray[i].visible = false;
    }
}



