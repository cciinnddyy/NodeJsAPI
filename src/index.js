let express = require('express');
let app = express();

//once you have assigned a value to a variable by const, you can't reassign a new value to it.

const PORT = process.env.PORT || 3000;



//${PORT}
//app.listen(port number,call back)
app.listen(PORT,()=>console.info('Server start to listen on '+ PORT ));