class balls{
constructor(x,y){
    var options = {
        isStatic : false,
    'restitution':1,
    'friction':0,
    'density':0.8
}
this.body = Bodies.circle(x,y,30, options);
this.x=x;
this.y=y;
this.radius = 30;
World.add(world, this.body);
}

display(){
var angle = this.body.angle;
push();
translate(this.body.position.x, this.body.position.y);
rotate(angle);
ellipseMode(RADIUS);
fill("pink")
ellipse(0,0,this.radius);
pop();

}

}
