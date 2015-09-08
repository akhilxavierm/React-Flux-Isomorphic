var React = require('react/addons');
var AppActions = require('../actions/Actions');

var SearchArea = React.createClass({displayName: "SearchArea",
    getInitialState : function() {
        return {
            search: ""
        };
    },
    render : function() {
        return (
            React.createElement("div", {className: "searchArea"},
                React.createElement("input", {type: "text", placeholder: "Search here....", onChange: this.changeSearch}),
                React.createElement("button", {onClick: this.search}, "Search")
            )
        )},
    changeSearch : function(event) {
        var text = event.target.value;
        this.setState({
            search: text
        });
    },
    search : function() {
        AppActions.changeSearch(this.state.search);
    }
});

module.exports = SearchArea;