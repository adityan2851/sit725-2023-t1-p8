let expect = require('chai').expect;
let request = require('request');
let url = "http://localhost:3000/api/dogs";
let dog = {
    title:'Title-test',
    link:'Title-test',
    path:'Title-test',
    description:'Title-test'
}

describe('test get all dogs',function(){
    it('return status code of 200', function(done){
        request(url, function (error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    it('return success message', function(done){
        request(url, function (error, response, body) {
            body = JSON.parse(body)
            expect(body.message).to.contain('Success');
            done();
        });
    });

    it('returns an array', function(done){
        request(url, function (error, response, body) {
            body = JSON.parse(body)
            expect(body.data).to.be.a('array');
            done();
        });
    });
});

describe('test post all dog',function(){
    it('insert a dog into database', function(done){
        request.post({url:url, form:dog}, function(error,response,body){
            body = JSON.parse(body)
            expect(body.message).to.contain('Added');
            done();
        })
    })
});

describe('delete a dog',function(){
    it('delete a dog into database', function(done){
        request.delete({url:url, form:dog}, function(error,response,body){
            body = JSON.parse(body)
            expect(body.message).to.contain('removed');
            done();
        })
    })
});

