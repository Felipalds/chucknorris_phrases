window.onload = function() {
    showPhrase()
}

function showPhrase(){
    fetch("https://api.chucknorris.io/jokes/random")
    .then(response => response.json())
    .then(body => {
        const chucknorris_joke_p = document.querySelector("#chucknorris_joke_p")
        chucknorris_joke_p.innerText = body.value
    })
}

function nextPhrase(){
    showPhrase();
}