const { use } = require("express/lib/application")
const UsertaskModel = require("../model/usertask-module")


module.exports.addUsertask = function(req,res){
    let user = req.body.user
    let task = req.body.task
    let totalutilHours = req.body.totalutilHours

    let usertask = new UsertaskModel({
        user:user,
        task:task,
        totalutilHours:totalutilHours
    })

    usertask.save(function(err,data){
        if(err){
            res.json({msg:"Something want wrong",data:err,status:-1})
        }else{
            res.json({msg:"user task added",data:data,status:200})
        }
    })

}

//list
module.exports.getAllUsertasks = function(req,res){

    UsertaskModel.find().populate(["user","task"]).exec(function(err,data){
        if(err){
            res.json({msg:"Something want wrong",data:err,status: -1})
        }else{
            res.json({msg:"user tasks ret...",data:data,status:200})
        }
    })
} 

//delete
module.exports.deleteUsertask = function(req,res){
    let usertaskId = req.params.usertaskId
    UsertaskModel.deleteOne({_id:usertaskId},function(err,data){
        if(err){
            res.json({msg:"Something want wrong",data:err,status:-1})
        }else{
            res.json({msg:"user task removed",data:data,status:200})
        }
    })
}

//update 
module.exports.updateUsertask = function(req,res){
    let usertaskId = req.body.usertaskId
    let user = req.body.user
    let task = req.body.task
    let totalutilHours = req.body.totalutilHours

    UsertaskModel.updateOne({_id:usertaskId},{user:user,task:task,totalutilHours:totalutilHours},function(err,data){
        if(err){
            res.json({msg:"Something want to wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated...",status:200,data:data})
        }
    })

}
