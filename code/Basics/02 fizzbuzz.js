function fizzbuzz(v_num) {
  if (v_num % 3 == 0 && v_num % 5==0) // divisible by 3 & 5
  return 'fizzbuzz';
  
  if (v_num % 3 == 0) // divisible by 3
  return 'fizz';
  
  if (v_num % 5 == 0) // divisible by 5
  return 'buzz';
  
  if (typeof(v_num) !== 'number' ) // not a number
  return 'Not a Number'
  
  return v_num; // return the number if all else
  
}

let num = 30;
console.log(fizzbuzz(num));

// this is a comment.