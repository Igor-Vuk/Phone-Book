var mongoose = require("mongoose");

//Mongoose Model
var Contact = mongoose.model("Contact", {
    firstName: {
        type: String,
        required: true,
        minlength:1,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        minlength:1,
        trim: true
    },
    email: {
        type: String,
        required: true,
        minlength:1,
        trim: true
    },
    phoneNumber: {
        type: Number,
        required: true,
        minlength:1,
        trim: true 
    }
});

module.exports = {Contact};