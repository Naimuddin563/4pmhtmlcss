// // array
// let marks = [25, 36, 44, 81, 42];
// // console.log(marks[0], marks[2], marks[0] + marks[2])
// // arr[200]=5
// // console.log(marks[25]); //undefined
// console.log(marks.length, marks)
// marks[10] = 25;
// console.log(marks.length, marks);

// let names = [["raj", 20], ["shekhar", 30]]
// console.log(names[0][0]);

// // Array methods
// //push
// let fruits = ["banana", "apple", "mango", "guava"];
// console.log(fruits)
// fruits.push("strawberry","dragon","kiwi")
// console.log(fruits);
// fruits.pop()
// fruits.pop()
// console.log(fruits)
// fruits.unshift("grapes", "orange");
// console.log(fruits);
// fruits.shift();
// console.log(fruits)
// fruits.splice(2, 2, "prasad", "raj")
// console.log(fruits)

// let friends = ["sheldon", "rachel", "ross", "monica", "joey", "stuwart"];
// // 1. delete sheldon and add pheobe
// friends.shift(); friends.unshift("pheobe")
// // friends.splice(0,1,"pheobe")
// // 2. delete stuwart and add chandler
// friends.pop();
// friends.push("chandler")
// //friends.splice(5,1,"chandler")
// //3. add justin between rachel and ross
// friends.splice(2, 0, "justin")
// console.log(friends)

// console.log(friends.reverse())
// console.log(friends.includes("joey"));

// // forEach
// let arr2 = [5, 6, 4, 8, 7];
// let arr3=[]
// arr2.forEach(function (x,ind)
// {
//     let i = x * x;
//     arr3[ind] = i;
// })
// console.log(arr3)

// let arr = [1, 2, 3, 4];
// // 2 4 6 8
// let arr4=arr.forEach(function(v) 
// {
//     return v * 2;
// })
// console.log(arr4)

// let arr5 = arr.map(function (v) {
// 	return v * 2
// })
// console.log(arr5);

// arr = [1, 2, 3, 4]
// arr2 = arr.map(function (v)
// {
//     if (v % 2 == 0)
//     {
//            return v 
//     }
// })
// console.log(arr2)
// arr2 = arr.filter(function (v) {
// 	return v % 2 == 0
// })
// console.log(arr2)

// //some
// arr = [2,4,6,8]
// result = arr.every(function (v)
// {
//     return v%2==0
// })
// console.log(result)

arr = [5, 4, 6, 1,11,51];

console.log(arr.sort())
console.log(arr.sort((a, b) => a - b)) //ascending
console.log(arr.sort((a, b) => b - a)) //descending

arr = [3,4,5,6];
result = arr.reduce(function (pv, curr)
{
    return pv+curr
}, 10)
console.log(result)
 
































































