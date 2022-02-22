const mongoose = require("mongoose")

const ProjectSchema = new mongoose.Schema({
    projectName:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    estimatedHours:{
        type:Number
    },
    startDate:{
        type:Date
    },
    endDate:{
        type:Date
    }
    
})


const ProjectModel = mongoose.model("project",ProjectSchema)
module.exports = ProjectModel