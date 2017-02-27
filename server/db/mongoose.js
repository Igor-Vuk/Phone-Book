var mongoose = require("mongoose");

//use promises
mongoose.Promise = global.Promise;


mongoose.connect("mongodb://igor:4Dfz8R@ds161049.mlab.com:61049/phone_book");


module.exports = {
    mongoose:mongoose
};