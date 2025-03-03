const cartItems = JSON.parse(localStorage.getItem('products'));
const mainDiv = document.getElementById('mainDiv');
displayData(cartItems);
function displayData (data)
{
    data.forEach((data, i) =>
    {
        const item = document.createElement('div')
        item.classList.add("d-flex","justify-content-between")
         const image = document.createElement("img")
		image.src = data.image
        image.height = 100;
		const title = document.createElement("h2")
	   title.textContent = data.title
		const price = document.createElement("p")
		price.textContent = "Price: ₹" + data.price
	    const removeCartButton = document.createElement("button")
		removeCartButton.textContent = "❎"
        item.append(image, title, price, removeCartButton)
        mainDiv.appendChild(item)
    })
}