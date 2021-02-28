// const { FetchError } = require("node-fetch")

const db = 'http://localhost:3000'

// const body = document.querySelector("body")

function submitData(name, email){
    return fetch(db + '/users', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
            'Accept':'application/json'
        },
        body: JSON.stringify({name, email})
    })
    .then(response => response.json())
    .then(newUser => {
        document.body.innerHTML = newUser["id"]
    })
    .catch(error => document.body.innerHTML = error.message)
}
// submitData("john", "email@email.com")