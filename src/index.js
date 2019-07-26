let express = require('express');
let app = express();

//once you have assigned a value to a variable by const, you can't reassign a new value to it.


//run the command PORT=4444 process.env.PORT = 4444
const PORT = process.env.PORT || 3000;



console.log(process.env.PORT);

//${PORT}
//app.listen(port number,call back())
app.listen(PORT,()=>console.info('Server start to listen on '+ PORT ));

 