class Character{
  constructor(x, y){
    this.loc = createVector(x, y)
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.xChange = 0;
    this.yChange = 0;
    this.moving = false;
    this.sideState = 0;
  }

  run(){
    this.checkEdges();
    if(this.moving === false){
     this.checkKeys();
    }
    this.update();
    this.render();
    this.screenCheck();
  }

  checkEdges(){
    for (var i = 0; i < platforms[gameScreen].length; i++){
      let plat = platforms[gameScreen][i];
      //check if land on top
      if(this.loc.x+20 > plat.x && this.loc.x-20 < plat.x + plat.w
         && this.loc.y > plat.y && this.loc.y < plat.y + plat.h && this.vel.y >= 0){
        this.sideState = 1;
      }
      //check if hit right
      if(this.loc.x-20 > plat.x + plat.w-20 && this.loc.x-20 < plat.x + plat.w
         && this.loc.y > plat.y && this.loc.y-40 < plat.y + plat.h && this.vel.x <= 0){
        this.sideState = 2;
      }
      //check if hit left
      if(this.loc.x+20 > plat.x && this.loc.x+20 < plat.x + 20
         && this.loc.y > plat.y && this.loc.y-40 < plat.y + plat.h && this.vel.x >= 0){
        this.sideState = 2;
      }
      //check if hit bottom
      if(this.loc.x+20 > plat.x && this.loc.x-20 < plat.x + plat.w
         && this.loc.y-40 > plat.y + plat.h-20 && this.loc.y-40 < plat.y + plat.h && this.vel.y <= 0){
        this.sideState = 3;
      }

      if(this.sideState === 1){
        this.xChange = 0;
        this.yChange = 0;
        this.moving = false;
        this.acc = createVector(0, 0);
        this.vel = createVector(0, 0);
        this.loc.y = plat.y;
      } else if(this.sideState === 2){
        this.vel.x = -this.vel.x;
      } else if(this.sideState === 3){
        this.vel.y = -this.vel.y;
      }

      this.sideState = 0;
    }
  }

  screenCheck(){
	//goes through top
    if(this.loc.y > height){
      gameScreen++
      this.loc.y = 1
    }
	//goes through bottom
    if(this.loc.y < 0 && gameScreen > 0){
      gameScreen--
      this.loc.y = height-1
    }
	//bounce off sides
	if (this.loc.x < 0){
	  this.vel.x= -this.vel.x;
	  this.loc.x = 2;
	}
	if (this.loc.x > width){
	  this.vel.x= -this.vel.x;
	  this.loc.x = width-2;
	}
  }

  checkKeys(){
	//limits
    if(keyIsDown(RIGHT_ARROW) && abs(this.xChange) <= 30){
      this.xChange++;
    }
    if(keyIsDown(LEFT_ARROW) && abs(this.xChange) <= 30){
      this.xChange--;
    }
    if(keyIsDown(UP_ARROW) && abs(this.yChange) <= 40){
      this.yChange--;
    }
	
	//no limits
	//if(keyIsDown(RIGHT_ARROW)){
      //this.xChange++;
    //}
    //if(keyIsDown(LEFT_ARROW)){
      //this.xChange--;
    //}
    //if(keyIsDown(UP_ARROW)){
      //this.yChange--;
    //}
  }

  update(){
    if(((this.xChange != 0 || this.yChange != 0)) && keyIsPressed === false && this.moving === false){
      this.acc = createVector(0, 0.5);
      this.vel = createVector(this.xChange/2, this.yChange/2);
      this.moving = true;
    }
    this.vel.add(this.acc);
    this.vel.limit(50)
    this.loc.add(this.vel);
  }

  render(){
    fill(255, 0, 0);
    strokeWeight(0);
    if (keyIsPressed === true && this.moving === false){
      rect(this.loc.x-40, this.loc.y-20, 80, 20);
    } else {
      rect(this.loc.x-20, this.loc.y-40, 40, 40);
    }
    strokeWeight(1);
  }
}
