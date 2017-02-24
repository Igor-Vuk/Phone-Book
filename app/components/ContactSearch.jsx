var React = require("react");
var {connect} = require("react-redux");
var actions = require("actions");

export var ContactSearch = React.createClass ({
    render: function () {
        var {dispatch, searchText} = this.props;
        return (
            <div className="container__header">
                <input type="search" ref="searchText" placeholder="Search contacts by Name" value={searchText} onChange={() => {
                    var searchText = this.refs.searchText.value;
                    dispatch(actions.setSearchText(searchText));
                }}/>
            </div>
        );
    }
});

export default connect(
    (state) => {
        return {
            showCompleted: state.showCompleted,
            searchText: state.searchText
        };
    }
)(ContactSearch);