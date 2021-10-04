const getPuzzle = async (wordCount) => {
    let response = await fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
        if (response.status === 200){
            const data = await response.json()  
            return data.puzzle
        } else {
            throw ('Cannot fetch puzzle')
        }
}