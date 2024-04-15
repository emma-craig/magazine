//Get All articles
const Article = require("../models/ArticleModel");


exports.getAllArticles =  (req, res) => {
     Article.find({})
    
    return res.json(arts);
  }




 