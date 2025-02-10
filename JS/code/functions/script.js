// function to print hello world
function display ()
{
  console.log("hello world")   
}
display() //call
display()
// function with parameters
function displayName (n)
{
    console.log(`Welcome to ${n}`)
}
displayName("raj");
// multiple parameters
function add (a,b=10,c)
{
    console.log(a+c)
}
add(2, 3)
add("raj", "shekhar")
add(2, 5, 6)
add(1)
add("raj")

// functions can returns the values
function mul (a, b)
{
    return a * b;
}
let res = mul(5, 4)
console.log(res);






// In js, functions are also treated as a variable
function simple () //normal function
{
    console.log("prasad")
}
let z = function () //function expression
{
    console.log("prasad"); 
};
console.log(simple, z)
let z1 = () => console.log("prasad") //arrow functions
z()
z()


//  function  to add two numbers and print result
// normal function
function add2 (a, b)
{
    console.log(a + b);
}
add2(5, 3);
console.log(add2)
// function expression
let add3 = function (a,b)
{ 
    console.log(a + b); 
}
console.log(add3)
add3(5, 3)
let add4 = (a,b) => console.log(a + b)
console.log(add4)
add4(5,3)





























