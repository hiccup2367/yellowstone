var tom, tomImg, tomAni;
var jerry,jerryImg, jerryAni;
var backgroundImg;
function preload() {
    tomImg = loadImage("cat1.png");
    jerryImg = loadImage("mouse1.png");
    tomAni = loadAnimation("cat2.png","cat3.png");
    jerryAni = loadAnimation("mouse2.png", "mouse3.png");
    backgroundImg = loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
 tom = createSprite(800,50,30,10);
 jerry = createSprite(400,50,10,20);
 tom.addImage(tomImg);
 jerry.addImage(jerryImg);
}

function draw() {
    background(backgroundImg);
   if(tom.isTouching(jerry)){
      jerry.destroy();
   }
    keyPressed();
    drawSprites();
}


function keyPressed(){
    if(keyPressed("left")){
        tom.X = tom.X + 10;
    }
}
