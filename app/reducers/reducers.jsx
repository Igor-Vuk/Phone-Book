var uuid = require("node-uuid");

export var searchTextReducer = (state="", action) => {
    switch (action.type) {
    case "SET_SEARCH_TEXT":
        return action.searchText;
    default:
        return state;
    }
}; 


export var contactsReducer = (state=[], action) => {
    switch (action.type) {
    case "ADD_CONTACT":
        return [
            ...state,
            action.contact
        ];
    case "ADD_CONTACTS":
        return [
            ...state,
            ...action.contacts
        ];
    default:
        return state;
    }
};