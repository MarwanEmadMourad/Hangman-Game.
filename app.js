const game = new hangman("FUCKED UP",5)
// console.log(game.getPuzzle()) 
// console.log(game.remained) 

const render_puzzle = (game) =>{
    const game_div = document.getElementById("Game-Area")
    game_div.innerHTML = '' 

    const word_p = document.createElement('p')
    const messageStatus = document.createElement('p') 

    word_p.textContent = game.Puzzle 
    messageStatus.textContent = game.MessageStatus 

    game_div.appendChild(word_p)
    game_div.appendChild(messageStatus)
}

render_puzzle(game)
window.addEventListener('keypress',(e)=>{
    if (game.remained){
        const guess = String.fromCharCode(e.charCode)
        game.makeGuess(guess)
        render_puzzle(game) 
    }
    // console.log(game.status)
})

// making HTTP (Hyper Text Transfer Protocol) request
const request = new XMLHttpRequest()
request.open('GET','https://puzzle.mead.io/puzzle')
request.send()

request.addEventListener('readystatechange',(e)=>{
    if (e.target.readyState === 4){
        const data = JSON.parse(e.target.responseText)
        console.log(data)
    }
})
