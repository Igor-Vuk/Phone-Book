var React = require("react");
var ReactDOM = require("react-dom");
var {Provider} = require("react-redux");
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
    //Provider lets children components to use the store
    //We use store attribute to reference to store we defined above
    <Provider store={store}>
        <ContactApp/>
    </Provider>,
    document.getElementById("app")
);