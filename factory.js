function createCircle(parm1,parm2){
    return {
      parm1,
      parm2,
      func1() {
        console.log('this is printed');
      }
    };
  }
  const c1 = createCircle(5,2);
    console.log(c1['parm1']);
  //console.log(c1.func1);
