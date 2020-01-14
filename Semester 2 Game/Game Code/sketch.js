//  Seth Reis, Joey Jacob
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var x = 0;
var y = 0;
var loc;
var vel;
var acc;
var moving = false;
function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.position(0, 0);
  background(0);
  loc = createVector(width/2-20, height/2-40)
  vel = createVector(0, 0);
  acc = createVector(0, 0);
}

//  The draw function is called @ 30 fps
function draw(){
  background(0);
  stroke(0, 0, 255);
  line(0, height/2, width, height/2);
  line(width/2, 0, width/2, height);
  if(((x != 0 || y != 0)) && keyIsPressed === false && moving === false){
    acc = createVector(0, 0.5);
    vel = createVector(x/2, y/2);
    moving = true;
  }
  vel.add(acc);
  loc.add(vel);

  if(keyIsDown(RIGHT_ARROW)){
    x++;
  }
  if(keyIsDown(LEFT_ARROW)){
    x--;
  }
  if(keyIsDown(UP_ARROW)){
    y--;
  }
  fill(255, 0, 0);
  stroke(255, 0, 0);
  rect(loc.x, loc.y, 40, 40);

  if(loc.y > height/2-40){
    x = 0;
    y = 0;
    moving = false;
    acc = createVector(0, 0);
    vel = createVector(0, 0);
    loc.y = height/2-40;
  }
}
