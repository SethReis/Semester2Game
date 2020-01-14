class Character{
  constructor(x, y){
    this.loc = createVector(x, y)
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.xChange = 0;
    this.yChange = 0;
    this.moving = false;
  }

  run(){
    this.checkEdges();
    this.checkKeys();
    this.update();
    this.render();
  }

  checkEdges(){
    if(this.loc.y > 3*height/4){
      this.xChange = 0;
      this.yChange = 0;
      this.moving = false;
      this.acc = createVector(0, 0);
      this.vel = createVector(0, 0);
      this.loc.y = 3*height/4;
    }
  }

  checkKeys(){
    if(keyIsDown(RIGHT_ARROW)){
      this.xChange++;
    }
    if(keyIsDown(LEFT_ARROW)){
      this.xChange--;
    }
    if(keyIsDown(UP_ARROW)){
      this.yChange--;
    }
  }

  update(){
    if(((this.xChange != 0 || this.yChange != 0)) && keyIsPressed === false && this.moving === false){
      this.acc = createVector(0, 0.5);
      this.vel = createVector(this.xChange/2, this.yChange/2);
      this.moving = true;
    }
    this.vel.add(this.acc);
    this.loc.add(this.vel);
  }

  render(){
    fill(255, 0, 0);
    stroke(255, 0, 0);
    if (keyIsPressed === true && this.moving === false){
      rect(this.loc.x-40, this.loc.y-20, 80, 20);
    } else {
      rect(this.loc.x-20, this.loc.y-40, 40, 40);
    }
  }
}
