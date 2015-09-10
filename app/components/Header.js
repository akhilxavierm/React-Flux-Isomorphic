var React = require('react/addons');

var Header = React.createClass({displayName: "Header",

    render : function() {
        return (
			<h1 className="header">{this.props.name}</h1>
        )}
});

module.exports = Header;