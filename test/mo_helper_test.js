const mongoose = require('mongoose');

before((done) => {

    mongoose.connect("mongodb://localhost/mongotube", { useNewUrlParser: true });
    mongoose.connection
        .once('open', () => {
            console.log("Connected");
            done();
        })
        .on('error', () => {
            console.log("Your error : ", error);
        });

});

beforeEach((done) => {
    mongoose.connection.collections.students.drop(() => {
        console.log("Drop Success");
        done();
    });
});



