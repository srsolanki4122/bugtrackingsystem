const mongoose = require ("mongoose")

//schema
let ProjectteamSchema = new mongoose.Schema({
    ProjectteamName:{
        type:String
    },
    Project : {
        type:mongoose.Schema.Types.ObjectId,
        ref:"project"
    },
    User : {
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }
})

//model
let ProjectteamModel = mongoose.model("projectteam",ProjectteamSchema) //projectteam

module.exports = ProjectteamModel