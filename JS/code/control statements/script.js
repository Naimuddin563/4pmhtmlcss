let x = 5;
if (x > 5)
{
    console.log(x)
}
let isGood = false;
if (isGood)
{
    isGood = false;
}
else
{
    isGood = true;
}
console.log(isGood)


// WAF to return whether a person is eligible to vote or not.
//age is the parameter
function eligibilityCheck (age)
{
    if (age >= 18) return true;
    else return false;
}
 let result= eligibilityCheck(19)
console.log(result)

//WAF to print day of the week based of number of week starting monday as 1
function dayPrint (num)
{
    switch (num) {
        case 1:
            console.log("monday"); break;
        case 2:
            console.log("tuesday"); break;
        case 3:
            console.log("wednesday"); break;
        case 4:
            console.log("thursday"); break;
        default: console.log("enter valid input")
		}
}
dayPrint(5)

let i = 19; // initialization

while (i >= 0)
{
             console.log(i)
    i-=2;
}
// try priniting odd number from 20 to 1 in reverse order using while

i = -19;
do
{
    console.log(i); i -= 2;
} while (i >= 0);


let arr = [5, 4, 3, 2, 1];
for (let x = 0; x <5; x++)
{
    console.log(arr[x])
}
//forEach
arr.forEach((val) =>
{
  console.log(val)  
})
// for..of
arr=[5,4,3,2,1]
for (let x of arr)
{
    console.log(x)
}
for (let x in arr) {
	console.log(x)
}
let movies = [
    {
        "title": "koi milgaya"
    },
    {
        "title":"RRR"
    },
    {
        "title":"KGF"
    }
]
for (let i = 0; i < movies.length; i++)
{
    console.log(movies[i].title)
}
movies.forEach(function (val)
{
    console.log(val.title)
})
for (let i of movies)
{
    console.log(i.title)
}
for (let i in movies)
{
    console.log(movies[i].title)
}






















