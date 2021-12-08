const mongoose = require('mongoose');
// const autoIncrement = require('mongoose-auto-increment');

const IncidentSchema = mongoose.Schema({
    timeStamp : {
        type : Date,
        default : Date.now
    },
    hostName : {
        type : String
    },
    policyId : {
        type : String
    }
});

module.exports = mongoose.model('Incident',IncidentSchema);