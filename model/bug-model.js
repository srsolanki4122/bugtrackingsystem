const mongoose = require("mongoose")

const BugSchema = new mongoose.Schema({
    bugName:{
        type:String,
        required:true
    },
    bugPriority:{
        type:String
    },
    setPriority:{
        type:Number
    },
    bugDesc:{
        type:String
    },
    date:{
        type:Date
    }
    
})


const BugModel = mongoose.model("bug",BugSchema)
module.exports = BugModel