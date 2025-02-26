//let var const
function fun ()
{
	if (true) {
		const a = 20
	}
	console.log(a) //error since you can't block scoped variables outside the block
}
//fun()
let val = 25;
console.log(`the value is ${val}`)

//default parameters of function
function fun2 (a=2)
{
    console.log(a+5)
}
fun2()

//REST AND SPREAD
function fun3 (b,c,...a)
{
    console.log(a);
    let d= [...["john","prasad"],4]
    console.log(d);
    let x = [1, 2, 3, 4, 5];
    // [p, ...q] = x;
    // let y= [...q,4,5]

}
fun3(3, 4, 5, 6, 7, 8, 9)

function fruits (a, b, ...c)
{
    const arr = [a, ...c,"john"]
    console.log(arr)
}
fruits("apple", "mango", "banana", "papaya", "dragon")

// using spread to add two arrays
let arr = [1, 2], arr1 = [3, 4]
let res = [...arr, ...arr1]
console.log(res)
// array destructuring
 let arr2 = [5, 4, 3]
 // old way: var a= arr[0],b=arr[1],c=arr[2];
let [a1, b1, c1] = arr2
console.log(a1, b1, c1)
// swap two numbers
function swap (a,b)
{
    console.log(a + "  " + b);
    [b, a] = [a, b];
    console.log(a + "  " + b)
}
swap(5,6)

//object destructuring
 let obj={
        name:"raj",age:50
    }
   const {name,age}=obj;
console.log(name, age)
   
let p2 = {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
        "rate": 3.9,
        "count": 120
    }
}
let { title } = p2 

export {name,age,title}





export default fruits;




 




















