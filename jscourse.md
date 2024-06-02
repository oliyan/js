# Setup
- VS Code
- NodeJS
- Live Server (VS Code Extension)

# Basics
## Variables
- Cannot be started with a number
- Cannot be reserved keyword
- cannot contain hyphen
- Case sensitive
```javascript
let varname = 'test'; // using let to define
var varName = 'test'; // using var to define
 ```

## Primitive/Value Types
```javascript
let name = 'Ravi' // strings
let isEmployed = true; // boolean
let maritalStatus = undefined; // undefined
let salary = null; // null
```


## Reference Types / Dynamic Types
1. Object
2. Array
3. Function

- Object 
 >Access the objects' attributes by either a dot or bracket notation.
   ```javascript 
  let person = {name: 'Ravi', age: 31}; // declare an object
  person.name = 'Mary'; // dot notation
  person['name'] = 'John';  // bracket notation
  ```
 

- Array
  - Index start at 0
  - Can be a homogenous or hetergenous type of elements
  - ```let colorarray = ['red','blue','green']```
  - ```const emptyArray = new Array(10);``` - Declaring a new empty array with the length 10.
- Function
  - Just like python or any other function available in modern programming language. 

To put it all together. Take a look at this array and the list of objects/data types
```js
 let z = [1,"momo", true, undefined, {name: 'ravi'}, [{name: 'sankar', age: '31'}, {name: 'anu', age: 31}],(function() {let name = 'World'; return 'Hello ' + name;})() ]

let number = 42;
let string = "Hello, world!";
let boolean = true;
let obj = { key: "value" };
let func = function() {};
let symbol = Symbol("sym");
let undef = undefined;
let nul = null;

console.log(typeof number);  // "number"
console.log(typeof string);  // "string"
console.log(typeof boolean); // "boolean"
console.log(typeof obj);     // "object"
console.log(typeof func);    // "function"
console.log(typeof symbol);  // "symbol"
console.log(typeof undef);   // "undefined"
console.log(typeof nul);     // "object" (special case)

```
---

# Operators
  ### Arithmatic Operators
Used to perform arithmatic operations on variables or object. e.g., ``` +, -, /, *, %, **, ++, -- ```
### Assignment Operators
  Used to assign the values to a variable or an object. e.g.,  ```=```
### Comparison
  To compare the relation b/w two or more variables or objects. (>, <. >=, <=)
### Equality
  - "Strict Equality" checks for both type and value. (=\==, !=\==)
  ```javascript
  console.log(1===1); // TRUE
  console.log(1==='1'); // FALSE because of type mismatch
  ```
  - "Loose Equality" checks for only value. (=\=, !=\=)

```javascript
  console.log(1=='1'); // TRUE because the values are equal
  console.log(true=='1'); // TRUE because the RHS is true in a way
  ```

### "Ternary / Conditional" 
It combines the condition and assignment in a single instruction.
```javascript
  let points = 90 
  let category = points > 100 ? 'gold' : 'silver'; 
  console.log(category); // prints silver
```

### Logical
  - AND = ```&&```
  - OR = ```||```
  - NOT = ```!```
  - By default the below falsy values will return 'false'
    - undefined
    - null
    - 0
    - false
    - ''
    - NaN
  - Anything other than the above falsy values, will return a 'true'

### Bitwise
 Bitwise operators are logical operators that performs on the binary digits a.k.a bit-wise.
 ```javascript
 // 1 = 00000001
 // 2 = 00000010
 // 3 = 00000011
 // 4 = 00000100

 console.log(1 | 2); // result is 3 i.e. 00000011 
 const read = 4;
 const write = 2;
 const exec = 1;

 let permission = 0;
 permission = permission | read;
 console.log(permission); // prints 4 as the user has only read permission.
 permission = permission | write;
 console.log(permission); // prints 6 as the user has read + write
 permission = permission | exec;
 console.log(permission); // prints 7 as the user has RWX permission
 ```

 just like the chmod in linux access permission.

---

# Control Flow

### If Else
```javascript
let hour = 20;
if (hour >= 6 && hour < 12)
  console. log( 'Good Morning');
else if (hour >= 12 && hour < 18)
  console. log( 'Good Afternoon');
else
  console. log( 'Good evening' ) ;
```
**Take aways,**
1. There is no endif in Javascript
2. A block of statements need an { }

### Switch Case
```javascript
let role = 'guest';
switch (role) 
{
  case 'guest':
  console.log('The user is a ' + role);
  break;

  case 'moderator':
  console.log('The user is a ' + role);
  break;

  default:
  console.log('The user is undefined');
}
```
**Take aways,**
1. Like SQL, we have to define what are we switching first and then followed by cases. The whole switch block don't need to be terminated by ;
2. Each cases need to be terminated by :
3. We need to specify ```break;```  explicitly to break out of the case. or else all the cases will be executed if the condition passes.
4. The ```other``` equivalent in RPGLE is ```default:```. This don't need ```break;``` as it will be the last part of the switch case that will be executed. 

### For Loop
```javascript
//Print Even numbers from 1 to 10 using for loop

for (let i = 1; i <= 10; i++)
{
  if (i % 2 == 0)
    console.log(i);
}
```

### While
```javascript
// Print Even numbers from 1 to 10 using while loop
// While loop checks the condition at entry.

let i = 1;
while ( i <= 10)
{
  if (i % 2 == 0)
    console.log(i);
  i++;
}
```

### Do While
```javascript
// Print Even numbers from 1 to 10 using do while loop
// While loop checks the condition at exit.

let i = 1;
do
{
  if (i % 2 == 0)
    console.log(i);
  i++;
}
while (i <= 10);
```

**Take aways,**
1. There is no ending ```;``` for the whole "for & while block".
2. For the Do While loop, a ```;``` is placed at the "while" condition at last. 
3. There is no ending ```;``` for the incrementor (as in i++)

### For in
```javascript
// Just like "for in" in python, we can use this to iterate an object/element without defining it explicitly.


const person = {
  name: 'Ravi',
  age: 31
}

for (let jum in person)
  console.log(jum, person[jum]);

const colors = ['red', 'green', 'yellow', 'black'];

for (let idx in colors)
  console.log(idx, colors[idx]);
```

**Take aways,**
1. The "For in" loop is used to traverse between the list (a.k.a array) or object (that contains multiple properties). Or simply, it means, **iterating over the indexes.**


### For-of 
```javascript
const colors  = ['red', 'green', 'blue'];

for (let color of colors)
  console.log(color)
```

**Take-aways**
1. For of is used to directly get the values of an array. Whereas For in is used to get the index first.
2. **For in can be used in both arrays and objects. But For ofs can be mostly used in arrays only.**

### Modify Control Flow
1. Use ```break;``` to break the loop.
2. Use ```continue;``` to iterate the loop.

---
# Objects

## Definition and declaration
1. Objects are just a collection of key value pairs.
2. can be declared using ```const objectname = {}``` or ``` let objectname = {}``` Inside the curly braces, we can declare variables, arrays, functions(that may operate on the declared variables) and even objects.
3. Note that the functions inside an object is called as "method"
4. Object, just like any other variable ends with a ```;```
  ```javascript
  const circle = {
    radius: 1, // declaring a variable
    location: { //declaring an object inside an object
      x: 1,
      y: 2
    },
    isVisible: true, // declaring a boolean operator
    draw: function(){ // declaring a method
      console.log('drawing at the position', this.location.x, this.location.y);
    }
  };

  //Output
  // circle.draw(); // The draw() method is called 
  // drawing at the position 1 2
  ```  

## Factory Functions

1. A factory function is a function that can return a newly created object. 
2. It is convention to define a Factory function in camelNotation()
3. We can directly return an object from a function.
4. We can pass parameters to the function and create object variables accordingly.
5. We can also create functions inside objects and return it


```js
function createCircle(parm1,parm2){
    return {
      parm1: parm1,
      parm2: parm2, 
      myfunc() {
        console.log('Calling myfunc ');
        result = parm1+parm2;
        results = 'The addition is ' + result;
        return results;
      },
      output() {
        console.log('Calling output function ' + parm1, parm2);
      }
    };
  }
  const circle1 = createCircle(5,2);
  console.log('>>>>>logging the circle1 object')
  console.log(circle1);
  console.log('>>>>>logging the circle1.myfunc() function');
  console.log(circle1.myfunc());
  console.log('>>>>>Calling the circle1.output() function directly');
  circle1.output();
  console.log('>>>>>Assigning the output of myfunc() to a variable called final_result');
  let final_result = circle1.myfunc();
  console.log('>>>>>Logging the return value from circle1.myfunc() ' + final_result);

// Output
// >>>>>logging the circle1 object
// {parm1: 5, parm2: 2, myfunc: ƒ, output: ƒ}
// >>>>>logging the circle1.myfunc() function
// Calling myfunc 
// The addition is 7
// >>>>>Calling the circle1.output() function directly
// Calling output function 5 2
///>>>>>Assigning the output of myfunc() to a variable called final_result
// Calling myfunc 
// >>>>>Logging the return value from circle1.myfunc() The addition is 7
```




## Constructor Function.
1. Just like factory function, the job of a constructor is to create an object. 
2. Constructor Functions are defined as PascalNotation()  
3. Constructors provide a blueprint for creating multiple objects with the same structure and behavior, promoting code reuse and encapsulation.
4. It is invoked with a `new` operator.
5. Inside the constructor function, `this` refers to the newly created object, allowing properties and methods to be assigned to it.
6. We don't have to explicitly return the object to the caller. It is done under the hood.

```Javascript
function Circle(radius) {
  console.log('A new object is created using', radius);
  this.radius = radius;
  this.draw = function(){
    console.log('draw');
  }

}
 new Circle(1); // a new circle object with radius 1 is created and returned but not stored.
 const dummy = new Circle(3); // a new cirlce object with radius 3 is created and returned to dummy 
 dummy.draw(); // the dummy object contains a method called draw and it is invoked. 

```

## Key differences b/w Constructor & Factory Functions
| Factory | Constructor |
| -- | -- |
| A new object is returned to the caller using `Return` Keyword | There is no return keyword, but the constructor function will return the object when called. 
| Can be identified by explicit use of `return` keyword | Can be identified by explicit use of `this` keyword. It is used to refer the newly created object
| camelNotation() | PascalNotation()
| `const dummy = createCircle(1)` | `const dummy = new Circle(1)`


## Dynamic Nature of objects.
Function's properties and objects are dynamic. i.e. we can create/edit/delete an object's property after it is created. Only limitation is that we cannot reassign the object variable.

```js

const circle = {
  radius: 1
}
// The object circle has one property named radius and it is 1. 

circle.color = 'yellow'; // a new property called color is added and assigned the value 'yellow'
circle.draw = function(){
  console.log('draw'); // a new method called draw() is added.

delete circle.color; // delete any property
console.log(circle); 
}
```
**Note**: It is also possible to convert a primitive data type to an object, take a look at the code below.
```js
let myNum = 8; // declared a primitive data type number
typeof myNum // 'number'
myNum.square = 64; //added a new property called square and immediately this myNum will be converted to an object.

```

## Constructor Property of Objects
1. Every object in JS has a property called constructor. And that points the function that was used to construct/create the object.


## Functions are objects

___

# Callbacks and promise
## Callback: 
A callback is a function that is passed as an argument to another function and is executed after its parent function has completed. Callbacks are often used in asynchronous operations such as reading files or making HTTP requests where you don’t know when the operation will complete. Here’s a simple example:

```JavaScript

function greet(name, callback) {
    console.log('Hello ' + name);
    callback();
}

greet('John', function() {
    console.log('The greeting is done.');
});
```

In this example, the anonymous function `function() { console.log('The greeting is done.'); }` is a callback that is called after the greet function is done.

## Promise: 
A Promise is an object that represents the eventual completion or failure of an asynchronous operation. It returns a single value which is either a value (in case of success) or a reason (in case of failure). Promises are used to handle asynchronous operations in a more flexible way than callbacks. Here’s a simple example:

```JavaScript

let promise = new Promise(function(resolve, reject) {
    // some code
    if (/* everything turned out fine */) {
        resolve("Stuff worked!");
    } else {
        reject(Error("It broke"));
    }
});

promise.then(function(result) {
    console.log(result); // "Stuff worked!"
}, function(err) {
    console.log(err); // Error: "It broke"
});
```

In this example, the new Promise constructor takes a function as an argument. This function takes two parameters: resolve and reject, which are both functions. If the operation was successful, resolve is called with the resulting value. If the operation failed, reject is called with the error.

In summary, both callbacks and promises are used for handling asynchronous operations in JavaScript, but promises provide a more powerful and flexible mechanism for chaining asynchronous operations together.

- 29 https://codewithmosh.com/p/the-ultimate-html-css 
- 15 https://codewithmosh.com/p/ultimate-react-part1
- 15 [React 18: Intermediate Topics (codewithmosh.com)](https://codewithmosh.com/p/ultimate-react-part2)
- 10 [The Ultimate TypeScript Course (codewithmosh.com)](https://codewithmosh.com/p/the-ultimate-typescript)
- 15 NodeJS
