var express = require('express');
var router = express.Router();

var Article = require('../models/article.js')

/* GET all articles listing. */
router.get('/', function(req, res, next) {
  Article.getArticles(function(err, articles) {
	if(err){
		console.log(err);
	}
	res.json(articles);
  });
});

/* GET article by ID. */
router.get('/:id', function(req, res, next) {
  Article.getArticleById(req.params.id, function(err, article) {
	if(err){
		console.log(err);
	}
	res.json(article);
  });
});

/* GET article by ID. */
router.get('/category/:category', function(req, res, next) {
  Article.getArticleByCategory(req.params.category, function(err, articles) {
	if(err){
		console.log(err);
	}
	res.json(articles);
  });
});

module.exports = router;
