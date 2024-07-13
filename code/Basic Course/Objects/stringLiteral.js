// define an address object with 4 keyvalue pairs
let address = {
  name        : 'Ravisankar',
  street      : '221/B Baker Street',
  city        : 'London',
  zip         : '100001'
}

// define a function that takes an object as input and operate on that object's properties.
function showAddress(addr){
  let result = ' ';
  for (let idx in addr){
    result = result + `
    ${idx} : ${addr[idx]}`
  }

  return result;
}

console.log(showAddress(address));

