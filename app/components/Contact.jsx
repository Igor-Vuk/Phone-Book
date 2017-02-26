var React = require("react");
var actions = require("actions");
var {connect} = require("react-redux");


var Contact = React.createClass({
    render: function () {
        var {id, firstName, lastName, email, phoneNumber, dispatch} = this.props;
        return (
            <div className = "contact-added">
                <div className="row">
                    <div className="column large-4">
                        {firstName} {lastName} 
                    </div>
                    
                    <div className="column large-6">
                        <div>Email: <span>{email}</span></div> 
                        <div>Number: <span>{phoneNumber}</span></div>
                    </div> 
                    
                    <div className="column large-2">
                        <button className="small button alert hollow" ref="deleteContact" onClick={() => {
                            dispatch(actions.startDeleteContact(id));
                        }}>Delete</button>
                    </div>
                </div>
            </div>
        );
    }
});

export default connect()(Contact);