// console.log(document)
// //selection
// console.log(document.getElementsByTagName('h1'))
// console.log(document.getElementsByClassName('h'))
// console.log(document.getElementById('heading'))
// console.log(document.querySelector('.h'))
// console.log(document.querySelectorAll(".h"))

// let x = document.getElementById("heading").textContent
// x++;
// document.getElementById("heading").textContent = x

let para= document.getElementById('count')
console.log(para.textContent) //0
let c = para.textContent;

function incr ()
{
    c++;
    para.textContent = c;
}
function decr() {
	c--
	para.textContent = c
}









