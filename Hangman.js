const messages = ["That's Correct.",
"That's not quite right.",
"Sorry, you ran out of guesses.",
"Well Done, You made it."]

let message = ''

class hangman {
    constructor(word, remainingGuesses) {
        this.char_word = word.toLowerCase().split('')
        this.guessedLetters = []
        this.remained = remainingGuesses
        this.status = 'Playing'
    }
    getPuzzle() {
        let Puzzle = ''
        this.char_word.forEach(curr_letter => {
            if (this.guessedLetters.includes(curr_letter) === true || curr_letter === ' ') {
                Puzzle += curr_letter
            } else {
                Puzzle += '*'
            }
        })
        return Puzzle
    }
    makeGuess(c) {
        c = c.toLowerCase()
        const isUnique = (this.guessedLetters.includes(c) === false)
        const isBadGuess = (this.char_word.includes(c) === false)
        if (isUnique) {
            this.guessedLetters.push(c)
            if (isBadGuess) {
                (this.remained)--
            }
        }
        if ( this.getPuzzle().includes('*') === false){
            message = messages[3]
            this.status = 'Finshed'
        } else if ( (!this.remained) && this.getPuzzle().includes('*') === true) {
            message = messages[2]
            this.status = 'Failed' 
        } else if (isBadGuess){
            message = messages[1] 
        } else if((!isBadGuess)){
            message = messages[0]
        } 
    }
}




