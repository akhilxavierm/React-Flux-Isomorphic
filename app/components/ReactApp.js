/** @jsx React.DOM */

var React = require('react/addons');
var AppStore = require('../stores/Stores');
var Header= require('./Header');
var SearchArea=require('./SearchArea');
var SearchResult=require('./SearchResult');
var JsonData=require('../data/fakeData').fakeData;




var ReactApp = React.createClass({displayName: "ReactApp",
    getInitialState:function(){
        return {
            result:JsonData
        };
    },
    componentDidMount: function () {
        AppStore.addChangeListener(this._onChange);

    },
    render: function () {
        return (
            React.createElement("div", {className: "container"},
                React.createElement(Header, {name: "Seach Page"}),
                React.createElement(SearchArea, null),
                React.createElement(SearchResult, {results: this.state.result})
            )


        );
    },
    changeSearch:function(event) {
        var text = event.target.value;
        this.setState({
            search: text
        });
    },
    _onChange:function (){
        var searchResult=AppStore.getSearchResult();
        this.setState({
            result:searchResult
        });
    }
});

/* Module.exports instead of normal dom mounting */
module.exports = ReactApp;