const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint =Matter.Constraint;

var bg = "sprites/light.jpeg";

function preload() {
    getTime();
}

function setup() {
  createCanvas(1000,400);
  engine = Engine.create();
    world = engine.world;
  
mainPlatform = new Platform(500,390,1000,20);
platform1 = new upperPlatform(500,300,260,10);
platform2 = new upperPlatform(825,200,200,10)
box1 = new cyanBox(410,275,30,40);
box2 = new cyanBox(440,275,30,40);
box3 = new cyanBox(470,275,30,40);
box4 = new cyanBox(500,275,30,40);
box5 = new cyanBox(530,275,30,40);
box6 = new cyanBox(560,275,30,40);
box7 = new cyanBox(590,275,30,40);

box8 = new limeBox(440,235,30,40);
box9 = new limeBox(470,235,30,40);
box10 = new limeBox(500,235,30,40);
box11= new limeBox(530,235,30,40);
box12 = new limeBox(560,235,30,40);

box13 = new yellowBox(470,195,30,40);
box14 = new yellowBox(500,195,30,40);
box15 = new yellowBox(530,195,30,40);

box16 = new orangeBox(500,155,30,40);

box17 = new orangeBox(765,175,30,40);
box18 = new orangeBox(795,175,30,40);
box19 = new orangeBox(825,175,30,40);
box20 = new orangeBox(855,175,30,40);
box21 = new orangeBox(885,175,30,40);

box22 = new yellowBox(795,135,30,40);
box23 = new yellowBox(825,135,30,40);
box24 = new yellowBox(855,135,30,40);

box25 =new limeBox(825,95,30,40);

polygon = new makeBody(50,200,20);

launchobject = new Launcher(polygon.body,{x:100,y:200}) 
}

function draw() {
  background("backgroundImg");  
  Engine.update(engine);
  mainPlatform.display();
  platform1.display();
  platform2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();

  box13.display();
  box14.display();
  box15.display();

  box16.display();

  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();

  box22.display();
  box23.display();
  box24.display();

  box25.display();

  launchobject.display();
  polygon.display();
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX, y: mouseY});
}
function mouseReleased(){
  launchobject.fly();
}
function keyPressed(){
  if(keyCode ===32){
    launchobject.attach(polygon.body);
}
}
async function getTime(){
    
  var response= await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responsejson= await response.json()
  console.log(responsejson);
  var datetime = responsejson.datetime;
  var hour = datetime.slice(10,13)
  console.log(hour);
  console.log(bg);
  if(hour>=6&& hour<=19){
      bg="sprites/light.jpeg"
  }
  else{
      bg = "sprites/dark.jpeg"
  }
  backgroundImg=loadImage(bg)
  
}