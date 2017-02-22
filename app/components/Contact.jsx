var React = require("react");

var Contact = React.createClass({
    render: function () {
        var {firstName, lastName, email, phoneNumber} = this.props;
        return (
            <div>
                {firstName} {lastName} {email} {phoneNumber}
            </div>
        );
    }
});

module.exports = Contact;