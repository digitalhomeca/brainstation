const mongoose = require('mongoose');
    Schema = mongoose.Schema;

const carSchema = new Schema( {
    created_at: Date,
    updated_at: Date,
    make: {
        type: String,
        required: true
        },
    model: {
        type: String,
        required: true
        },
    year: {
        type: Number,
        required: true
    },
    dealership_id:Number
});



module.exports = mongoose.model('Cars',carSchema);