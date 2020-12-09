class Bird extends BaseClass {
    constructor(x,y){
      super(x,y,50,50);
  
   this.image = loadImage("sprites/bird.png")
 
    }
    display(){
let mousePosition= this.body.position;
      mousePosition.x=mouseX;
      mousePosition.y=mouseY;
      super.display();
    }
}
