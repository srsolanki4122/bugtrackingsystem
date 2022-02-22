const { json } = require("express/lib/response")
const TaskbedgeModel = require("../model/taskbedge-model")

module.exports.addTaskbedge = function(req,res){
    //db insert role
    let bedgeName = req.body.bedgeName
   
    let bedge = new TaskbedgeModel({
        bedgeName: bedgeName
    })

    taskbedge.save(function(err,success){
        if(err){
            res.json({msg:"Something went to wrong",status:-1,data:err})
        }else{
            res.json({
                msg:"bedge added",status:200,data:success})
        }
    })

    }

module.exports.getAllTaskbedge = function(req,res){
    TaskbedgeModel.find(function(err,roles){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"bedge ret..",status:200,data:roles})  
        }
    })
}

module.exports.deleteTaskbedge = function(req,res){
    let bedgeId = req.params.bedgeId

    TaskbedgeModel.deleteOne({"_id":bedgeId},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"remove...",status:200,data:data})  
        }
    })
}


module.exports.updateTaskbedge =function(req,res){
    let bedgeId = req.body.bedgeId
    let bedgeName =req.body.bedgeName

    TaskbedgeModel.updateOne({_id:bedgeId},{bedgeName:bedgeName},function(err,data){
        if(err){
            res.json({msg:"Something want to wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated...",status:200,data:data})
        }
    })

}
    
