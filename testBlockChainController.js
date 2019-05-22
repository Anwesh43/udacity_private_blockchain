const address1 = "myeqvLZzj1fSzyDJBMG8m4yAoFeqDWk7PQ"
const http = require('http')
const bitcoinMessage = require('bitcoinjs-message')
const hostname = 'localhost'
const port = 8000
var star1 = {
    "ra" : 200,
    "ka" : 300,
    "sa" : 1100
}
const postHeaders =  {
    "content-type" : 'application/json'
}

const createPostCall = (path, data, cb) => {
    const postData = JSON.stringify(data)
    var req = http.request({method : 'POST', hostname, port, path, headers : postHeaders}, (res) => {
        res.setEncoding('utf-8')
        var messageBody = ''
        res.on('data', (body) => {
            messageBody = `${messageBody}${body.toString()}`
        })
        res.on('end', () => {
            cb(messageBody)
        })
    })
    req.write(postData)
    req.end()
}

if (process.argv.length  >= 3) {

    if (process.argv[2] == 'reqva') {
        createPostCall('/requestValidation', {address : address1}, (data) => {
            console.log(data)
          // bitcoinMessage.sign()
          // createPostCall('/submitstar', {address : address1, message : data, signature : signature1, star : star1}, (data) => {
          //     console.log(data)
          // })
        })
    }
    if (process.argv[2] == 'subsa') {
        createPostCall('/submitstar', {address : address1, signature : process.argv[3], star : JSON.parse(process.argv[5]), message : process.argv[4]}, (data) => {
            console.log(data)
        })
    }
}
