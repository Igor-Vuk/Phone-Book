var React = require("react");
var ReactDOM = require("react-dom");
var {Route, Router, IndexRoute, browserHistory} = require("react-router");

var ContactApp = require("ContactApp");


//Load foundation
$(document).foundation();

//App css
require("style!css!sass!applicationStyles");

ReactDOM.render(
    <ContactApp/>,
    document.getElementById("app")
);