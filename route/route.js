var express = require("express");
let router = express.Router();
let controller = require('../controller/controller')

router.post('/api/dogs/', (req,res) => {
    controller.createDog(req,res);
})

router.get('/api/dogs',(req,res) => {
    controller.getAllDogs(req,res)
})

router.delete('/api/dogs',(req,res) => {
    controller.deleteDog(req,res)
})
module.exports = router