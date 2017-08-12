const mongoose = require('mongoose');
    Schema = mongoose.Schema;

const kittenSchema = new Schema( {
    name: {type: String, required: true},
    hair_length: Number
});

const KittenModel = mongoose.model('Kitten',kittenSchema);

module.exports = {
    schema: kittenSchema,
    model: KittenModel

};