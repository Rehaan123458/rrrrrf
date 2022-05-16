var rocket,space,rocks,rocketEvil,spaceShip,planet,arrow;
var rocketIMG,spaceIMG,rocksIMG,rocketEvilIMG,spaceShipIMG,planetIMG,arrowIMG;
var rocksR,rocketEvilR,spaceShipR,planetR,arrowR;
var rocks,rocketEvil,spaceShip,planet;

function preload(){
    rocketIMG = loadImage("rocket.png");
   spaceIMG = loadImage("space.jpg");
   rocksIMG = loadImage("rocks.png");
   spaceShipIMG = loadImage("spaceShip.png");
   planetIMG = loadImage("planet.png");
   rocketEvilIMG = loadImage("rocketEvil.png");
   arrowIMG = loadImage("arrow.png");
}

function setup() {
 createCanvas(windowWidth,windowHeight);
    
 rocket = createSprite(700,500);
    rocket.addImage(rocketIMG);
    rocket.scale = 0.3;

    space = createSprite(400,200);
    space.addImage(spaceIMG);
    space.scale = 9;
    space.velocityY = 3;


    
    rocksR = new Group();
    rocketEvilR = new Group();
    spaceShipR = new Group();
    planetR = new Group();
    arrow = new Group();
}

function draw() {
 background(0);
 
 rocket.depth = space.depth;
 rocket.depth = space.depth+1;

 if(space.y > height ){
    space.y = height/2;
  }

 if(keyDown("A")){
     rocket.x = rocket.x -10
 }

 if(keyDown("D")){
    rocket.x = rocket.x +10
 }
 
 
 if(keyDown("S")){
    rocket.y = rocket.y +10
 }

 if(keyDown("W")){
    rocket.y = rocket.y -10
 }

 if(rocket.x < 0){
     rocket.x = 0
 }
 
 
 if(rocket.x > 1520){
    rocket.x = 1520
 }
 
 if(rocket.y < 350){
    rocket.y = 350
 }


 


  var number = Math.round(random(1,4));

  if(World.frameCount % 5 == 0){
      if(number == 1){
    spaceRocks();
      }
     if(number == 2){
         spacePlanets();
     }
     if(number == 3){
         spaceSpaceShips();
     }
     if(number == 4){
         spacerocketEvil();
     }
  }

    drawSprites();
}

function spaceRocks(){
     rocks = createSprite(Math.round(random(0,1600)),100);
     rocks.addImage(rocksIMG);
     rocks.scale = 0.4;
     rocks.velocityY = 5;
     rocks.setLifetime=170;
     rocksR.add(rocks);

}

    function spacePlanets(){
    planet = createSprite(Math.round(random(0,1600)),50);
    planet.addImage(planetIMG);
    planet.scale = 0.4;
    planet.velocityY = 6;
    planetR.add(planet);
}

        function spaceSpaceShips(){
        spaceShip = createSprite(Math.round(random(0,1600)),50);
        spaceShip.addImage(spaceShipIMG);
        spaceShip.scale = 0.4;
        spaceShip.velocityY = 6;
        spaceShipR.add(spaceShip);
    }

    function spacerocketEvil(){
        rocketEvil = createSprite((Math.round(random(0,1600)),100));
        rocketEvil.addImage(rocketEvilIMG)
        rocketEvil.scale = 0.3;
        rocketEvil.velocityY = 5;
        rocketEvilR.add(rocketEvil);

    }

    function bitch(){
        arrow = createSprite(100,100,60,10);
       arrow.addImage(arrowIMG);
       arrow.velocityX = -4;
       arrow.lifetime = 100;
       arrow.scale = 0.3;
       arrow.x = rocket.x;
       
    }