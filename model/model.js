let client = require('../dbConnection');
let collection = client.db('test').collection('Dogs');

const insertDog = (dog, callback) => {
    collection.insertOne(dog, callback);
}

const getAllDogs = (callback) => {
    collection.find().toArray(callback);
}

const remove = (dog, callback) =>{
    collection.deleteOne(dog, callback)
}

module.exports = {insertDog, getAllDogs, remove}