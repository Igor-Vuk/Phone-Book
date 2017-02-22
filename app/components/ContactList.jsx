var React = require("react");
var Contact = require("Contact");

var ContactList = React.createClass({
    render: function () {
        var {contacts} = this.props;
        var renderContacts = () => {
            if (contacts.length === 0) {
                return (
                    <p className = "container__message">Currently no contacts</p>
                );
            }
            return contacts.map((contact) => {
                return (
                    //spread operator lets us spread all the properties on the object in the individual props and pass them to Contact component
                    <Contact key={contact.id} {...contact}/>
                );
            });
        };

        return (
            <div>
                {renderContacts()}
            </div>
        );
    }
});

module.exports = ContactList;