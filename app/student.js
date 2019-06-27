const mongoose = require('mongoose');

mongoose.Promise = global.Promise; // ES6 BlueBird Promices


const Schema = mongoose.Schema; 

const StudentSchema = new Schema({
    name: String
});

const Student = mongoose.model('student',StudentSchema);

// export
module.exports = Student;


