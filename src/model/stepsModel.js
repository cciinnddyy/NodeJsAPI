let mongoose = require('mongoose');

const server = '127.0.0.1:27017';

const user = 'fitness';

const pwd = '702';

const database='fitness_702';

mongoose.connect(`mongodb://${user}:${pwd}@${server}/${database}`);

// mongodb does not do any validation

let stepsSchema = new mongoose.Schema({
    username: String,
    macAddress: {
        num:Number,
        required:true,
        unique:true
    }
})

// create a model and export the module at the same time

module.exports = mongoose.model("stepsModel",stepsSchema);
