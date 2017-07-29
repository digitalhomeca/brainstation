const express = require('express'),
app = express();

app.listen(8080, ()=> {
    console.log('Server listening on Port 8080');
});

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const user = {
        username : "Yosemite Sam",
        type : "cartoon",
        email : "sam@looneytunes.com"
    };
    res.render('test', user);
});

app.get('/hugh', (req, res) => {
    const person = {
        username : "Hugh Thompson",
        type : "human",
        email : "hught@looneytunes.com",
        phone : {
            home : '419-239-4536',
            mobile : '419-655-1528',
            mobile2 : '419-555-1212'
        }
    };
    res.render('person', person);

});
