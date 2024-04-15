const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoute = require('./routes/authRoute');
const articleRoute = require('./routes/articleRoute');
// const Article = require("./models/ArticleModel")

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
app.use(cors());
// Routing
app.use('/auth', authRoute);
app.use('/articles', articleRoute);


///// trying something

const ArticleSchema = new mongoose.Schema({
  category: String,
  slug: String,
  title: String,
  text: String,
  fullText: String,
  image: String,
  //  authors: [{type: mongoose.Schema.Types.ObjectId, ref: "Author"}]
});

//Export the articleSchema as Article
const Article = mongoose.model('Article', ArticleSchema, 'article');

/////
app.get('/articles', async (req, res) => {
  await Article.find({})
  .then((art) => res.json(art));
});
