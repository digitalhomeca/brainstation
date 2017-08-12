const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost/data/db/');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log("Connected to db at /data/db/")
});

// const seedDealerships = require('./seeds/dealerships');
// const seedCars = require('./seeds/cars');
// seedDealerships();
// seedCars();

app.listen(8080, () => {
    console.log('SERVER RUNNING ON 8080');
})

// app.get('/cars', (req,res) => {

//     });

// app.get('/cars/:carId', (req,res) => {

//     });

// app.post('/cars', (req,res) => {

//     });

// app.put('/cars', (req,res) => {

//     });

// app.delete('/cars', (req,res) => {

//     });

// app.get('/dealers', (req,res) => {

//     });

// app.get('/dealers/:dealerId', (req,res) => {

//     });

// app.post('/dealers', (req,res) => {

//     });

// app.put('/dealers', (req,res) => {

//     });

// app.delete('/dealers', (req,res) => {

//     });
