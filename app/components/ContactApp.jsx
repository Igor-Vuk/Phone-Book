var React = require("react");
var ContactList = require("ContactList");
var AddContact = require("AddContact");
var ContactSearch = require("ContactSearch");
var uuid = require("node-uuid");

var ContactApp = React.createClass({

    getInitialState: function () {
        return {
            searchText: "",
            contacts: [
                {
                    id: uuid(),
                    firstName: "Igor",
                    lastName: "Vukelic",
                    email: "igvukelic@gmail.com",
                    phoneNumber: 234545643
                }, 
                {
                    id: uuid(),
                    name: "Zrinka",
                    lastName: "Berdin",
                    email: "zrinkff@gmail.com",
                    phoneNumber: 56456456
                }
            ]
        };
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
        var {contacts} = this.state;
        return (
            <div>
                <ContactSearch onSearch={this.handleSearch}/>
                <ContactList contacts = {contacts}/>
                <AddContact onAddContact = {this.handleAddContact}/>
            </div>
        );
    }
});

module.exports = ContactApp;