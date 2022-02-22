const mongoose = require("mongoose")

const TaskSchema = new mongoose.Schema({
    taskName:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    priority:{
        type:String
    },
    totalutilHours:{
        type:Number
    },
    project:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"project"
    },
    module:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"module"
    },
    status:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"status"
    }
})


const TaskModel = mongoose.model("task",TaskSchema)
module.exports = TaskModel