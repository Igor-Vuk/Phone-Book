var React = require("react");
var ReactDOM = require("react-dom");
var {Route, Router, IndexRoute, browserHistory} = require("react-router");

var ContactApp = require("ContactApp");



var actions = require("actions");
var store = require("configureStore").configure();

store.subscribe(()=> {
    console.log("New state", store.getState());
});

store.dispatch(actions.addContact(
    "Goran",
    "Čavić",
    "grc@gmail.com",
    3468876645
));
store.dispatch(actions.setSearchText("Goran"));





//Load foundation
$(document).foundation();

//App css
require("style!css!sass!applicationStyles");

ReactDOM.render(
    <ContactApp/>,
    document.getElementById("app")
);