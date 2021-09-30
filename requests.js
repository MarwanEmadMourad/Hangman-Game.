// making HTTP (Hyper Text Transfer Protocol) request
const getNewPuzzle = (callback) =>{
    const request = new XMLHttpRequest()
    request.open('GET','https://puzzle.mead.io/puzzle')
    request.send()

    request.addEventListener('readystatechange',(e)=>{
        if (e.target.readyState === 4 && e.target.status == 200){
            const data = JSON.parse(e.target.responseText)
            // calling our function with undefined meaning no error took place
            callback(undefined,data.puzzle)
        } else if (e.target.readyState === 4){
            callback(`Couldn't retrieve data.`,undefined)
        }
    })
}
