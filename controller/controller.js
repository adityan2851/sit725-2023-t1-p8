let model = require('../model/model');


const createDog = (req,res) => {
    let dog = req.body;
    model.insertDog(dog, (err, result) =>{
        if(err){
            res.json({statusCode: 400, message: err})
        }
        else{
            res.json({statusCode:200, data: result, message: 'Dog  Successfully Added'})
        }
    })
}

const getAllDogs = (req,res) => {
    model.getAllDogs((err, result) =>{
        if(err){
            res.json({statusCode: 400, message: err})
        }
        else{
            res.json({statusCode:200, data: result, message: 'Successfull'})
        }
    })
}

module.exports = {createDog, getAllDogs}