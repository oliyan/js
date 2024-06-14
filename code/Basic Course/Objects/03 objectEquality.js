  // Create an address object using a ConstructorFunction()
  function Address(name,street, city, zip){
    this.name = name,
    this.street = street,
    this.city = city,
    this.zip = zip
  }

  let addr1 = new Address('ravi', 'theru', 'oor', 'zipp');
  let addr2 = new Address('ravi', 'theru', 'oor', 'zipp');
  let assignAddr = Object.assign({}, addr1);
  let spreadAddr = {...addr1};
  let addr3 = addr1;

  // Declare a function to check if two objects are referencing the same object.
  function areSame(adr1, adr2){
    if (adr1 == adr2)
      return true;
    else
      return false;
  }

  function areEqual(adr1,adr2){
    for (let idx in adr1){
      if (adr1[idx] !== adr2[idx])
        return false;
    }
    return true;
  }