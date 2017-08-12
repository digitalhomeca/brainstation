const mongoose = require('mongoose');
    Schema = mongoose.Schema,
    kittenSchema = require('./Kittens').schema;


// export in kittens is an object exporting model and schema so have require the kittenschema property

const shelterSchema = new Schema( {
        // name: {type: String, required: true, unique: true}, if want unique name
    name: {type: String, required: true, unique: true},
    kittens: [kittenSchema]
});

const ShelterModel = mongoose.model('Shelter',shelterSchema);

module.exports = {
    schema: shelterSchema,
    model: ShelterModel
};