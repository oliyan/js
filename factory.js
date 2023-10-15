function createCircle(parm1,parm2,func1){
    return {
      parm1,
      parm2,
      func1() {
        result = parm1+parm2;
      },
      output() {
        console.log('The parameters are ' + parm1, parm2);
      }
    };
  }
  const circle1 = createCircle(5,2);
  console.log(circle1.output);