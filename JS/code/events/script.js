const iputEle = document.getElementById('na')
const para= document.getElementById('para')
function fun ()
{
    console.log("hello world")
}
function makeInput ()
{
    para.textContent=iputEle.value
}
function makeInput2() {
	para.textContent = document.getElementById("choice").value
}
let a = 20, b = 30;
document.body.onkeydown = function (e)
{
    console.log(e)
    if (e.key == 'a')
    {
        console.log("addition is "+(a+b))
    }
    else
    {
            console.log("press a for addition")
    }
}


window.onscr