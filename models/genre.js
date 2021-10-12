const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GenreSchema = new Schema({
	name: { type: String, required: true, minLength: 3, maxlength: 100 },
});

// Virtual for genre's URL
GenreSchema.virtual("url").get(function () {
	return "/catalog/url" + this.__id;
});

// Export model
module.exports = mongoose.model("Genre", GenreSchema);