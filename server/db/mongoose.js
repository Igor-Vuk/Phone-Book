var mongoose = require("mongoose");

//use promises
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/ContactApp");

module.exports = {
    mongoose:mongoose
};