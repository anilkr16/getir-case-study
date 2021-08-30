// load the things we need
const mongoose = require('mongoose');
const {Schema} = mongoose;
// define the schema for our employee model
const RecordsSchema = new Schema({
   // Mandatory fields  
   key: {type : String, index: true},
   counts: [Number],
   value: String
}, {
  timestamps: true
});
module.exports = mongoose.model("Records", RecordsSchema)