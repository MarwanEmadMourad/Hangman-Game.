'use strict'
class hangman {
    constructor(word, remainingGuesses) {
        this.char_word = word.toLowerCase().split('')
        this.guessedLetters = []
        this.remained = remainingGuesses
        this.status = 'Playing'
    }
    get Puzzle() {
        let _Puzzle = ''
        this.char_word.forEach(curr_letter => {
            if (this.guessedLetters.includes(curr_letter) === true || curr_letter === ' ') {
                _Puzzle += curr_letter
            } else {
                _Puzzle += '*'
            }
        })
        return _Puzzle
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
        if ( this.Puzzle.includes('*') === false){
            this.status = 'Finshed'
        } else if ( (!this.remained) && this.Puzzle.includes('*') === true) {
            this.status = 'Failed' 
        } 
    }
    get MessageStatus(){
        if (this.status === 'Playing'){
            return `Guesses Left: ${this.remained}.`
        } else if (this.status === 'Finshed'){
            return 'Well done you guessed it right.'
        } else {
            const word = this.char_word.join('')
            return `Sorry you ran out of guesses, the word was "${word}". `
        }
    }
}




