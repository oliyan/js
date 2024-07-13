function createCircle(radius, diameter){
    return {
        radius: radius,
        diameter: diameter, 
        myfunc() {
            console.log('Calling myfunc');
            let result = radius + diameter;
            let results = 'The addition is ' + result;
            return results;
        },
        output() {
            console.log('Calling output function', radius, diameter);
        }
    };
}

function isPrime(numb) {
    if (numb < 2) return false;
    for (let j = 2; j <= Math.floor(numb / 2); j++) {
        if (numb % j === 0) return false;
    }
    return true;
}

function newObj(name, value) {
    newVar[name] = value;
}

let newVar = {};
for (let i = 1; i <= 10; i++) {
    if (isPrime(i)) {
        newObj('circle' + i, createCircle(1, i));
    }
}
console.log(newVar);


