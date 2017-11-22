const express = require('express');
const Shoes = require('./models/models');
const bodyParser = require('body-parser');
const flash = require('express-flash');
const session = require('express-session');
const models = require('./models/models');
const mongoose = require('mongoose');
const app = express();

var router = express.Router();

mongoose.connect(process.env.MONGO_DB_URL ||'mongodb://localhost/shelfie');
mongoose.Promise = global.Promise;

app.use(express.static('views'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 * 30 }}));
app.use(flash());

app.get('/', function(req, res) { res.redirect('/api') })

app.get('/api', function(req, res) {
  res.send({ name: "Anton Potgieter" })
})

app.post('/api/books', function(req, res) {
  models.Shoe.findOne(req.body).then(function(err, matchingBook) {
    if (! matchingBook) {
      new models.Shoe(req.body).save().then(function(err, shoe) {
        if (shoe) {
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
