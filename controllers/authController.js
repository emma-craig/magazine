// Importing necessary modules and models
const User = require('../models/UserModel');
const Article = require('../models/ArticleModel');
const { check, validationResult } = require('express-validator');
const jwtToken = require('jsonwebtoken');
const { expressjwt: jwt } = require('express-jwt');

// SIGNUP: Registering a new user
exports.signup = (req, res) => {
  // Validate user input using express-validator
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
    });
  }
  // Creating a new user instance and saving it to the database
  const user = new User(req.body);
  user
    .save()
    .then((user) => {
      res.json({
        id: user._id,
        userName: user.userName,
        password: user.password,
      });
    })
    .catch((err) => {
      let errorMessage = 'Something went wrong.';
      if (err.code === 11000) {
        errorMessage = 'User already exists, please log in';
      }
      return res.status(500).json({ error: errorMessage });
    });
};
// LOGIN: Authenticating existing user
exports.login = async (req, res) => {
  // Validate user input using express-validator
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
    });
  }
  // Checking user credentials and generating JWT token for authentication
  const { userName, password } = req.body;
  await User.findOne({ userName: `${userName}` }).then((user) => {
    if (!user) {
      return res.status(400).json({
        error: 'User not found',
      });
    }
    //WHY DOES THIS RETURN ERROR ???
    // if (!user.authenticate(password)) {
    //     return res.status(401).json({
    //         error: "userName or Password does not exist"
    //     });
    // }
    // Setting JWT token as a cookie in the browser
    const token = jwtToken.sign({ _id: user._id }, 'shhhhh');
    res.cookie('token', token, { expire: new Date() + 9999 });
    const { _id, userName } = user;
    return res.json({ token, user: { _id, userName } });
  });
};
// LOGOUT: Clearing user token
exports.logout = (req, res) => {
    console.log('logged out');
    res.clearCookie("token");
    res.json({
        message: "User has signed out"
    });
};
// Protected Routes
exports.isSignedIn = jwt({
  secret: 'shhhhh',
  userProperty: 'auth',
  algorithms: ['HS256'],
});
exports.isAuthenticated = (req, res, next) => {
  let checker = req.profile && req.auth && req.profile._id == req.auth._id;
  if (!checker) {
    return res.status(403).json({
      error: 'ACCESS DENIED',
    });
  }
  next();
};

//Get All users

exports.getAllUsers = (req, res) => {
  const users = User.find({});
  return res.json(arts);
};

//new article

exports.create = (req, res) => {
  // Validate  input using express-validator
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
    });
  }
  // Creating a new article instance and saving it to the database
  const article = new Article(req.body);
  article
    .save()
    .then((article) => {
      res.json({
        title: article.title,
        text: article.text,
        date: article.date,
        fulltext: article.fullText,
        category: article.category,
        image: article.image,
      });
    })
    .catch((err) => {
      let errorMessage = 'Something went wrong.';

      return res.status(500).json({ error: errorMessage });
    });
};

exports.delete_art = (req, res) => {
  const id = req.params.id;
  Article.findByIdAndDelete(id)
    .then(() => {
      res
        .status(202) //
        .send(`Article with ${id} was successfully deleted`); // do a populate to show title
    })
    .catch((err) => {
      res.status(500).json(err);
    });

};
