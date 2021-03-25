var cat,catImage
var mouse,mouseImage
function preload() {
    //load the images here
    bg = loadImage("images/garden.png");
     tomImg1= loadAnimation("images/tomOne.png");
      tomImg2=loadAnimation("images/tomTwo.png","images/tomThree.png");
       tomImg3= loadAnimation("images/tomFour.png");
        jerryImg1=loadAnimation("images/jerryOne.png");
      jerryImg2= loadAnimation("images/jerryTwo.png","images/jerryThree.png") ;
       jerryImg3=loadAnimation("images/jerryFour.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat= createSprite(870, 600, 50, 80);
    cat.addAnimation("tomsleeping",tomImg1)
    cat.scale= 0.2;
    mouse = createSprite(400, 800,80,30);
    mouse.addAnimation("jerrystanding",jerryImg1)
    mouse.scale= 0.15;
  
   
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
if(cat.x=mouse.x<cat.width/2-mouse.width/2){
    cat.velocityX=0
    cat.addAnimation("tom",tomImg3)
   // cat.x=300
    cat.scale=0.2
    cat.changeAnimation("tom")
    mouse.addAnimation("mouse",jerryImg3)
    mouse.scale=0.15
    mouse.changeAnimation("mouse")
}
    drawSprites();
}


function keyPressed(){
if(keyCode===LEFT_ARROW){
cat.velocityX=-5
cat.addAnimation("catImage",tomImg2)
cat.changeAnimation("catImage")
mouse.addAnimation("mouseteasing",jerryImg2)
mouse.changeAnimation("mouseteasing")
}

  //For moving and changing animation write code here


}
