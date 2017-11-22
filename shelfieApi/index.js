const express = require('express');
const bodyParser = require('body-parser');
const flash = require('express-flash');
const session = require('express-session');
const models = require('models');
const mongoose = require('mongoose');
const app = express();

var router = express.Router();

mongoose.connect(process.env.MONGO_DB_URL ||'mongodb://localhost/shelfie');
mongoose.Promise = global.Promise;

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', '"Origin, X-Requested-With, Content-Type, Accept"');
  next();
});

app.use(express.static('views'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 * 30 }}));
app.use(flash());

app.get('/', function(req, res) { res.redirect('/api') })

app.get('/api', function(req, res) {
  res.send({ name: "Anton Potgieter" })
})

app.get('/api/books', function(req, res) {
  models.Book.find({}).then(function(err, books) {
    if (books) {
      res.json(books);
    }
  })
})

app.post('/api/books', function(req, res) {
  models.Book.findOne(req.body).then(function(err, matchingBook) {
    if (! matchingBook) {
      new models.Book(req.body).save().then(function(err, book) {
        if (book) {
          res.send(req.body.title + " has been saved to the database.");
        }
      });
    } else {
      matchingBook.inStock++;
      matchingBook.save(function(err, updatedBook){
        if (updatedBook) {
          res.send(updatedBook.title + " has been updated");
        }
      })
    }
  })
})

const port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log('Web app started on port : ' + port );
});
