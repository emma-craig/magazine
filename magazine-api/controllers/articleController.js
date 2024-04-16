//Get All articles
const Article = require("../models/ArticleModel");


exports.getAllArticles =  async (req, res) => {
     await Article.find({})
    
    return res.json(arts);
  }




 