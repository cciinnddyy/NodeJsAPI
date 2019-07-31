let express = require('express');
let app = express();

let routerPerson = require('./routes/person');
//once you have assigned a value to a variable by const, you can't reassign a new value to it.
let path = require('path');

//to resolve http post body info as express does not know how to handle it by default
//if incoming request contentType is application/json
let bodyParser = require('body-parser');

app.use(bodyParser.json());



//Middleware, access any request and execute serially
app.use((req,res,next)=>{
    console.log(`${new Date().toString()} => ${req.originalUrl},${req.body}`)
    next();
})




//regist the router
app.use(routerPerson);


//Middleware to handle 404 error and 500 error
app.use((req,res,next)=>{
    res.status(404).send('I think we don\'t have that page');
    next();
})


//handler for 500 error
app.use((er,req,res,next)=>{
    console.error(er.stack);
    res.sendFile(path.join(__dirname,'../public/505_error.html'));


})

//run the command PORT=4444 process.env.PORT = 4444
const PORT = process.env.PORT || 3000;



console.log(process.env.PORT);

//${PORT}
//app.listen(port number,call back())
app.listen(PORT,()=>console.info(`Server start to listen on ${PORT}` ));

 