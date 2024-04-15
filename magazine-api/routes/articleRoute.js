const express = require('express');
var router = express.Router();

const { getAllArticles } = require('../controllers/articleController');

//get all articles
router.get('/articles, getAllArticles');

module.exports = router; // Export the router module
