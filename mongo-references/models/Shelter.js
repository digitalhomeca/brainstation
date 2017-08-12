const mongoose = require("mongoose"),
      Schema = mongoose.Schema,
      ObjectId = Schema.Types.ObjectId;

const shelterSchema = new Schema({
    name: {type: String, required: true},
    kittens: [{type: ObjectId, ref: 'Kitten'}]
})

module.exports = mongoose.model('Shelter', shelterSchema);