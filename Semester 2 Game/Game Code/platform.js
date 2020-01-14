class Platform{

constructor(x, y, w, h){
  this.x = x
  this.y = y
  this.w = width
  this.h = height
}

update(){

}

render(){
stroke(255, 255, 255);
rect(this.x, this.y, this. w, this.h);
stroke(0, 0, 0);
}

run(){
this.constructor();
this.update();
this.render();
}

} //end of Platform
