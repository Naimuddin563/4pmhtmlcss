fetch("https://official-joke-api.appspot.com/random_joke")
    .then(function (res)
    {
        console.log(res);
        return res.json()
    })
    .then(function (data)
    {
        console.log(data); 
        document.getElementById('joke').textContent = data.setup;
        document.getElementById('punch').textContent= data.punchline
    })
    .catch(function (err) { console.log(err) })
