const Student = require('../app/student');
const assert = require('assert');

describe('Create Test', () => {
    it('Create user in db', () => {
        //assert(true);
        const bhawani = new Student({name:"Bhawani"});
        bhawani.save()
            .then(()=>{
                assert(!bhawani.isNew);
            })
            .catch(()=>{
                console.log("Error");
            })
    });
});
