const mongoose = require('mongoose');
const Dealers = require('../models/Dealer');
const dealersToSeed = [
    {make: 'Hyundai', city: 'Toronto', province: 'ON', postal_code: 'M4M 2E4', street: '21 Broadview Ave', reviews: []},
    {make: 'Hyundai', city: 'Thornhill', province: 'ON',  postal_code: 'L4J 1V8', street: '7200 Yonge St', reviews: []}    
] 

module.exports = () => {
    Dealers.find({}, (err, dealers) => {
        if (err) {
            console.log(err)
        } else {
            if (dealers.length === 0) {
                Dealers.collection.insert(dealersToSeed, (err, dealers) => {
                    console.log(dealers)
                })
            }
        }
    })
}