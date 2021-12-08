const mongoose = require('mongoose');

// const autoIncrement = require('mongoose-auto-increment');

const ClientSchema = mongoose.Schema({
    hostName : {
        type : String,
        unique : true,
        required : true
    },
    targetGroupId : {
        type : String
    }
});

module.exports = mongoose.model('Client',ClientSchema);