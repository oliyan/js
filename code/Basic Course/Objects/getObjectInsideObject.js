const circle = {
  radius: 1, // declaring a variable
  location: { //declaring an object inside an object
    x: 1,
    y: 2
  },
  design: {
    color: {
      r: 144,
      g: 238,
      b: 47
    },
    border: 1,
    shadow: false
  },
  isVisible: true, // declaring a boolean operator
  draw: function(){ // declaring a method
    let color = '';
    for (let i in this.design.color){
      color = color + `${i}:${this.design.color[i]} `
    }
    console.log('drawing at the position', this.location.x, this.location.y, 'using the color', color);
  }
};

circle.draw(); //drawing at the position 1 2 using the color r:144 g:238 b:47 