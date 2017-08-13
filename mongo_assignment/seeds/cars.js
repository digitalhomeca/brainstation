const mongoose = require('mongoose');
const Dealer = require('../models/Dealer');
const Car = require('../models/Car');


module.exports = () => {
    Car.find({}, (err, cars) => {
        if (err) {
            console.log(err);
        } else if (cars.length === 0) {
            Dealer.find({}, (err, dealers) => {
                if (err) {
                    console.log(err);
                } else {
                    if (dealers.length < 2) {
                        console.log('No dealership to use for seeding cars');
                    } else {
                        const carsToSeed = [
                            {make: 'Hyundai', model: 'Elantra', year: 2017, dealership_id: dealers[0]._id},
                            {make: 'Hyundai', model: 'Elantra', year: 2016, dealership_id: dealers[0]._id},
                            {make: 'Hyundai', model: 'Elantra', year: 2017, dealership_id: dealers[1]._id}
                        ];
                        Car.collection.insert(carsToSeed, (err, cars) => {
                            console.log(cars)
                        })
                    }
                }
            })            
        }
    })
}
