var React = require('react/addons');

var Header = React.createClass({displayName: "Header",

    render : function() {
        return (
            React.createElement("h1", {className: "header"},
                this.props.name
            )
        )}
});

module.exports = Header;