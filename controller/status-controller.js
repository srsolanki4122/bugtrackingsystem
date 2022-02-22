const { json } = require("express/lib/response")
const StatusModel = require("../model/status-model")

module.exports.addStatus = function(req,res){
    //db insert role
    let statusName = req.body.statusName
   
    let status = new StatusModel({
        statusName: statusName
    })

    status.save(function(err,success){
        if(err){
            res.json({msg:"Something went to wrong",status:-1,data:err})
        }else{
            res.json({
                msg:"status added",status:200,data:success})
        }
    })

    }

module.exports.getAllStatus = function(req,res){
    StatusModel.find(function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"status ret..",status:200,data:data})  
        }
    })
}

module.exports.deleteStatus = function(req,res){
    let statusId = req.params.statusId

    StatusModel.deleteOne({"_id":statusId},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"remove...",status:200,data:data})  
        }
    })
}


module.exports.updateStatus =function(req,res){
    let statusId = req.body.statusId
    let statusName =req.body.statusName

    StatusModel.updateOne({_id:statusId},{statusName:statusName},function(err,data){
        if(err){
            res.json({msg:"Something want to wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated...",status:200,data:data})
        }
    })

}
    
//satusName