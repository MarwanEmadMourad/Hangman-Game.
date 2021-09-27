const game = new hangman("New JersEy",5)
console.log(game.getPuzzle()) 
console.log(game.remained) 

const render_puzzle = (game) =>{
    const game_div = document.getElementById("Game-Area")
    game_div.innerHTML = '' 

    const word_p = document.createElement('p')
    const remained_guesses = document.createElement('p') 

    word_p.textContent = game.getPuzzle() 
    remained_guesses.textContent = `Reamined Guesses: ${game.remained}` 

    game_div.appendChild(word_p)
    game_div.appendChild(remained_guesses)
}

render_puzzle(game)
window.addEventListener('keypress',(e)=>{
    if (game.remained){
        const guess = String.fromCharCode(e.charCode)
        game.makeGuess(guess)
        render_puzzle(game) 
    }
    console.log(game.status)
    console.log(message)
})

