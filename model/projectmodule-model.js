const mongoose = require("mongoose")

const ProjectmoduleSchema = new mongoose.Schema({
    moduleName:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    estimatedHours:{
        type:Number
    },
    project :{
        type:mongoose.Schema.Types.ObjectId,
        ref:"project"
    }
})


const ProjectmoduleModel = mongoose.model("projectmodule",ProjectmoduleSchema)
module.exports = ProjectmoduleModel