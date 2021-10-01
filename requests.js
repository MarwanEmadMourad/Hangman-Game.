// making HTTP (Hyper Text Transfer Protocol) request

// notice that this is a wrapper function that return a new promise back
// we tend to do this as the promise constuctor only takes 2 args only which are resolve and reject
// so if we need to pass a third argument like in this case wrap the promise inside a function

const getPuzzle = (wordCount) => new Promise ((resolve,reject) =>{
    const request = new XMLHttpRequest()
    request.open('GET',`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    request.send()
    
    request.addEventListener('readystatechange',(e)=>{
        if (e.target.readyState === 4 && e.target.status == 200){
            const data = JSON.parse(e.target.responseText)
            resolve(data.puzzle)
        } else if (e.target.readyState === 4){
            reject(`Couldn't retrieve data.`)
        }
    })
})

// we are able to call .then on getPuzzle as it returns a promise
getPuzzle('5').then(
    (data)=>{
        console.log(data)
    } ,
    (err)=>{
        console.log(err)
    }
)



