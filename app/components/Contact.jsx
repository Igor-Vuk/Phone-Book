var React = require("react");

var Contact = React.createClass({
    render: function () {
        var {id, firstName, lastName, email, phoneNumber} = this.props;
        return (
            <div>
                {id}. {firstName} {lastName} {email} {phoneNumber}
            </div>
        );
    }
});

module.exports = Contact;