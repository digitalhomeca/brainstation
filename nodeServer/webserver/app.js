const express = require('express');
const app = express();

// starts server and listens on port listed
var port = process.env.port || 3000;
app.listen(port, function() {
    console.log(`Express Server is Running on ${port}`);
    console.log("Press Ctrl-C to quit");
});
 
 app.get('/', function (req, res) {
    return res.sendFile(__dirname + '/public/index.html');
});

 app.get('/hello', function (req, res) {
    res.send('<html><head><link rel="stylesheet" href="/style.css"></head><body><h1>Hello world!</h1></body></html>');
});

app.use(function (req, res, next) {
  console.log(`${new Date} ${req.path} ${req.ip}`);
  console.log(req.path, req.ip);
    next();
});

//static files such as Html, css and image that go along with request (both of these lines can work)
app.use(express.static(__dirname + '/public'));
 
app.get('/name/:firstname', function (req, res) {
    res.send('<html><head><body><h1>Hello ' + req.params.firstname + ' </h1></body></head></html>');
});

app.get('/color', function (req, res) {
    res.json({red : 0, green : 79, blue : 255});
});

app.get('/ip', function (req, res) {
    res.send(req.ip);
});

app.get('/api', function (req, res) {
    res.json({firstname : 'Hugh', lastname : 'Thompson'});
});

 
app.get('/sum', function (req, res) {
    let total = parseInt(req.query.a) + parseInt(req.query.b) + parseInt(req.query.c);
    res.send(total.toString());
});