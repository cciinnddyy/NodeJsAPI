let express = require('express');
let app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>console.info('Server start to listen on ${PORT}'));