class hangman {
    constructor(word, remainingGuesses) {
        this.char_word = word.toLowerCase().split('')
        this.guessedLetters = []
        this.remained = remainingGuesses
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
        }
        if (isUnique && isBadGuess) {
            (this.remained)--
        }
    }
}




