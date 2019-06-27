const Student = require('../app/student');
const assert = require('assert');

describe("Read Tests", () => {
    let reader;
    beforeEach((done) => {
        reader = new Student({name:"Reader"});
        reader.save()
            .then( () => {
                done();
            })
    });
    it("Read Student", (done) => {
        Student.find({name:"Reader"})
            .then((students) => {
                assert(reader._id.toString() === students[0]._id.toString());
                done();
            })
    });
});