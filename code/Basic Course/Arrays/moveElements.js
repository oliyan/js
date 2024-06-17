let sham = [1,2,3,4]
//          0,1,2,3

function move(array, index, offset){
  let arrlen = array.length;
  if (arrlen < 2)
    console.error('ERROR: Array length is not sufficient');
  if (index < 0) 
    console.error('ERROR: Not possible to move it beyond first element');
  if (index > arrlen)
    console.error('ERROR: Not possible to move it beyond last element');
  if (offset < 0)
    offset += arrlen;
  }

  let output = [...array];
  console.log(`output array is ${output}`);
  let removed = output.splice(index,1);
  console.log(`removed array is ${removed}`);
  if (offset > 0)
    output.splice(offset,0,removed[0]);
  else
    output.splice(offset,0,removed[0])

  console.log(`edited array is ${output}`);
  return output;
  

console.log(move([1,2,3,4], 1, 2));




