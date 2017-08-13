const mongoose = require('mongoose');
    Schema = mongoose.Schema,
    ObjectId = Schema.Types.ObjectId;

const dealerSchema = new Schema( {
    created_at: Date,
    updated_at: Date,
    make: {
        type: String,
        required: true
        },
    city: {
        type: String,
        required: true
        },
    province: {
        type: String,
        required: true
        },
    postal_code: String,
    street: String,
    cars: [{type: ObjectId, ref: 'Car'}]
});



module.exports = mongoose.model('Dealers',dealerSchema);