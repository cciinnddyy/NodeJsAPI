let express = require('express');
let router = express.Router();


//export that router, that allows us to import it into the index.js 

//localhost:3000?name="?"
router.get('/steps',(req,res)=>{
    if(req.query.name){
        res.send(`You have requested ${req.query.name}`);
    }
    else{
    res.send("Hello cindy");
    }
})

router.get('/steps/:name',(req,res)=>{

    res.send(`Do you want to read ${req.params.name}`);
})

//force to trigger an error
router.get('/error',(req,res)=>{
    throw new Error('This is a forceable error');

})

module.exports = router;

