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
  platforms[0][0] = new Platform(width/2-100, height/4, 200, 65); //x, y, width, height
  platforms[0][1] = new Platform(width/2-78, 300, 190, 60);
  platforms[0][2] = new Platform(width/2-85, 350, 165, 45);
  platforms[0][3] = new Platform(width/2-55, 380, 130, 40);
  platforms[0][4] = new Platform(width/2-45, 410, 110, 35);
  platforms[1][0] = new Platform(0, height/2+200, width, 35);

}
