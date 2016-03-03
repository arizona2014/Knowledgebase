var mongoose = require('mongoose');

var articleSchema = mongoose.Schema({
	title: {
		type: String,
		index: true,
		required: true
	},
	body: {
		type: String,		
		required: true
	},
	category: {
		type: String,		
		index: true,
		required: true
	},
	date: {
		type: date,
		default: Date.now
	}	
});

var Article = module.exports = mongoose.model('Article', articleSchema);

// Get All Articles
module.exports.getArticles = function(callback){
	Article.find(callback);
}

// Get Article By ID
module.exports.getArticleById = function(id, callback){
	Article.find(callback);
}