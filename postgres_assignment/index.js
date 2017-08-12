const express = require('express'),
    app = express(),
    bodyParser = require ('body-parser');

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json 
app.use(bodyParser.json())

// starts server and listens on port listed
var port = process.env.port || 8080;
app.listen(port, function() {
    console.log(`Express Server is Running on ${port}`);
    console.log("Press Ctrl-C to quit");
});

// knex required for migrations and models
const knex = require('knex')({
    client: 'pg',
    connection: {
        host : '127.0.0.1',
        user: 'postgres',
        password: 'bs4536',
        database: 'autos',
        charset : 'utf-8'
    }
})

// bookshelf required to carry out CRUD operations

const bookshelf = require('bookshelf')(knex);

// models identify tables and any relationships.

// Cars has foreign key of Dealership ID and BELONGS to dealer
const Car = bookshelf.Model.extend ({
    tableName: 'cars',
    dealer: function(){
        return this.belongsTo(Dealer)
    }
})

// one to many relationship. One dealer, many cars
const Dealer = bookshelf.Model.extend ({
    tableName: 'dealers',
    car: function (){
        return this.hasMany(Car)
    }
})

// Endpoints

// GET: Retrieve all car objects

app.get('/cars', (req,res) => {
    Car.fetchAll()
    .then (cars => {
        res.json(cars.models.map(car => car.attributes))
    })
    .catch (error => {
        res.send(error)
    })
});

// GET: Retrieve all dealership objects

app.get('/dealers', (req,res) => {
    Dealer.fetchAll()
    .then (dealers => {
        res.json(dealers.models.map(dealer => dealer.attributes))
    })
    .catch (error => {
        res.send(error)
    })
});

// GET: Retrieve a single car object using id

app.get('/cars/:id', (req,res) => {
    Car.where({id: req.params.id})
        .fetch({withRelated: 'dealer'})
        .then(car => {
            res.json(car);
        })
        .catch (error => {
        res.send(error)
    })
});

// GET: Retrieve a single dealership object using id

app.get('/dealers/:id', (req,res) => {
    Dealer.where({id: req.params.id})
        .fetch({withRelated: 'car'})
        .then(dealer => {
            res.json(dealer);
        })
        .catch (error => {
        res.send(error)
    })
});

// POST: Save a single car object

 app.post('/cars', (req,res) => {

    const newCar = new Car({
    make: req.body.make,
    model: req.body.model,
    year: req.body.year,
    dealer_id: req.body.dealer_id
})
    newCar.save()
        .then(saved => {
            console.log('added');
            res.send('success');
        })
        .catch (error => {
            res.send(error)
    })
});

// POST: Save a single dealership object

 app.post('/dealers', (req,res) => {

    const newDealer = new Dealer({
    make: req.body.make,
    city: req.body.city,
    province: req.body.province,
    postal_code: req.body.postal_code,
    street: req.body.street
})
    newDealer.save()
        .then(saved => {
            console.log('added');
            res.send('success');
        })
        .catch (error => {
            res.send(error)
        })
 });

//  PUT: Change attributes for a single car object

app.put('/cars/:carId', (req,res) => {
    const updateCar= {
        make: req.body.make,
        model: req.body.model,
        year: req.body.year,
        dealer_id: req.body.dealer_id
    }

    new Car ({id: req.params.carId})
        .save(updateCar,{patch: true})
        .then(updated => {
            res.send('Car Updated');
        })
        .catch (error => {
            res.send(error);
        })
    });

// PUT: Change attributes for a single dealership object

app.put('/dealers/:id', (req,res) => {
    const updateDealer= {
        make: req.body.make,
        city: req.body.city,
        province: req.body.province,
        postal_code: req.body.postal_code,
        street: req.body.street
    }

new Dealer ({id: req.params.id})
    .save(updateDealer,{patch: true})
    .then(updated => {
        res.send('Dealer Updated');
    })
    .catch (error => {
        res.send(error)
    })
});

// DELETE: Delete single car object

app.delete('/cars/:carId', (req,res) => {
new Car ({id:req.params.carId})
    .destroy()
    .then(result => {
        console.log(result);
        res.send('Car Deleted');
    })
    .catch (error => {
        res(error)
    })
});


// DELETE: Delete single dealership object

app.delete('/dealers/:dealerId', (req,res) => {
    new Dealer ({id:req.params.dealerId})
        .destroy()
        .then(result => {
            console.log(result);
            res.send('Dealer Deleted');
        })
        .catch (error => {
            res.send(error)
        })
});

// create a new car and save it

// const newCar = new Car({
//     make: 'TX',
//     model: 'Acura',
//     year: '2012',
//     dealer_id: '4'
// })

// newCar.save()
//     .then(saved => {
//         console.log(saved.attributes)
//     });


// get all cars

// Car.fetchAll()
//     .then (cars => {
//         console.log(cars.models.map(car => car.attributes))
//     })
//     .catch (error => {
//         console.log(error)
//     })

// get cars with a filter (e.g., year is 2017)

// Car.where({year: 2017}) 
//     .fetch ()
//     .then(car=> {
//         console.log(car.attributes);
//     });

// get a single car with id

// Car.where({id: 20})
//     .fetch({withRelated: 'dealer'})
//     .then(results => {
//         console.log(results.attributes);
//         console.log(JSON.stringify(results.relations));
//     });

// update a single car with new attribute values

// const updateData= {
//     year: '2010'
// };

// new Car ({id:11})
//     .save(updateData,{patch: true})
//     .then(updated => {
//         console.log(updated.attributes);
//     });


// get dealership of a single car

// Dealer.where({id:2})
//     .fetch({withRelated: 'car'})
//     .then (dealer => {
//         console.log(dealer)
//     });

// get all cars for a single dealership

// Car.where({id:15})
//     .fetch({withRelated: 'dealer'})
//     .then (car => {
//         console.log(car)
//     });


// Delete Car with ID of 21

// new Car ({id:21})
//     .destroy()
//     .then(result => {
//         console.log(result);
//     });
