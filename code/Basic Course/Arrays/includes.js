function includes(array, element){
  for (let elem of array)
    {
      if (elem == element) return true;
    }
  return false;
}

let numbs = [1,2,3,4];
console.log(includes(numbs,3));