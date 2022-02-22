const ProjectModel = require("../model/project-model")

//add project
module.exports.addProject = function(req,res){
    let projectName = req.body.projectName
    let description = req.body.description
    let estimatedHours =req.body.estimatedHours
    let startDate = req.body.startDate
    let endDate = req.body.endDate
    
    let project = new ProjectModel({
        projectName: projectName,
        description: description,
        estimatedHours : estimatedHours,
        startDate: startDate,
        endDate: endDate
    })

    project.save(function(err,data){
        if(err){
            res.json({msg:"Somthing went wrong",status:-1,data:err})
        }else{
            res.json({msg:"project added",status:200,data:data})
        }
    })

}
//list

module.exports.getAllProject = function (req, res) {

    ProjectModel.find(function (err, data) {
        if (err) {
            res.json({ msg: "Something went wrong", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "projects ret...", data: data, status: 200 })//http status code 
        }
    })
}

//delete
module.exports.deleteProject = function(req,res){
    //params userid 
    let projectId = req.params.projectId //postman -> projectid 

    ProjectModel.deleteOne({_id:projectId},function (err, data) {
        if (err) {
            res.json({ msg: "Something went wrong", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "project removed...", data: data, status: 200 })//http status code 
        }
    })
}

//update
module.exports.updateProject = function(req,res){
    let projectId = req.body.projectId
    let projectName =req.body.projectName
    let description =req.body.description
    let startDate =req.body.startDate
    let endDate = req.body.endDate

    ProjectModel.updateOne({_id:projectId},{projectName: projectName,email:email,description:description,startDate:startDate,endDate:endDate},function(err,data){
        if(err){
            res.json({msg:"Something want to wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated...",status:200,data:data})
        }
    })

}
