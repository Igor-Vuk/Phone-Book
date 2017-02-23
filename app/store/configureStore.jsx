var redux = require("redux");
var {searchTextReducer, contactsReducer} = require("reducers");

export var configure = () => {
    var reducer = redux.combineReducers({
        searchText: searchTextReducer,
        contacts: contactsReducer
    });

    var store = redux.createStore(reducer, redux.compose(
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ));

    return store;
};