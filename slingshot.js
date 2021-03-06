class Slingshot{
    constructor(bodyA,pointB) {
        var options = {
           bodyA : bodyA,
           pointB : pointB,
           stifness : 0.04,
           length : 7
        }
 
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
      }

      fly() {
        this.sling.bodyA = null;
    }

      display(){
          if(this.sling.bodyA) {
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
      }
    }

}