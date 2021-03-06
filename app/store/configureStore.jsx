import * as redux from "redux";
import thunk from "redux-thunk";
import {searchTextReducer, contactsReducer} from "reducers";

export var configure = (initialState={}) => {
    var reducer = redux.combineReducers({
        searchText: searchTextReducer,
        contacts: contactsReducer
    });

    var store = redux.createStore(reducer, initialState, redux.compose(
        redux.applyMiddleware(thunk)
        // Uncomment to use REDUX DEV TOOLS 
        // ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ));

    return store;
};