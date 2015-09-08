// server.js

var express = require('express'),
path = require('path'),
app = express(),
port = 4444,
bodyParser = require('body-parser');

// Make sure to include the JSX transpiler
require("node-jsx").install();

var React = require('react/addons'),
    ReactApp = React.createFactory(require('./app/components/ReactApp.js'));

// Include static assets. Not advised for production
app.use(express.static(path.join(__dirname, 'public')));
// Set view path
app.set('views', path.join(__dirname, 'views'));
// set up ejs for templating. You can use whatever
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    // React.renderToString takes your component
    // and generates the markup
    var reactHtml = React.renderToString(ReactApp({}));
    // Output html rendered by react
    // console.log(myAppHtml);
    res.render('index.ejs', {reactOutput: reactHtml});
});
//Route not found -- Set 404
app.get('*', function(req, res) {
    res.json({
        "route": "Sorry this page does not exist!"
    });
});

app.listen(port);
console.log('Server is Up and Running at Port : ' + port);