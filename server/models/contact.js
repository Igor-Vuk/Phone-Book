var mongoose = require("mongoose");

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
        type: Number 
    }
});

module.exports = {Contact};