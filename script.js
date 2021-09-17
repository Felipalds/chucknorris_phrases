let phrases = []

window.onload = function() {
    showPhrase('random')
}

function showPhrase(param){
    fetch("https://api.chucknorris.io/jokes/" + param)
    .then(response => response.json())
    .then(body => {
        console.log(body)
        const chucknorris_joke_p = document.querySelector("#chucknorris_joke_p")
        chucknorris_joke_p.innerText = body.value
        document.querySelector("#img").src = body.icon_url
        document.querySelector("#favicon").href = body.icon_url

        if(param == 'random') {
            phrases.push(body.id)
            // console.log(phrases)
        }
    })
    return phrases

}

function nextPhrase(){
    showPhrase('random');
}

function previousPhrase(){
    let length = phrases.length
    showPhrase(phrases[length - 2])
    length = length - 1

}