var mongoose = require('mongoose');

var categorySchema = mongoose.Schema({
	name: {
		type: String,
		index: true,
		required: true
	},
	description: {
		type: String
	}	
});

var Category = module.exports = mongoose.model('Category', categorySchema);

// Get All Categories
module.exports.getCategories = function(callback){
	Category.find(callback);
}

// Get Category By ID
module.exports.getCategoryById = function(id, callback){
	Category.findById(id, callback);
}

// Get Category Categories
module.exports.getArticleByCategory = function(category, callback){
	var query = { category: category };
	Category.find(query,callback);
}

// Create Category
module.exports.createCategory = function(newCategory, callback){
	newCategory.save(callback);
}