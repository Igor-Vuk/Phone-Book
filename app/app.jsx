var React = require("react");
var ReactDOM = require("react-dom");
var {Provider} = require("react-redux");


var ContactApp = require("ContactApp");
var actions = require("actions");
var store = require("configureStore").configure();



store.dispatch(actions.startAddContacts());

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