function arrayFromRange(min,max){
  let array = [];
  for(let i = min; i<=max; i++){
    array.push(i);
  }
  return array;
}

myArray = arrayFromRange(-10,-5);
console.log(myArray);