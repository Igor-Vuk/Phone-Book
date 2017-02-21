var React = require("react");
var ContactList = require("ContactList");

var ContactApp = React.createClass({

    getInitialState: function () {
        return {
            contacts: [
                {
                    id: 1,
                    name: "Igor",
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
    render: function() {
        var {contacts} = this.state;
        return (
            <div>
                <ContactList contacts = {contacts}/>
            </div>
        );
    }
});

module.exports = ContactApp;