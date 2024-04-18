const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const { check } = require('express-validator');

const mongoose = require('mongoose');

const User = require('./models/UserModel');

const Article = require('./models/ArticleModel');
const {
  login,
  logout,
  isSignedIn,
  create,
  delete_art,
} = require('./controllers/authController');

require('dotenv').config({ path: '.env' });

// EXPRESS SERVER INSTANCE
const app = express();

app.listen(5000, () => {
  console.log('server running on localhost:5000');
});

// MONGOOSE CONNECTION
mongoose
  .connect(process.env.REACT_APP_DATABASE_URL)
  .then(() => console.log(`Connected to database`))
  .catch((err) => console.error(err));

// Middleware Configuration
// Body-parser to parse incoming request bodies as JSON
app.use(bodyParser.json());

// Cookie-parser for handling cookies
app.use(cookieParser());

// CORS for enabling Cross-Origin Resource Sharing
//

const options = [
  cors({
    origin: '*',
    methods: '*',
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  }),
];

app.use(options);

// Routing
app.get('/articles', async (req, res) => {
  await Article.find({}).then((art) => res.json(art));
});

app.get('/users', async (req, res) => {
  await User.find({}).then((user) => res.json(user));
});

app.post(
  '/login',
  [
    // Validation for email and password
    check('userName', 'Username is required'),
    check('password', 'Password is required').isLength({ min: 8 }),
  ],
  login // Call the login function from the authController
);

app.get('/testroute', isSignedIn, (req, res) => {
  res.send('A protected route');
});

// GET request for user logout
app.get('/logout', () => (req, res) => {
  res.clearCookie('token');
  res.json({
    message: 'User has signed out',
  });
});

app.post('/create', create);

app.delete('/delete/:id', delete_art);
