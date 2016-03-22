var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var books = [
  {
    title: 'iWoz',
    genre: 'Autobiography',
    author: 'Steve Wozniak',
    bookId: 798635,
    read: true
  },
  {
    title: 'Snowcrash',
    genre: 'Science Fiction',
    author: 'Neal Stephenson',
    bookId: 830,
    read: true
  },
  {
    title: 'Anansi Boys',
    genre: 'Fiction',
    author: 'Neil Gaiman',
    read: false
  },
  {
    title: 'Microtrends',
    genre: 'Non-Fiction',
    author: 'Mark Penn',
    read: false
  }
];

var router = function(nav) {

  adminRouter.route('/addBooks')
    .get(function(req, res) {
      var url = 'mongodb://localhost:27017/libraryApp';

      mongodb.connect(url, function (err, db) {
        var collection = db.collection('books');
        collection.insertMany(books, function(err, results) {
          res.send(results);
          db.close();
        });
      });
    });

  return adminRouter;
};

module.exports = router;
