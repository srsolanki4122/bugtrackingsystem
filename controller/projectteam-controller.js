const ProjectteamModel = require("../model/projectteam-model")


module.exports.addProjectteam = function(req,res){
    let projectteamName = req.body.projectteamName
    let project = req.body.project
    let user = req.body.user

    let projectteam = new ProjectteamModel({
        projectteamName : projectteamName,
        project : project,
        user : user
    })

    projectteam.save(function(err,data){
        if(err){
            res.json({msg:"Something want wrong",data:err,status:-1})
        }else{
            res.json({msg:"project team added",data:data,status:200})
        }
    })

}

//list
module.exports.getAllProjectteams = function(req,res){

    ProjectteamModel.find().populate("project","user").exec(function(err,data){
        if(err){
            res.json({msg:"Something want wrong",data:err,status: -1})
        }else{
            res.json({msg:"project teams ret...",data:data,status:200})
        }
    })
} 

//delete
module.exports.deleteProjectteam = function(req,res){
    let projectteamId = req.params.ProjectteamId
    ProjectteamModel.deleteOne({_id:projectteamId},function(err,data){
        if(err){
            res.json({msg:"Something want wrong",data:err,status:-1})
        }else{
            res.json({msg:"project team removed",data:data,status:200})
        }
    })
}

//update 
module.exports.updateProjectteam = function(req,res){
    let projectteamId = req.body.projectteamId
    let projectteamName =req.body.projectteamName
    let project =req.body.project
    let user = req.body.user

    ProjectteamModel.updateOne({_id:projectteamId},{projectteamName:projectteamName,project:project,user:user},function(err,data){
        if(err){
            res.json({msg:"Something want to wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated...",status:200,data:data})
        }
    })

}
