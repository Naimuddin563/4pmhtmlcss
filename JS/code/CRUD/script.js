async function fetchData ()
{
    // fetch("https://dummyjson.com/recipes")
    //     .then((res) => res.json())
    //     .then((data)=>displayData(data))
    //     .catch((err)=>console.log(err))
    try
    {
    const res = await fetch('https://dummyjson.com/recipes');
    const data = await res.json();
    displayData(data)
    }
    catch (err)
    {
        console.log(err)
    }
}
fetchData();
async function postData ()
{
    const name = document.getElementById('na').value;
    const url = document.getElementById("url").value
    const res = await fetch('https://dummyjson.com/recipes/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: name,
            image: url
            /* other recipe data */
        })
    })
    console.log(res)
}
    
document.getElementById('btn').addEventListener('click',postData)
async function deleteData (id)
{
 const res= await   fetch(`https://dummyjson.com/recipes/${id}`, {
        method:'DELETE'
 })
    console.log(res)

}
const mainDiv= document.getElementById('main')
function displayData (data)
{
    console.log(data.recipes);
    mainDiv.textContent=''
    data.recipes.forEach((r) =>
    {
        const receipeDiv = document.createElement('div');
        receipeDiv.classList.add('recipe')
        const recipeImage = document.createElement('img');
        recipeImage.src = r.image;
        recipeImage.alt= r.name
        const recipeTitle = document.createElement('h2')
        recipeTitle.textContent=r.name
        const recipeUpdateButton = document.createElement('button')
        recipeUpdateButton.textContent="update"
        const recipedeleteButton = document.createElement("button")
        recipedeleteButton.textContent = "delete"
        recipedeleteButton.addEventListener('click',()=>deleteData(r.id))
        receipeDiv.append(recipeImage, recipeTitle, recipeUpdateButton, recipedeleteButton)
        mainDiv.appendChild(receipeDiv)
    })
}