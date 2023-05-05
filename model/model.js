let client = require('../dbConnection');
let collection = client.db('test').collection('Dogs');

function insertDog(dog, callback) {
    collection.insertOne(dog, callback);
}

function getAllDogs(callback){
    collection.find().toArray(callback);
}

module.exports = {insertDog, getAllDogs}