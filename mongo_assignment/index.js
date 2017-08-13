const express = require('express'),
     app = express(),
     bodyParser = require('body-parser');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/mon_assign');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log("Connected to db at /data/db/mon_assign")
});

const Car = require('./models/Car');
const Dealer = require('./models/Dealer');

const seedDealers = require('./seeds/dealers');
const seedCars = require('./seeds/cars');
seedDealers();
seedCars();

app.listen(8080, () => {
    console.log('SERVER RUNNING ON 8080');
})

// // Endpoints

// GET: Retrieve all car objects

app.get('/cars', (req,res) => {
    Car.find({})
    .then (objectsArray => {
        res.json(objectsArray);
    })

    .catch (error => {
        console.log(err);
        res.status(400)
            .json({err});
    })
});

// // GET: Retrieve all dealership objects

app.get('/dealers', (req,res) => {
    Dealer.find({})
    .then (objectsArray => {
        res.json(objectsArray);
    })

    .catch (error => {
        console.log(err);
        res.status(400)
            .json({err});
    })
});

// // GET: Retrieve a single car object using id
// In car use 'findById' method to retrieve record

app.get('/cars/:objectId', (req,res) => {
    Car.findById(req.params.objectId)
    .then (objectsArray => {
        res.json(objectsArray);
    })

    .catch (error => {
        console.log(err);
        res.status(400)
            .json({err});
    })
});

// // GET: Retrieve a single dealership object using id
// in dealer use the 'findone' method to retrieve record

app.get('/dealers/:objectId', (req,res) => {
    Dealer.findOne({"_id":req.params.objectId})
    .then (object => {
        res.json(object);
    })

    .catch (error => {
        console.log(err);
        res.status(400)
            .json({err});
    })
});

// // POST: Save a single car object

app.post('/cars', (req,res) => {
    let object = req.body;
    let newObject = Car(object);

    newObject.save()
        .then(savedObject => {
            res.json(savedObject);
        })
        .catch (error => {
            console.log(err);
            res.status(400)
                .json({err});
        })
});

// // POST: Save a single dealership object

//  app.post('/dealers', (req,res) => {

app.post('/dealers', (req,res) => {
    let object = req.body;
    let newObject = Dealer(object);

    newObject.save()
        .then(savedObject => {
            res.json(savedObject);
        })
        .catch (error => {
            console.log(err);
            res.status(400)
                .json({err});
        })
});
// //  PUT: Change attributes for a single car object

app.put('/cars/:objectId', (req,res) => {
    let __object = req.body;
    let update = {
        make: __object.make,
        model: __object.model,
        year: __object.year,
        dealer_id: __object.dealer_id
    }

    let query = {"_id":req.params.objectId}
    
    Car.findOneAndUpdate (query, update, { new:true, runValidators:true })

        .then(updatedObject => {
            res.json(updatedObject);
        })
        .catch (error => {
            console.log(err)
            res.status(400).json({err});
        })
    });

// // PUT: Change attributes for a single dealership object

app.put('/dealers/:objectId', (req,res) => {
    let __object = req.body;
    let update = {
        make: __object.make,
        city: __object.city,
        province: __object.province,
        postal_code: __object.postal_code,
        street: __object.street
    }

    let query = {"_id":req.params.objectId}
    
    Dealer.findOneAndUpdate (query, update, { new:true, runValidators:true })

        .then(updatedObject => {
            res.json(updatedObject);
        })
        .catch (error => {
            console.log(err)
            res.status(400)
                .json({err});
        })
    });


// // DELETE: Delete single car object

app.delete('/cars/:objectId', (req,res) => {
  Car.findOneAndRemove({"_id":req.params.objectId})
        .then(object => {
            res.json({deleted:true});
        })
        .catch (error => {
            console.log(err);
            res.status(400)
                .json({err});
        })
});


// // DELETE: Delete single dealership object

app.delete('/dealers/:objectId', (req,res) => {
  Dealer.findOneAndRemove({"_id":req.params.objectId})
        .then(object => {
            res.json({deleted:true});
        })
        .catch (error => {
            console.log(err);
            res.status(400)
                .json({err});
        })
});