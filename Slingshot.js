
class launcher {
    constructor(bodyA,pointB){
       var options = {
           bodyA : bodyA,
           pointB : pointB,
           length : 1,
           stiffness :0.04
       }
       
       this.launcher= Constraint.create(options)
       this.pointB = pointB
       World.add(world,this.launcher)
      
    }
    attach(body){
      this.launcher.bodyA=body
  }
    fly(){
       this.launcher.bodyA = null   
      }
    display(){
    
    if(this.launcher.bodyA){
    var pointA = this.launcher.bodyA.position
    var pointB = this.pointB
    
    stroke("blue")
    strokeWeight(7)
    line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
  
   }
}
