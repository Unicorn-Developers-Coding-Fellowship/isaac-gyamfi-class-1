const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// controllers
const getHomeController = (req, res) => {
  res.render('home');
};

// routes
app.get('/', getHomeController);
app.get('/about');
app.get('/products');

app.listen(3000, () => console.log('Server is working'));
