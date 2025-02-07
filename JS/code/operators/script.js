// arithematic operators
let a = 3, b = 2;
console.log(a + b) //5
console.log(a - b) //1
console.log(a * b) //6
console.log(a / b) //1.5
console.log(a % b) //1
console.log(a ** b) //9
// relational operators
a = 2; b = '2';
console.log(a == b) //true
console.log(a === b) //false
console.log(a != b) //false
console.log(a !== b) //true

// logical operators
a = 5, b = 10;
console.log((a > 2) && (b > 15))  //false
console.log((a > 2) || (b > 15))  //true
console.log(!(a > 5)) // true

a = 5;
console.log(++a) //6
console.log(a++)  //6

a = 10;

let z = ++a + a++ - a--;
console.log(z)

let x = 5, y = 3;
let result = x++ + --y + --x + y++
console.log(result)

let age = 21;
age >= 18 ? console.log("eligible to vote") : console.log("not eligible to vote");


















