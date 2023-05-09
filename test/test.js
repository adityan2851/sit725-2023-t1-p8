let expect = require('chai').expect;
let request = require('request');

describe('test get all dogs',function(){
    it('return status code of 200', function(done){
        request('http://localhost:3000/api/dogs', function (error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
});

// describe('test post all dog');
