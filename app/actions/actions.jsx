var axios = require("axios");

//API endpoints
//-------------------
//post/get data
const SET_CONTACTS = "https://small-phonebook.herokuapp.com/contacts";
//delete data
const DEL_CONTACTS = "https://small-phonebook.herokuapp.com/contacts/id";


//ACTIONS
//-------------------
export var setSearchText = (searchText) => {
    return {
        type: "SET_SEARCH_TEXT",
        searchText
    };
};

export var addContact = (contact) => {
    return {
        type: "ADD_CONTACT",
        contact
    };
};

export var startAddContact = (firstName, lastName, email, phoneNumber) => {
    return (dispatch, getState) => {
        var contact = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phoneNumber: phoneNumber
        };
        
        //save data to mongodb
        axios.post(SET_CONTACTS, {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phoneNumber: phoneNumber
        }).then((res) => {
            dispatch(addContact({
                ...contact,
                //mongo automatically creates id when we save data in the db. Here, we just pull it out. We need id because in ContactList.jsx every contact needs a key
                id: res.data._id
            }));
        });
    };
};

export var addContacts = (contacts) => {
    return {
        type: "ADD_CONTACTS",
        contacts
    };
};

export var startAddContacts = () => {
    return(dispatch, getState) => {

        //retrieve data from mongodb
        axios.get(SET_CONTACTS).then((res) => {
            var contacts = res.data.contacts;
            var arrContacts = [];
            contacts.forEach((contactId)=> {
                arrContacts.push({
                    id:contactId._id,
                    ...contactId
                });
            });
            dispatch(addContacts(arrContacts));
        });
    };
};

export var deleteContact = (id) => {
    return {
        type: "DELETE_CONTACT",
        id
    };
};

export var startDeleteContact = (id) => {
    return (dispatch, getState) => {
        //delete data from mongodb
        axios({
            method: "delete", 
            url: DEL_CONTACTS, 
            data: {
                id: id
            }
        }).then((res) => {
            var delContact = res.data.contact;
            dispatch(deleteContact(delContact));
        });        
    };
};