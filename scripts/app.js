let game ; 
const wordEl = document.getElementById("word")
const messageEl = document.getElementById("message")

window.addEventListener('keypress',(e)=>{
    const guess = String.fromCharCode(e.charCode)
    if (game.remained)
    {
        game.makeGuess(guess)
        render_puzzle() 
    }
})

const startGame = async () =>{
    const sizes = ['1','2','3']
    const randomSize =  Math.floor(Math.random() * 3);
    const puzzle = await getPuzzle(sizes[randomSize]) 
    const guesses = Math.trunc(puzzle.length - (0.4*puzzle.length))
    game = new hangman(puzzle,guesses)
    render_puzzle()
}
startGame()

const render_puzzle = () =>{
    wordEl.innerHTML = '' 
    messageEl.textContent = game.MessageStatus
    game.Puzzle.split('').forEach((letter) =>{
        const letterSpan = document.createElement('span')
        if (letter !== ' ')
            {
                letterSpan.textContent = letter
                letterSpan.setAttribute("id","valid-letter")
            }
        wordEl.appendChild(letterSpan)
    })
}   


document.getElementById("reset-button").addEventListener('click', startGame)


