var React = require('react/addons');

var SearchResult = React.createClass({displayName: "SearchResult",

    render : function() {
        return (
            React.createElement("div", {className: "search_result"},
                React.createElement("table", null,
                    React.createElement("tr", null, React.createElement("th", null, "Name"), React.createElement("th", null, "City"), React.createElement("th", null, "State"), React.createElement("th", null, "Country")),
                    React.createElement("tbody", null,

                        this.props.results.map(function(result) {
                            return React.createElement("tr", null, React.createElement("td", null, result.name), React.createElement("td", null, result.city), React.createElement("td", null, result.state), React.createElement("td", null, result.country));
                        })


                    )
                )
            )
        )
    }

});
module.exports = SearchResult;