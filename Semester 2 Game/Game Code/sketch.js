//  Seth Reis, Joey Jacob
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.position(0, 0);
  background(0);
  char = new Character(width/2, 3*height/4);
  plat = new Platform(100, 100, 50, 200);
}

//  The draw function is called @ 30 fps
function draw(){
  background(0);
  stroke(0, 0, 255);
  line(0, 3*height/4, width, 3*height/4);
  line(width/2, 0, width/2, height);
  char.run();
}
