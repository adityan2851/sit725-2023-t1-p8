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

const deleteDog = (req,res) =>{
    let dog = req.body
    model.remove(dog, (error, result)=>{
        if(error){
            res.json({statusCode:400, message:error})
        }
        else{
            res.json({statusCode:200, data: result, message: 'Successfully removed'})
        }
    })
}


module.exports = {createDog, getAllDogs, deleteDog}