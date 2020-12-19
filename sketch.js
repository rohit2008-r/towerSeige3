const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var stand1,stand2
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16
var Launcher
var Score=0;
function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

stand1=new Ground (390,300,230,20);
stand2=new Ground (749,200,180,20);
polygon=new Polygon (50,200,50,50);
box17=new Box (810,180,30,40)
box18=new Box (750,180,30,40)
box19=new Box (780,180,30,40)
box20=new Box (720,180,30,40)
box21=new Box (690,180,30,40)
box22=new Box (780,140,30,40)
box23=new Box (750,140,30,40)
box24=new Box (720,140,30,40)
box25=new Box (750,100,30,40)


box1=new Box (480,275,30,40)
box2=new Box (450,275,30,40)
box3=new Box (420,275,30,40)
box4=new Box (390,275,30,40)
box5=new Box (360,275,30,40)
box6=new Box (330,275,30,40)
box7=new Box (300,275,30,40)
box8=new Box (330,235,30,40)
box9=new Box (360,235,30,40)
box10=new Box (390,235,30,40)
box11=new Box (420,235,30,40)
box12=new Box (450,235,30,40)
box13=new Box (360,195,30,40)
box14=new Box (390,195,30,40)
box15=new Box (420,195,30,40)
box16=new Box (390,155,30,40)

box1.score()
box2.score()
box4.score()
box5.score()
box6.score()
box7.score()
box8.score()
box9.score()
box10.score()
box11.score()
box12.score()
box13.score()
box14.score()
box15.score()
box16.score()
box17.score()
box18.score()
box19.score()
box20.score()
box21.score()
box22.score()
box23.score()
box24.score()
box25.score()


Launcher =new launcher (polygon.body,{x:100, y:300});

Engine.run(engine)
}


function draw(){
    background(400);
    Engine.update(engine);
fill("red")
text("score:",+Score,500,300)
   
stand2.display();
stand1.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
box7.display();
box6.display();
box5.display();
box4.display();
box3.display();
box2.display();
box1.display();
box17.display();
box18.display();
box19.display();
box20.display();
box21.display();
box22.display();
box23.display();
box24.display();
box25.display();
polygon.display();
Launcher.display();

drawSprites();
}
function mouseDragged()
{
	Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY}) 
}

function mouseReleased()
{
	Launcher.fly();
   
}
function keyPressed(){
    if(keyCode===32){
        Launcher.attach(polygon.body);
    }
}




