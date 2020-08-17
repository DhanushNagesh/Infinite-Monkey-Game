
var backgroundImage,background_Sprite,invisibleGround
var bananaGroup,banana
var stone,stoneGroup,stoneImage
var monkey,monkey_walking
function preload() {
monkey_walking = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  backgroundImage = loadImage("jungle.png");
  
  banana = loadImage("banana.png");
  
  stone = loadImage("stone.png");
}


function setup() {
  createCanvas(400, 400);
 backgroundImage = createSprite(200,200,400,400);
  backgroundImage.shapeColor = ("green")
  
 monkey = createSprite(100,250,10,10);
  monkey.addAnimation("Walking",monkey_walking);
  monkey.scale = 0.1;
  
  invisibleGround = createSprite(200,282,400,10)
  invisibleGround.shapeColor = ("brown");

  stoneGroup = new Group();
  fruitGroup = new Group();

}
function draw() {
  background(220);
  monkey.collide(invisibleGround);
      if(keyDown("space") && monkey.y >  200){
      monkey.velocityY = -12 ;
  
    }
  
    for( var i = 0 ; i < fruitGroup.length ; i ++) {
     if (monkey.isTouching(fruitGroup.get(i))) {
       fruitGroup.get(i).destroy();
     monkey.scale = monkey.scale+0.005;
  }
  }
  if(monkey.isTouching(stoneGroup)){
  monkey.scale = 0.1;
  }
   monkey.velocityY = monkey.velocityY + 0.8;
  spawnObstacles();
  spawnFruit();
  drawSprites();
}

function spawnObstacles() {
  if(frameCount % 80 === 0) {
    stone = createSprite(410,265,50,30)
    stone.velocityX = -8;
    stoneGroup.add(stone);
    stone.lifetime = 200;
  }
    }

function spawnFruit() {
  if (frameCount % 20 === 0){
    fruit = createSprite(410,230,10,30);
    fruit.shapeColor = ("yellow");
    fruit.velocityX = -5;
    fruit.y = Math.round(random(200,250))
    fruitGroup.add(fruit);
    fruit.lifetime = 200;
  }

}
    