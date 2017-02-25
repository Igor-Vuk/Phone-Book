var $ = require("jquery");

module.exports = {
    setContacts: function(contacts) {
        if($.isArray(contacts)) {
            localStorage.setItem("contacts", JSON.stringify(contacts));
            return contacts;
        }
    },
    getContacts: function () {
        var stringContacts = localStorage.getItem("contacts");
        var contacts = [];

        try {
            contacts = JSON.parse(stringContacts);
            console.log(contacts);
        } catch (e) {

        }

        return $.isArray(contacts) ? contacts : [];
    },
    filterContacts: function(contacts, searchText) {
        var filteredContacts = contacts;

        // Filter by searchText
        filteredContacts = filteredContacts.filter((contact) => {
            var firstName = contact.firstName.toLowerCase();
            // searchText = searchText.toLowerCase();
            return searchText.length === 0 || firstName.indexOf(searchText) > -1;
        });

        return filteredContacts; 
    }
};

// var axios = require("axios");

// const SET_CONTACTS = "http://localhost:3000/contacts";

// module.exports = {
//     setContacts: function(contacts){
//         axios.post(SET_CONTACTS, {
//             firstName: contacts,
//             lastName: contacts,
//             email: contacts,
//             phoneNumber: contacts
//         }).then(function(response) {
//             console.log(response);
//         }).catch(function(error) {
//             console.log(error);
//         });
//     },

//     getContacts: function() {
//         return axios.get(SET_CONTACTS).then(function(response) {
//             var contacts = [];
//             contacts = response.data.contacts;
//             console.log(response.data.contacts);
//             return contacts;
//         }, function(error) {
//             throw new Error("Unable to fetch data");
//         });
//     },

// };