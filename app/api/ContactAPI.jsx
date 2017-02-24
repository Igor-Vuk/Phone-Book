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