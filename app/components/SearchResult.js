var React = require('react/addons');

var SearchResult = React.createClass({displayName: "SearchResult",

    render : function() {
        return (
            <div className="search_result">
                <table>
                    <tr>
                        <th>Name</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Country</th>
                    </tr>
                    <tbody>
                        {this.props.results.map(function(result){
                            return  (
                                <tr><th>{result.name}</th><th>{result.city}</th><th>{result.state}</th><th>{result.country}</th></tr>
                                )
                        })}
                    </tbody>
                </table>
            </div>
        )
    

}});
module.exports = SearchResult;