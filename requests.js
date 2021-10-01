// making HTTP request using fetch instead of XMLhttprequest
// notice that the fetch api already include promise decleration 
// so no need to creat a new promise yourself
// the fetch api returns a promise so it needed to handeled with .then 
// the response.json() will also returns a promise so we need another .then
// the last promise when resolves it will give you the direct object so you can access 
// it's properties as we did with data.puzzle

const getPuzzle = (wordCount) => {
    fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response)=>{
        if (response.status === 200){
            return response.json()
        } else {
            throw ('Cannot fetch puzzle')
        }
    }).then ((data)=>{
        console.log(data.puzzle)
    }).catch((err)=>{
        console.log(err)
    })
}

// just call your get puzzle with your desired word count
// no need for the .then and .catch in here as it is already
// had been taken care of by defualt because of the fetch api 
getPuzzle('1')

