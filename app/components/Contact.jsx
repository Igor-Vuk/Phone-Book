var React = require("react");

var Contact = React.createClass({
    render: function () {
        var {firstName, lastName, email, phoneNumber} = this.props;
        return (
            <div className = "contact-added">

                <div className="row">
                    <div className="column large-4">
                        {firstName} {lastName} 
                    </div>
                    
                    <div className="column large-4">
                        {email} 
                    </div> 
                    <div className="column large-4">
                        {phoneNumber}
                    </div>
                </div>
            </div>
        );
    }
});

// export default connect()(Contact);
module.exports = Contact;