const axios = require("axios")
const http = require("http")

const API_LINK = 'https://aws-challenge.quintoandar.com.br/contact/'

const server = http.createServer(function(req,resp){
    axios.post(API_LINK, {
        "company": "string",
        "contactOptIn": true,
        "email": "string",
        "name": "string",
        "phone": "string"
    }).then(function (response) {
        console.log("Api Response: " + response.data.msg)
        resp.end(response.data.msg + "\n\n")
    })
})

server.listen(80, 'localhost', function(){
    console.log("Works on 80")
})
