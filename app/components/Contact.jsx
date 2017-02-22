var React = require("react");

var Contact = React.createClass({
    render: function () {
        var {firstName, lastName, email, phoneNumber} = this.props;
        return (
            <div className = "contact-added">

                <div className="row">
                    <div className="column large-4 padd">
                        {firstName} {lastName} 
                    </div>
                    
                    <div className="column large-4 padd">
                        {email} 
                    </div> 
                    <div className="column large-4 padd">
                        {phoneNumber}
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Contact;