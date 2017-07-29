const express = require('express'),
app = express();
const bodyParser = require('body-parser');

app.listen(8080, ()=> {
    console.log('Server listening on Port 8080');
});


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const jsonParser = bodyParser.json()

var tdlist = {};

app.get('/todo', (req,res) => {
    console.log('get  happened');
        console.log(tdlist);
    res.send(tdlist);
});

app.post('/todo', jsonParser, (req, res) => {
    tdlist = req.body;

    res.send('thnk-you');
});

