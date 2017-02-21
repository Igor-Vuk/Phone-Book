var React = require("react");

var Contact = React.createClass({
    render: function () {
        var {id, name, lastName, email, phoneNumber} = this.props;
        return (
            <div>
                {id}. {name} {lastName} {email} {phoneNumber}
            </div>
        );
    }
});

module.exports = Contact;