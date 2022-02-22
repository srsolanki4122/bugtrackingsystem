const mongoose = require("mongoose")

const UsertaskSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    task:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"task"
    },
    totalutilHours:{
        type:Number
    }
})


const UsertaskModel = mongoose.model("usertask",UsertaskSchema)
module.exports = UsertaskModel