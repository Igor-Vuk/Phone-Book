module.exports = {
    filterContacts: function(contacts, searchText) {
        var filteredContacts = contacts;

        // Filter by searchText
        filteredContacts = filteredContacts.filter((contact) => {
            var firstName = contact.firstName.toLowerCase();
            searchText = searchText.toLowerCase();
            return searchText.length === 0 || firstName.indexOf(searchText) > -1;
        });

        return filteredContacts; 
    }
};