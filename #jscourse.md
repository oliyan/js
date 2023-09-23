# Basics
## Variables
- Cannot be started with a number
- Cannot be reserved keyword
- cannot contain hyphen
- Case sensitive
```
let varname = 'test'; // using let to define
var varName = 'test'; // using var to define
 ```

## Primitive/Value Types
- Strings - ```let name = 'Ravi';```
- Numbers - ```let age = 31;```
- Booleans - ```let isEmployed = true;```
- Undefined - ```let maritalStatus = undefined;```
- Null - ```let salary = null;```

## Reference Types / Dynamic Types
- Object 
  -  ```let person = {name: 'Ravi', age: 31};```
  -  Access the objects' attributes by either a dot or bracket notation.
  -  ```person.name = 'Mary';``` - dot notation.
  -  ```person['name'] = 'John'; ``` - bracket notation.
- Array
  - Index start at 0
  - Can be a homogenous or hetergenous type of elements
  - ```let colorarray = ['red','blue','green']```
  - ```const emptyArray = new Array(10);``` - Declaring a new empty array with the length 10.
- Function
  - Just like python or any other function available in modern programming language. 

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
  ```
  console.log(1===1); // TRUE
  console.log(1==='1'); // FALSE because of type mismatch
  ```
  - "Lose Equality" checks for only value. (=\=, !=\=)

```
  console.log(1=='1'); // TRUE because the values are equal
  console.log(true=='1'); // TRUE because the RHS is true in a way
  ```

### "Ternary / Conditional" 
It combines the condition and assignment in a single instruction.
```
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
 ```
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
```
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
```
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
1. Like SQL, we have to define what are we switching first and then followed by cases. The whole switch block don't need ;
2. Each cases need to be terminated by :
3. We need to specify ```break;``` to break out of the case. or else all the cases will be executed if the condition passes.
4. The ```other``` equivalent in RPGLE is ```default:```. This don't need ```break;``` as it will be the last part of the switch case that will be executed. 

### For Loop
```
//Print Even numbers from 1 to 10 using for loop

for (let i = 1; i <= 10; i++)
{
  if (i % 2 == 0)
    console.log(i);
}
```

### While
```
// Print Even numbers from 1 to 10 using while loop
// While loop checks the condition at entry.

let i = 1;
while (i <= 10)
{
  if (i % 2 == 0)
    console.log(i);
  i++;
}
```

### Do While
```
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