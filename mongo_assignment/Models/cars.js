const mongoose = require('mongoose');
    Schema = mongoose.Schema;

const carsSchema = new Schema( {
    id: primary key
    created_at: timestamp
    updated_at: timestamp
    make: string
    model: string
    year: integer
    dealership_id:integer
});

const CarsModel = mongoose.model('Cars',carsSchema);

module.exports = CarsModel;