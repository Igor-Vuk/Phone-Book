export var setSearchText = (searchText) => {
    return {
        type: "SET_SEARCH_TEXT",
        searchText
    };
};

export var addContact = (firstName, lastName, email, phoneNumber) => {
    return {
        type: "ADD_CONTACT",
        firstName, 
        lastName, 
        email, 
        phoneNumber
    };
};

export var addContacts = (contacts) => {
    return {
        type: "ADD_CONTACTS",
        contacts
    }
};