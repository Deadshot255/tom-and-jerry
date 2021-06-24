var tom,tomWalking,tomSitting,tomHappy,tom1;
var jerry,jerryWalking,jerryStanding,jerryHappy,jerry1;
var garden

function preload() {
    //load the images here
tom =loadImage("cat4.png");
tomHappy = loadImage("cat3.png");
tomSitting = loadImage("cat1.png");
tomWalking = loadImage("cat2.png");
jerry = loadImage("mouse2.png");
jerryWalking = loadImage("mouse4.png");
jerryStanding = loadImage("mouse3.png");
jerryHappy = loadImage("mouse1.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(200,200,20,20);
    tom = addImage("tom")
    jerry = createSprite(80,80,10,10);
    jerry = addImage("jerry")
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x< (cat.width-mouse.width)/2){
    jerry.changeAnimation("jerryHappy");
    jerry.changeAnimation("tomHappy");
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyPressed === LEFT_ARROW){
jerry.addAnimation("jerryWalking",mouseimg);
jerry.changeAnimation("jerryWalking");
jerry.frameDelay = 25;

}




}
