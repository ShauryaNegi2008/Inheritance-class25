class BaseClass {
    constructor(x,y,width,height){
        var options={
          'restitution':0.8,
          'friction':1,
          'dencity':1
        }
       this.body=Bodies.rectangle(x,y,width,height,options);
       this.width=width;
       this.height=height;
       this.image=loadImage("base.png");
       World.add(world,this.body);
        }
        display(){
        //   var pos = this.body.position;
          var angle = this.body.angle;
          push();
          translate(this.body.position.x,this.body.position.y);
          rotate(angle);
          imageMode(CENTER);
        //   strokeWeight(4);
        //   stroke("Green");
        //   fill(255);
          image (this.image,0,0,this.width,this.height);
          pop();

        }
}
