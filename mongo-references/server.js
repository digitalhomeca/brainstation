const express = require('express'),
      app = express(),
      bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json 
app.use(bodyParser.json())

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const Kitten = require('./models/Kitten');
const Shelter = require('./models/Shelter');

mongoose.connect('mongodb://localhost:27017/animals');
const connection = mongoose.connection;

connection.on('open', ()=> {
    console.log('mongoose is connected ^_^ \\m/');
});

connection.on('error', (err)=> {
    console.log(err);
});


/* CREATE A NEW KITTIE */

// const hobie = new Kitten({
//     name: 'Hobie',
//     hair_length: 3
// });

// hobie.save()
//         .then(savedKitten => {
//             console.log(savedKitten);
//         })
//         .catch(err => {
//             console.log(err);
//         })

const shelter = new Shelter ({
    name: 'Cat Home',
    kittens: ['598dd12377679132ac9ab47a']
});

shelter.save()
    .then(savedKitten => console.log('saved'))
    .catch(err => console.log(err));

app.listen(9090, ()=> {
    console.log('express is listening....SPOOOOoookky');
})
