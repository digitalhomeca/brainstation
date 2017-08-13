const mongoose = require('mongoose');
    Schema = mongoose.Schema;

const dealersSchema = new Schema( {
    id: primary key,
    created_at: timestamp,
    updated_at: timestamp,
    make: string,
    city: string,
    province: string,
    postal_code: string,
    street: string
});

const DealersModel = mongoose.model('Dealers',dealersSchema);

module.exports = DealerssModel;