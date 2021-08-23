const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var pins = [];
var balls = [];
var bars = [];
var ground = [];
var score = 0
function setup(){
   createCanvas(670,500);
   engine = Engine.create();
   world = engine.world;

   boder1 = new Borders(670, 250, 10, 550);
   boder2 = new Borders(350, 500, 700, 10);
   boder3 = new Borders(0, 250, 10, 550);
   boder4 = new Borders(350, 0, 700, 10);

   for (var i = 5; i <= width; i = i+66){
       bars.push(new Bars(i, 384));
   }

   for (var i = 38; i <= width; i = i+66){
       ground.push(new Ground(i, 491));
   }

   for (var i = 40; i <=width-13; i=i+39) {
       pins.push(new Pin(i,75));
    }

    for (var i = 25; i <=width-25; i=i+39) {
        pins.push(new Pin(i,120));
    }

    for (var i = 40; i <=width-13; i=i+39) {
        pins.push(new Pin(i,165));
    }

    for (var i = 25; i <=width-25; i=i+39) {
        pins.push(new Pin(i,210));
    }
}

function draw(){
    background(0);
    text("score :"+score,width/2+260,20)
    Engine.update(engine);

    for (var i = 0; i< ground.length; i++) {
        ground[i].display();
    }

    for (var i = 0; i< bars.length; i++) {
        bars[i].display();
    }
     
    boder1.display();
    boder2.display();
    boder3.display();
    boder4.display();

    for (var i = 0; i< pins.length; i++) {
        pins[i].display();
    }

    if (keyDown("space")) {
        balls.push(new Balls(Math.round(Math.round(random(width/1-30)), width/2+30), 6,6));
    }

    for (var i = 0; i < balls.length; i++) {
        balls[i].display();
        balls[i].score();
        fill(0)
    }
    text("tap space", 300,250)

    console.log(mouseX, mouseY)
}