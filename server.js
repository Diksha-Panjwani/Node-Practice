var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var http = require('http').Server(app)

app.use(express.json(), function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    res.setHeader('Access-Control-Allow-Credentials', true)
    next()
})
var books = [
    {"name": "Diksha"}
]

app.use(express.static(__dirname))
app.use(bodyParser.json)
app.use(bodyParser.urlencoded({extended: false}))

app.post('/books', (req,res) => {
    var booksArray = res.body
    booksArray.array.forEach(book => {
        books.push(book)
    });
})

app.get('/books', (req,res) => {
    res.send('hello')
})

app.listen(300, () => {
    console.log("this is my server")
})