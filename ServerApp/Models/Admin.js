const mongoose = require('mongoose');

const AdminSchema = mongoose.Schema({
    username : {
        type : String
    },
    password : {
        type : String
    }
});

module.exports = mongoose.model('Admin',AdminSchema);