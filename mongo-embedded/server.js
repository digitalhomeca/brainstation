const express = require('express'),
    app = express(),
    bodyParser = require ('body-parser');

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json 
app.use(bodyParser.json())


const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// export in kittens is an object exporting model and schema so have require the model property
const Kitten = require ('./models/Kittens').model;

const Shelter = require ('./models/Shelter').model;



mongoose.connect("mongodb://localhost:27017/animals");
const connection = mongoose.connection;


connection.on('open', ()=> {
    console.log('mongoose is connected');
})

connection.on('error', (err)=> {
    console.log(err);
})

// const billy = new Kitten({
//     name: 'billy',
//     hair_length: 1.7
// });

// create new shelter which has embedded document 
// const shelter = new Shelter ({
//     name: 'House of Meow',
//     kittens : [billy]
// });

// savedShelter is the response from mongo
// save the parent document will create the embedded document
// shelter.save ()
//     .then(savedShelter => {
//         console.log(savedShelter);
//     })
//     .catch(err => {
//         console.log(err);
//     });

// Shelter.findOne({name: "House of Meow"})
//     .then(house => {
//         const billy= house.kittens.id('598dc766787604093c989eef');
//         console.log(billy);
//     })
//     .catch(err => {
//         console.log(err);
//     });

// Update the cat

    // Shelter.findOne({name: "House of Meow"})
    //     .then(house => {
    //         const billy= house.kittens.id('598dc766787604093c989eef');
    //         console.log(billy);
    //         house.save()
    //             .then(saveHouse => {

    //             })
    //             .catch(err => {console.log(err);})
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     });


// Deleting embedded document
// Shelter.findOne({name: "House of Meow"})
//     .then(house => {
//         house.kittens.splice(0,1);

//         house.save()
//             .then(saved => console.log(saved))
//             .catch(err => console.log(err));
//     })
//     .catch(err => {
//         console.log(err);
// });

// const clover = new Kitten({
//     name: 'clover',
//     hair_length: 0.5
// });

// clover.save() 
//     .then(savedKitten =>
//     {
//         console.log('saved new kitten');
//     })
//     .catch(err => {
//         console.log(err);
//     });



// const pumpkin = new Kitten({
//     name: 'pumpkin',
//     hair_length: 2.0
// });

// pumpkin.save() 
//     .then(savedKitten =>
//     {
//         console.log('saved new kitten');
//     })
//     .catch(err => {
//         console.log(err);
//     });

// Kitten.find({})
//     .then(kittens => {
//         console.log(kittens);
//     })
//     .catch(err=> {
//         console.log(err);
//     })

// same but checks to make sure that something is returned or else could be null
// Kitten.find({})
//     .then(kittens => {
//         if (kittens) {
//             console.log(kittens);
//         } 
//     })
//     .catch(err=> {
//         console.log(err);
//     })

// $gte means greater than or equal
// Kitten.find({hair_length: {$gte: 1}})
//     .then(kittens => {
//         if (kittens) {
//             console.log(kittens);
//         } 
//     })
//     .catch(err=> {
//         console.log(err);
//     })

    
// find by id
// Kitten.findById('598cbe8307ac0a12d08aa675')
//     .then(kitten => {
//             console.log(kitten);
//     })
//     .catch(err=> {
//         console.log(err);
//     })

// null result when id not found
// Kitten.findById('dsa34')
//     .then(kitten => {
//             console.log(kitten);
//     })
//     .catch(err=> {
//         console.log(err);
//     })

// Update specific record using findOneAndUpdate and pass three arguments (primary key, data to change, options object)

// const updateData = {
//     hair_length: 0
// };
// Kitten.findOneAndUpdate({id:'598cc0c26093231410dcdeda'},updateData, {})
//     .then(result => {
//             console.log(result);
//     })
//     .catch(err=> {
//         console.log(err);
//     })

// Delete specific record
// Kitten.findOneAndRemove({name: 'pumpkin'})
//     .then(result => {
//             console.log(result);
//     })
//     .catch(err=> {
//         console.log(err);
//     })


// app.listen(9090, ()=> {
//     console.log('listening');
// })

// app.post('/kittens', (req, res) => {
//     console.log(req.body);

//     const pumpkin = new Kitten(req.body);

//     pumpkin.save()
//             .then(savedKitten => {
//                 console.log(savedKitten);
//                 res.json(savedKitten);
//             })
//             .catch(err => {
//                 console.log(err);
//                 res.json(err);
//             })    
// })