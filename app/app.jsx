var React = require("react");
var ReactDOM = require("react-dom");
var {Provider} = require("react-redux");


var ContactApp = require("ContactApp");
var actions = require("actions");
var store = require("configureStore").configure();

//Monitor change of state
// store.subscribe(() => {
//     var state = store.getState();
//     console.log("New state", state);
// });

store.dispatch(actions.startAddContacts());

//Load foundation
$(document).foundation();

//app.scss
require("applicationStyles");

ReactDOM.render(
    //Provider lets children components to use the store
    //We use store attribute to reference to store we defined above
    <Provider store={store}>
        <ContactApp/>
    </Provider>,
    document.getElementById("app")
);