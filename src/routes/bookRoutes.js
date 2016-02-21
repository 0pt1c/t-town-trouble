var express = require('express');

var bookRouter = express.Router();

var router = function(nav){
  var books = [
    {
      title: 'iWoz',
      genre: 'Autobiography',
      author: 'Steve Wozniak',
      read: true
    },
    {
      title: 'Snowcrash',
      genre: 'Science Fiction',
      author: 'Neal Stephenson',
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
  bookRouter.route('/')
  .get(function(req, res) {
    res.render('bookListView', {
          title: 'Books',
          nav: nav,
          books: books
    });
});

  bookRouter.route('/:id')
  .get(function(req, res) {
    var id = req.params.id;
    res.render('bookView', {
          title: 'Books',
          nav: nav,
          book: books[id]
    });
  });

  return bookRouter;
};
module.exports = router;
