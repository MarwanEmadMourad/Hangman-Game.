let game 
const wordEl = document.getElementById("word")
const messageEl = document.getElementById("message")

window.addEventListener('keypress',(e)=>{
    const guess = String.fromCharCode(e.charCode)
    game.makeGuess(guess)
    render_puzzle() 
})

const startGame = async () =>{
    const puzzle = await getPuzzle('2') 
    game = new hangman(puzzle,5)
    render_puzzle()
}
startGame()

const render_puzzle = () =>{
    wordEl.textContent = game.Puzzle 
    messageEl.textContent = game.MessageStatus 
}   

document.getElementById("reset-button").addEventListener('click', startGame)


