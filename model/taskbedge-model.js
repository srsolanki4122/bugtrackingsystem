const mongoose = require ("mongoose")

//schema
let TaskbedgeSchema = new mongoose.Schema({
    bedgeName:{
        type:String
    }
})

//model
let TaskbedgeModel = mongoose.model("taskbedge",TaskbedgeSchema) //taskbedge

module.exports = TaskbedgeModel