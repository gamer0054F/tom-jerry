
function preload() {
    //load the images here
    cat1Img = loadAnimation("images/cat1.png");
    cat2Img = loadAnimation('images/cat2.png','images/cat3.png');
    cat3Img = loadAnimation('images/cat4.png');

    mouse1Img = loadAnimation('images/mouse1.png');
    mouse2Img = loadAnimation('images/mouse2.png','images/mouse3.png');
    mouse3Img = loadAnimation('images/mouse4.png');

    garden = loadImage('images/garden.png');

}

function setup(){
    createCanvas(1000,800);
    

    //create tom and jerry sprites here

    tom = createSprite(870,600,20,40);
    tom.addAnimation('tomSleeping',cat1Img);
    tom.scale = 0.1

    jerry = createSprite(200,600,40,20);
    jerry.addAnimation('jerryStanding',mouse1Img);
    jerry.scale = 0.1
}

function draw() {

    background(garden);
    
    text(mouseX+','+mouseY, 10,45);
    //keyPressed();
    if(keyDown===LEFT_ARROW){
        tom.velocityX = -5;
        tom.addAnimation("catRunning",cat2Img);
        tom.changeAnimation("catRunning",cat2Img);
    
        jerry.addAnimation('mouseDancing');
        jerry.changeAnimation('mouseDancing');
    }

    if(touching(tom,jerry)){
        tom.velocityX = 0;
        tom.x = 870;
        tom.addAnimation('catStanding',cat3Img);
        jerry.addAnimation('mouseStanding',mouse3Img);
        tom.changeAnimation('catStanding');
        jerry.changeAnimation('mouseStanding');
    }

    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    

}

function touching(object1,object2){
    if(object1.x-object2.x <= object2.width/2+object1.width/2
      &&object2.x-object1.x <= object2.width/2+object1.width/2
      &&object1.y-object2.y <= object2.height/2+object1.height/2
      &&object2.y-object1.y <= object2.height/2+object1.height/2){
        return true;
    }
    else{
      return false;
     
    }
    
  }