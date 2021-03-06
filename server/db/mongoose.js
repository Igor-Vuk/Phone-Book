var mongoose = require("mongoose");

//use promises
mongoose.Promise = global.Promise;
if(process.env.NODE_ENV === "development") {
    mongoose.connect("mongodb://localhost:27017/ContactApp");
} else {
    mongoose.connect(process.env.DATABASE_URL);
}


module.exports = {
    mongoose:mongoose
};



