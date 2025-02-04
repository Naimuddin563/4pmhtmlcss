var a = 25; var a = 28
// redeclare is possible in var
a = 44; //reassigning is possible in var
let x = 33;
//let x = 35; // redeclare is not possible in let
x = 22; //reassigning is also possible in let
const y = 21;
//const y = 22; //redeclare is not possible in const
//y = 22; // reassign is not possible
console.log(a)
console.log("hello javascript")
// var is function scoped variable
// let and const are block scoped variables
function fun ()
{
    if (true)
    {
        var a = 55; let b = 36; const c = 34;
    }
    console.log(a,b)
}
fun()






