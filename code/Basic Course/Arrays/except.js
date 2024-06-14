function except(array, exclude){
  for (let i of array){
    for (let j of exclude){
      if (i == j){
        array.splice()
      }
    }
  }
  return array;
}

const numbers = [1,2,3,4,1,1,5,3,1,2,1,4,2]
console.log(except(numbers, [1]));