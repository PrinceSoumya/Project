class Chain{
    constructor(body1, body2,offsetX,offsetY){
     this.offsetX=offsetX
     this.offsetY=offsetY
        var options={
            bodyA:body1,
            bodyB:body2,
            stiffness:0.04,
            pointB:{x:this.offsetX, y:this.offsetY}
        }
//console.log(options);
this.rope=Constr.create(options)
World.add(world,this.rope)
    }

    display(){
        push()
       // if (this.rope.bodyA){
            var pointA = this.rope.bodyA.position;
            var pointB = this.rope.bodyB.position;
            strokeWeight(4);
            var a = pointB.x+this.offsetX
            var b = pointB.y+this.offsetY
            stroke("black");
            line(pointA.x, pointA.y, a,b);   
      //  }
      pop()

}
}















   /*var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.chain = Constr.create(options);
        this.pointB=pointB;
        World.add(world, this.chain);
    }
    //Fly(){
      //  this.chain.bodyA=null;



    display(){
        push()
        if (this.chain.bodyA){
            var pointA = this.chain.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke("white");
            line(pointA.x, pointA.y, pointB.x, pointB.y);   
        }
      pop()*/