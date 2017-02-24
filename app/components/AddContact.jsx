var React = require("react");
var {connect} = require("react-redux");
var actions = require("actions");

export var AddContact = React.createClass({
    handleSubmit: function (e) {
        e.preventDefault();
        var {dispatch} = this.props;
        var contactText = {};

        var firstName = this.refs.firstName.value;
        var lastName = this.refs.lastName.value;
        var email = this.refs.email.value;
        var phoneNumber = parseInt(this.refs.phoneNumber.value, 10);

        if(firstName && lastName && email && phoneNumber > 0) {
            this.refs.firstName.value = "";
            this.refs.lastName.value = "";
            this.refs.email.value = "";
            this.refs.phoneNumber.value = "";
            
            dispatch(actions.addContact(firstName, lastName, email, phoneNumber));
        }
    },
    render: function () {
        return (
            <div className="container__footer">
                <form onSubmit = {this.handleSubmit}>
                    <input type="text" ref="firstName" placeholder="First Name"/>
                    <input type="text" ref="lastName" placeholder="Last Name"/>
                    <input type="text" ref="email" placeholder="email"/>
                    <input type="number" ref="phoneNumber" placeholder="Phone Number"/>
                    <button className="button expanded">Add Contact</button>
                </form>
            </div>
        );
    }
});

export default connect()(AddContact);