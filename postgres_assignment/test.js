







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
