let express = require('express');
let router = express.Router();
let stepModel = require('../model/stepsModel');

router.get('/step',(req,res)=>{


})


router.post('/step',(req,res)=>{
    console.log(stepModel);
    console.log(stepModel.dbuser);
    if(!req.body){
        return res.status(400).send('it is a bad request');


    }
    //let username  
    let model = new stepModel(req.body);
    model.save().then(doc =>{
        if(!doc||doc.length === 0){
            return res.status('500').send(doc);
        }
        res.status('201').send(doc);
    }).catch(err =>{ 
        res.status('500').json(err);
    });
})

module.exports=router;