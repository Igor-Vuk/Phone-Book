var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var {mongoose} = require("./server/db/mongoose");
var {Contact} = require("./server/models/contact")

const PATH = require("path");
const PORT = process.env.PORT || 3000;

app.use(function (req, res, next) {
    if(req.headers["x-forwarded-proto"] === "https") {
        res.redirect("http://" + req.hostname + req.url);
    } else {
        next();
    }
});

app.use(bodyParser.json());

app.use(express.static("public"));


//ROUTES
app.post("/contacts", (req, res) => {
    var newContact = new Contact({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber
    });

    newContact.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.send(e);
    });
});



//to use browser history
app.get("*", function(req, res) {
    res.sendFile(PATH.resolve(__dirname, "public", "index.html"))
});


app.listen(PORT, function () {
    console.log("Express server is up on port " + PORT);
});
