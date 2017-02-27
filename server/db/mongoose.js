var mongoose = require("mongoose");

//use promises
mongoose.Promise = global.Promise;

// if environment variable gets broken we use localhost as backup
var url = process.env.DATABASE_URL || "mongodb://localhost:27017/ContactApp";
mongoose.connect(url);


module.exports = {
    mongoose:mongoose
};