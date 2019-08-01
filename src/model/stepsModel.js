let mongoose = require('mongoose');

const server = '127.0.0.1:27017';

const user = 'fitness_701';

const pwd = 'fitness_701';

const database='fitness_702';

mongoose.connect(`mongodb://fitness_702:702@${server}/${database}`,{"user":`${user}`,"pass":`${pwd}`});

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("successfully connect to the MongoDB fitness database");
});


// mongodb does not do any validation it is done by the application layer
let stepsSchema = new mongoose.Schema({
    username: String,
    macAddress: {
        type:Number,
        require:true,
        unique:true
    }
})

// create a model and export the module at the same time

module.exports = mongoose.model("stepsModel",stepsSchema);
module.exports.dbuser = user;
