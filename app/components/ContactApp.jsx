var React = require("react");
var uuid = require("node-uuid");

import ContactList from "ContactList";
import AddContact from "AddContact";
import ContactSearch from "ContactSearch";



var ContactApp = React.createClass({
    render: function() {
        return (
            <div>
                <h1 className="page-title">Phone Book</h1>

                <div className="row">
                    <div className="column small-centered small-11 medium-6 large-7">
                        <div className = "container">
                            <ContactSearch/>
                            <ContactList/>
                            <AddContact/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = ContactApp;

