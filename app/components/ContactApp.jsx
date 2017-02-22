var React = require("react");
var uuid = require("node-uuid");

var ContactList = require("ContactList");
var AddContact = require("AddContact");
var ContactSearch = require("ContactSearch");
var ContactAPI = require("ContactAPI");


var ContactApp = React.createClass({

    getInitialState: function () {
        return {
            searchText: "",
            contacts: ContactAPI.getContacts()
        };
    },
    componentDidUpdate: function() {
        ContactAPI.setContacts(this.state.contacts);
    },
    handleAddContact: function (text) {
        this.setState({
            contacts: [
                ...this.state.contacts, 
                {
                    id: uuid(),
                    firstName: text.firstName,
                    lastName: text.lastName,
                    email: text.email,
                    phoneNumber: text.phoneNumber
                }
            ]
        });
    },
    handleSearch: function(searchText) {
        this.setState({
            searchText:searchText.toLowerCase()
        });
    },
    render: function() {
        var {contacts, searchText} = this.state;
        var filteredContacts = ContactAPI.filterContacts(contacts, searchText);
        return (
            <div>
                <ContactSearch onSearch={this.handleSearch}/>
                <ContactList contacts = {filteredContacts}/>
                <AddContact onAddContact = {this.handleAddContact}/>
            </div>
        );
    }
});

module.exports = ContactApp;