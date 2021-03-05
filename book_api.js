const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express()
const port = 3000

let books = [{
    "isbn": "9777777777777",
    "title": "Looking for Alaska",
    "author": "Teresa Alvarado",
    "publish_date": "2014-12-14",
    "publisher": "Apples",
    "numOfPages": 534,
},
{
    "isbn": "966666666666",
    "title": "How to be a Cat",
    "author": "Oreo ALvarado",
    "publish_date": "2012-07-01",
    "publisher": "Potato",
    "numOfPages": 287,
},
{
    "isbn": "9555555555555",
    "title": "How to Bark in Spanish",
    "author": "Tolby Alvarado",
    "publish_date": "2017-06-01",
    "publisher": "Potato",
    "numOfPages": 948,
}];

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/book', (req, res) => {
    const book = req.body;
    console.log(book);
    books.push(book);

    res.send('Book is added to the database');
});

app.get('/book', (req, res) => {
    res.json(books);
});

app.get('/book/:isbn', (req, res) => {

    const isbn = req.params.isbn;


    for (let book of books) {
        if (book.isbn === isbn) {
            res.json(book);
            return;
        }
    }

    res.status(404).send('Book not found');
});

app.delete('/book/:isbn', (req, res) => {

    const isbn = req.params.isbn;


    books = books.filter(i => {
        if (i.isbn !== isbn) {
            return true;
        }

        return false;
    });

    res.send('Book is deleted');
});

app.post('/book/:isbn', (req, res) => {

    const isbn = req.params.isbn;
    const newBook = req.body;


    for (let i = 0; i < books.length; i++) {
        let book = books[i]

        if (book.isbn === isbn) {
            books[i] = newBook;
        }
    }


    res.send('Book is edited');
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));
