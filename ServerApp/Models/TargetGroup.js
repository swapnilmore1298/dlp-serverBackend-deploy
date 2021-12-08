const mongoose = require('mongoose');

// const autoIncrement = require('mongoose-auto-increment');

const TargetGroupSchema = mongoose.Schema({
    groupName : {
        type : String
    }
});

module.exports = mongoose.model('TargetGroup',TargetGroupSchema);