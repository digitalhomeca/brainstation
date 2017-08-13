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

// // Endpoints

// // GET: Retrieve all car objects

// app.get('/cars', (req,res) => {
//     Car.fetchAll()
//     .then (cars => {
//         res.json(cars.models.map(car => car.attributes))
//     })
//     .catch (error => {
//         res.send(error)
//     })
// });

// // GET: Retrieve all dealership objects

// app.get('/dealers', (req,res) => {
//     Dealer.fetchAll()
//     .then (dealers => {
//         res.json(dealers.models.map(dealer => dealer.attributes))
//     })
//     .catch (error => {
//         res.send(error)
//     })
// });

// // GET: Retrieve a single car object using id

// app.get('/cars/:id', (req,res) => {
//     Car.where({id: req.params.id})
//         .fetch({withRelated: 'dealer'})
//         .then(car => {
//             res.json(car);
//         })
//         .catch (error => {
//         res.send(error)
//     })
// });

// // GET: Retrieve a single dealership object using id

// app.get('/dealers/:id', (req,res) => {
//     Dealer.where({id: req.params.id})
//         .fetch({withRelated: 'car'})
//         .then(dealer => {
//             res.json(dealer);
//         })
//         .catch (error => {
//         res.send(error)
//     })
// });

// // POST: Save a single car object

//  app.post('/cars', (req,res) => {

//     const newCar = new Car({
//     make: req.body.make,
//     model: req.body.model,
//     year: req.body.year,
//     dealer_id: req.body.dealer_id
// })
//     newCar.save()
//         .then(saved => {
//             console.log('added');
//             res.send('success');
//         })
//         .catch (error => {
//             res.send(error)
//     })
// });

// // POST: Save a single dealership object

//  app.post('/dealers', (req,res) => {

//     const newDealer = new Dealer({
//     make: req.body.make,
//     city: req.body.city,
//     province: req.body.province,
//     postal_code: req.body.postal_code,
//     street: req.body.street
// })
//     newDealer.save()
//         .then(saved => {
//             console.log('added');
//             res.send('success');
//         })
//         .catch (error => {
//             res.send(error)
//         })
//  });

// //  PUT: Change attributes for a single car object

// app.put('/cars/:carId', (req,res) => {
//     const updateCar= {
//         make: req.body.make,
//         model: req.body.model,
//         year: req.body.year,
//         dealer_id: req.body.dealer_id
//     }

//     new Car ({id: req.params.carId})
//         .save(updateCar,{patch: true})
//         .then(updated => {
//             res.send('Car Updated');
//         })
//         .catch (error => {
//             res.send(error);
//         })
//     });

// // PUT: Change attributes for a single dealership object

// app.put('/dealers/:id', (req,res) => {
//     const updateDealer= {
//         make: req.body.make,
//         city: req.body.city,
//         province: req.body.province,
//         postal_code: req.body.postal_code,
//         street: req.body.street
//     }

// new Dealer ({id: req.params.id})
//     .save(updateDealer,{patch: true})
//     .then(updated => {
//         res.send('Dealer Updated');
//     })
//     .catch (error => {
//         res.send(error)
//     })
// });

// // DELETE: Delete single car object

// app.delete('/cars/:carId', (req,res) => {
// new Car ({id:req.params.carId})
//     .destroy()
//     .then(result => {
//         console.log(result);
//         res.send('Car Deleted');
//     })
//     .catch (error => {
//         res(error)
//     })
// });


// // DELETE: Delete single dealership object

// app.delete('/dealers/:dealerId', (req,res) => {
//     new Dealer ({id:req.params.dealerId})
//         .destroy()
//         .then(result => {
//             console.log(result);
//             res.send('Dealer Deleted');
//         })
//         .catch (error => {
//             res.send(error)
//         })
// });
