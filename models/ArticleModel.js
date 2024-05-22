
const mongoose = require('mongoose');

//Defining the Article Schema
const ArticleSchema = new mongoose.Schema({
  category: String,
  slug: String,
  title: String,
  text: String,
  fullText: String,
  image: String,
  authors: [{type: mongoose.Schema.Types.ObjectId, ref: "Author"}]
});

// //Export the articleSchema as Article
module.exports = mongoose.model('Article', ArticleSchema, 'article');
