// Add your code here

const { bodyParser } = require("json-server")

function submitData(userName, userEmail){
    const configurationObject= {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body:JSON.stringify({
            "name": userName,
            "email": userEmail
        })
    }
    return fetch("http://localhost:3000/users", configurationObject)
    .then(function(response){
        return response.json();
    })
    .then(function(body) {
        return addToDOM(body.id)
    })
    .catch(function(message){
        return addToDOM(message);
    })

};

function addToDOM(newID){
    document.getElementsByTagName("body")[0].innerHTML= newID;
    document.body.append(newID)
}
