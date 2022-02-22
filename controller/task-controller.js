const TaskModel = require("../model/task-model")


module.exports.addTask = function(req,res){
    let taskName = req.body.taskName
    let description = req.body.description
    let priority = req.body.priority
    let totalutilHours = req.body.totalutilHours
    let project = req.body.project
    let module = req.body.module
    let status = req.body.status

    let task = new TaskModel({
        taskName : taskName,
        description : description,
        priority : priority,
        totalutilHours : totalutilHours,
        project : project,
        module : module,
        status : status



    })

    task.save(function(err,data){
        if(err){
            res.json({msg:"Something want wrong",data:err,status:-1})
        }else{
            res.json({msg:"task added",data:data,status:200})
        }
    })

}

//list
module.exports.getAllTasks = function(req,res){

    TaskModel.find().populate(["project","module","status"]).exec(function(err,data){
        if(err){
            res.json({msg:"Something want wrong",data:err,status: -1})
        }else{
            res.json({msg:"tasks ret...",data:data,status:200})
        }
    })
} 

//delete
module.exports.deleteTask = function(req,res){
    let taskId = req.params.taskId
    TaskModel.deleteOne({_id:taskId},function(err,data){
        if(err){
            res.json({msg:"Something want wrong",data:err,status:-1})
        }else{
            res.json({msg:"task removed",data:data,status:200})
        }
    })
}

//update 
module.exports.updateTask = function(req,res){
    let taskId = req.body.taskId
    let taskName = req.body.taskName
    let description = req.body.description
    let priority = req.body.priority
    let totalutilHours = req.body.totalutilHours
    let project = req.body.project
    let module = req.body.module
    let status = req.body.status

    TaskModel.updateOne({_id:taskId},{taskName:taskName,description:description,priority:priority,totalutilHours:totalutilHours,project:project,module:module,status:status},function(err,data){
        if(err){
            res.json({msg:"Something want to wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"task updated...",status:200,data:data})
        }
    })

}
