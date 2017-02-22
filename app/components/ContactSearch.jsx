var React = require("react");

var ContactSearch = React.createClass ({
    
    handleSearch: function () {
        var searchText = this.refs.searchText.value;

        this.props.onSearch(searchText);
    },
    render: function () {
        return (
            <div>
                <input type="search" ref="searchText" placeholder="Search contacts by Name" onChange={this.handleSearch}/>
            </div>
        );
    }
});

module.exports = ContactSearch;