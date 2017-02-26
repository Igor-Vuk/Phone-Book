//REDUCERS
//--------------

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
    case "DELETE_CONTACT":
        //using the JS array filter method to remove a specific element from an array without mutating the original state
        return state.filter((contact) => {
            return contact.id !== action.id._id;
        });
    default:
        return state;
    }
};