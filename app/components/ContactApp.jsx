var React = require("react");
var uuid = require("node-uuid");

import ContactList from "ContactList";
import AddContact from "AddContact";
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
                <h1 className="page-title">Phone Book</h1>

                <div className="row">
                    <div className="column small-centered small-11 medium-6 large-7">
                        <div className = "container">
                            <ContactSearch onSearch={this.handleSearch}/>
                            <ContactList contacts = {filteredContacts}/>
                            <AddContact onAddContact = {this.handleAddContact}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = ContactApp;


{/*<ContactList contacts = {filteredContacts}/>*/}