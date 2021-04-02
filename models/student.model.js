const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let studentSchema = new Schema({
    name: { type: String, required: true, max: 100 },
    regId: { type: Number, required: true},
    course: { type: String, required: true, max: 100 },
    gender: { type: String, required: true, max: 100 }
});
// exporting the model 
module.exports = mongoose.model('Student', studentSchema);