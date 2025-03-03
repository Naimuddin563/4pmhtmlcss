console.log(this)
function display ()
{
   console.log("hi") 
}
window.display()
// get location
window.navigator.geolocation
    .getCurrentPosition((res) =>
        console.log(res.coords.latitude, res.coords.longitude),
    (err)=>console.log(err))

// document.getElementById('btn').addEventListener('click', () =>
// {
//     window.navigator.share("hi").then((res)=>console.log(res))
// })
let a='prasad'
document.getElementById('btn').addEventListener('click', function ()
{
    window.navigator.mediaDevices
        .getUserMedia({ video: true, audio: true }).then((data) =>
        {
            document.getElementById('vd').srcObject = data; 
        })
     let obj = {
				name: "raj",
			}
    window.localStorage.setItem('name', JSON.stringify(obj))
   
    let x = window.localStorage.getItem('name')
    console.log(x)
})
//There are two basic storages localStorage and sessionStorage




