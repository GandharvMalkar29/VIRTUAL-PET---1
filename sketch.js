//Create variables here
var dog, happyDog;
var foodS,foodStock
var dataBase;

function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png")
  dogImg1 = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500, 500);
  dog = createSprite(250,250,10,10)
  dog.addImage(dogImg)
  dog.scale = 0.5
  //happyDog = createSprite(250,250,10,10)
  //happyDog.addImage(dogImg1)
  database = firebase.database()
  foodStock = database.ref('food')
  foodStock.on("value",readStock);
}


function draw() {  
  background(46,139,87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);

    dog.addImage(dogImg1);
  }

  drawSprites();
  //add styles here


}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

  database.ref('/').uptade({
    food:x
  })
}
