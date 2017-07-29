const express = require('express'),
      app = express();

//Array of people, there is no need to change this
const PERSONDATA = [{
    name:"michael",
    rank:4,
    age:19,
    score: 66
},{
    name:"emily",
    rank:7,
    age:22,
    score: 37
},{
    name:"sam",
    rank:2,
    age:23,
    score:80
},{
    name:"william",
    rank:10,
    age:26,
    score:11
},{
    name:"james",
    rank:8,
    age:26,
    score:28
},{
    name:"mia",
    rank:5,
    age:28,
    score:54
},{
    name:"isabella",
    rank:1,
    age:31,
    score:100
},{
    name:"alex",
    rank:3,
    age:34,
    score:75
},{
    name:"olivia",
    rank:6,
    age:36,
    score:42
},{
    name:"geoff",
    rank:9,
    age:41,
    score:19
}]


app.set('view engine', 'ejs');

app.get('/render_demo', (req, res)=>{

    const data = {
        people: PERSONDATA
    };

    res.render('demo', data);

});


app.listen(8080, ()=> {
    console.log('we are online :)');
});

app.get('/users/:name', (req,res) => {

    let name = req.params;

    for (var i = 0; i < PERSONDATA.length; i++) {

        if (req.params.name === PERSONDATA[i].name) {
            return res.render('person', (PERSONDATA[i]));
        } 
    }

// if not found then send a not found message
// {name : req.params.name} turns param into an object for use in rendered page

res.render('error', {name : req.params.name});

});