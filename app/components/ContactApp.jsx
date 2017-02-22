var React = require("react");
var ContactList = require("ContactList");
var AddContact = require("AddContact");

var ContactApp = React.createClass({

    getInitialState: function () {
        return {
            contacts: [
                {
                    id: 1,
                    firstName: "Igor",
                    lastName: "Vukelic",
                    email: "igvukelic@gmail.com",
                    phoneNumber: 234545643
                }, 
                {
                    id: 2,
                    name: "Zrinka",
                    lastName: "Berdin",
                    email: "zrinkff@gmail.com",
                    phoneNumber: 56456456
                }
            ]
        };
    },
    handleAddContact: function (text) {
        alert("new contact: " + text.firstName + " " + text.lastName + " " + text.email + " " + text.phoneNumber);
    },
    render: function() {
        var {contacts} = this.state;
        return (
            <div>
                <ContactList contacts = {contacts}/>
                <AddContact onAddContact = {this.handleAddContact}/>
            </div>
        );
    }
});

module.exports = ContactApp;