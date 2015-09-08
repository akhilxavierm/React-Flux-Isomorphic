    /** @jsx React.DOM */

var React = require('react/addons');
var ReactApp = require('./components/ReactApp.js');

var mountNode = document.getElementById("react-main-mount");

React.render(new ReactApp({}), mountNode);
