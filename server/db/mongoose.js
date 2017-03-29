var mongoose = require("mongoose");
var config = require("../../config/config.json");
var DATABASE_URL = config.DATABASE_URL;

//use promises
mongoose.Promise = global.Promise;
console.log(DATABASE_URL);
if(process.env.NODE_ENV === "development") {
    mongoose.connect("mongodb://localhost:27017/ContactApp");
} else {
    mongoose.connect(DATABASE_URL);
}


module.exports = {
    mongoose:mongoose
};



