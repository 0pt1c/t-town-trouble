var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var port = process.env.PORT || 5000;

var nav = [{
  Link:'/Books',
  Text:'Books'
}, {
  Link: '/Authors',
  Text: 'Authors'
}];

var bookRouter = require('./src/routes/bookRoutes')(nav);
var adminRouter = require('./src/routes/adminRoutes')(nav);
var authRouter = require('./src/routes/authRoutes')(nav);

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.set('views', './src/views');

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('index', {
    title: 'Hello from render',
    nav: nav
  });
});

app.use('/Books', bookRouter);
app.use('/Admin', adminRouter);
app.use('/Auth', authRouter);

app.get('/styledemo', function(req, res) {
  res.render('styledemo/tldr-dark');
});

app.get('/locations', function(req, res) {
  res.send('Locations go here');
});

app.listen(port, function(err) {
  console.log('running server on port ' + port);
});
