function CreateCircle(radius){
    this.radius = radius;
    this.draw   = function(){
      console.log('drawing a circle of radius' , this.radius);
    }
  }
  
  const circle = new CreateCircle(5);
  circle.draw();
  circle.radius = 8;
  circle.draw();

  console.log(typeof circle.radius);
 
