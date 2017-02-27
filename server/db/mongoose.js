var mongoose = require("mongoose");

//use promises
mongoose.Promise = global.Promise;

// if environment variable gets broken we use localhost as backup
var url = "mongodb://igor:4Dfz8R@ds161049.mlab.com:61049/phone_book";
mongoose.connect(url);


module.exports = {
    mongoose:mongoose
};