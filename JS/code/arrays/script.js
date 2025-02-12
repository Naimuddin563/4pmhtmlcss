// array
let marks = [25, 36, 44, 81, 42];
// console.log(marks[0], marks[2], marks[0] + marks[2])
// arr[200]=5
// console.log(marks[25]); //undefined
console.log(marks.length, marks)
marks[10] = 25;
console.log(marks.length, marks);

let names = [["raj", 20], ["shekhar", 30]]
console.log(names[0][0]);

// Array methods
//push
let fruits = ["banana", "apple", "mango", "guava"];
console.log(fruits)
fruits.push("strawberry","dragon","kiwi")
console.log(fruits);
fruits.pop()
fruits.pop()
console.log(fruits)
fruits.unshift("grapes", "orange");
console.log(fruits);
fruits.shift();
console.log(fruits)
fruits.splice(2, 2, "prasad", "raj")
console.log(fruits)

let friends = ["sheldon", "rachel", "ross", "monica", "joey", "stuwart"];
// 1. delete sheldon and add pheobe
friends.shift(); friends.unshift("pheobe")
// friends.splice(0,1,"pheobe")
// 2. delete stuwart and add chandler
friends.pop();
friends.push("chandler")
//friends.splice(5,1,"chandler")
//3. add justin between rachel and ross
friends.splice(2, 0, "justin")
console.log(friends)

console.log(friends.reverse())
console.log(friends.includes("joey"));

// forEach
let arr2 = [5, 6, 4, 8, 7];
let arr3=[]
arr2.forEach(function (x,ind)
{
    let i = x * x;
    arr3[ind] = i;
})
console.log(arr3)











































