const mongoose = require('mongoose');

const PolicySchema = mongoose.Schema({
    scannerCriteria : {
        type : {
            name : {
                type : String
            },
            parameters : {
                type : Array,
                default : "[]"
            }
        }
    },
    action : {
        type : {
            name : {
                type : String
            },
            parameters : {
                type : Array,
                default : "[]"
            }
        }
    },
    directory : {
        type : String
    },
    targetGroupId : {
        type : String
    },
    isActive :{
        type : Boolean
    }
});



module.exports = mongoose.model('Policy',PolicySchema);
