var express = require('express');
var libraryServer = express();

const PORT = 3000;

// express config
libraryServer.use(express.json(), function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
})

libraryServer.post('/books', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    var booksArray = [];
    var books = [
        {
            "name": "Diksha"
        }
    ];

    booksArray = books.concat(req.body);
    return res.json(booksArray);
});

libraryServer.get('/books', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.send('Hello');
});

libraryServer.listen(PORT, () => {
    console.log("Server is running on Port:" + PORT);
});