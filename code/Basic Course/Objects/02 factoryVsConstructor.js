// Create an address object using a ConstructorFunction()
function CreateAddress(name,street, city, zip){
  this.name = name,
  this.street = street,
  this.city = city,
  this.zip = zip
}
const add = new CreateAddress('ravi', 'theru', 'oor','zipp')

// create an address object using factoryFunction()
function createAddress(name,street,city,zip){
  return{
    name,
    street,
    city,
    zip
  }
}
const sub = createAddress('ravi', 'theru', 'oor','zipp')