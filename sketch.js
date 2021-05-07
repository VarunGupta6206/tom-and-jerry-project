var canvas,bg;
 var together;
  var tom, tomImg1,tomImg2; 
  var jerry,jerryImg1,jerryImg2;
function preload() {
    //load the images here
    bg = loadImage("images/garden.png");
     tomImg1= loadAnimation("images/cat1.png"); 
     tomImg2=loadAnimation("images/cat2.png","images/cat3.png");
      tomImg3= loadAnimation("images/cat4.png");
       jerryImg1=loadAnimation("images/mouse1.png");
        jerryImg2= loadAnimation("images/mouse2.png","images/mouse3.png"); 
        jerryImg3=loadAnimation("images/mouse4.png");

     }





function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
tom=createSprite(900,500);
jerry=createSprite(200,500);
tom.addAnimation("TomImg",tomImg1);
jerry.addAnimation("jerryImg",jerryImg1);
tom.scale=0.2;
jerry.scale=0.2;


}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide

    if(tom.x - jerry.x < (tom.width - jerry.width)/2) {
       tom.velocityX=0; tom.addAnimation("tomLastImage", tomImg3);
        tom.x =300;
         tom.scale=0.2;
          tom.changeAnimation("tomLastImage");
         jerry.addAnimation("jerryLastImage", jerryImg3); 
         jerry.scale=0.15;
          jerry.changeAnimation("jerryLastImage");
         }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
  console.log("hi");
tom.velocityX=-2;
tom.addAnimation("tomwalking",tomImg2);
tom.changeAnimation("tomwalking",tomImg2);

jerry.addAnimation("jerryteasing",jerryImg2);
jerry.framedelay=150;
jerry.changeAnimation("jerryteasing",jerryImg2);
}
}
