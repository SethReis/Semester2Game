//  Seth Reis, Joey Jacob
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var platforms = [];
var gameScreen = 0;
function setup() {
  var cnv = createCanvas(800, 1000);
  cnv.position(windowWidth/2-width/2, 30);
  background(0);
  char = new Character(width/2, height/4);
  for (var i = 0; i < 3; i++){
    platforms[i] = [];
  }
  loadPlatforms();
  console.log(platforms);
}

//  The draw function is called @ 30 fps
function draw(){
  background(0);
  stroke(0, 0, 255);
  line(0, height/4, width, height/4);
  line(width/2, 0, width/2, height);
  char.run();
  for (var i = 0; i < platforms.length; i++){
    for (var j = 0; j < platforms[i].length; j++){
      platforms[i][j].run();
    }
  }
}

function loadPlatforms(){
  platforms[0][0] = new Platform(100, 100, 100, 100);
  platforms[0][1] = new Platform(300, 100, 100, 100);
  platforms[0][2] = new Platform(300, 300, 100, 100);
}
