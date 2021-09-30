const game = new hangman("FUCKED UP",5)

// caling our callback function
getNewPuzzle((error,puzzle)=>{
    if(error)
        console.log(`Error: ${error}`)
    else
        console.log(puzzle)
})

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




