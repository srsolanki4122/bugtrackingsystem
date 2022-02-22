const ProjectmoduleModel = require("../model/projectmodule-model")

//add project
module.exports.addProjectmodule = function(req,res){
    let moduleName = req.body.moduleName
    let description = req.body.description
    let estimatedHours = req.body.estimatedHours
    let project = req.body.project
    
    let projectmodule = new ProjectmoduleModel({
        moduleName: moduleName,
        description: description,
        estimatedHours : estimatedHours,
        project:project
    })

    projectmodule.save(function(err,data){
        if(err){
            res.json({msg:"Somthing went wrong",status:-1,data:err})
        }else{
            res.json({msg:"projectmodule added",status:200,data:data})
        }
    })

}
//list

module.exports.getAllProjectmodule = function (req, res) {

    ProjectmoduleModel.find(function (err, data) {
        if (err) {
            res.json({ msg: "Something went wrong", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "projectsmodule ret...", data: data, status: 200 })//http status code 
        }
    })
}

//delete
module.exports.deleteProjectmodule = function(req,res){
    //params moduleid 
    let moduleId = req.params.moduleId //postman -> projectid 

    ProjectmoduleModel.deleteOne({_id:moduleId},function (err, data) {
        if (err) {
            res.json({ msg: "Something went wrong", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "projectmodule removed...", data: data, status: 200 })//http status code 
        }
    })
}

//update
module.exports.updateProjectmodule = function(req,res){
    let moduleId = req.body.moduleId
    let moduleName =req.body.moduleName
    let description =req.body.description
    let estimatedHours =req.body.estimatedHours
    let project =req.body.project

    ProjectmoduleModel.updateOne({_id:moduleId},{moduleName:moduleName,description:description,estimatedHours:estimatedHours,project:project},function(err,data){
        if(err){
            res.json({msg:"Something want to wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated...",status:200,data:data})
        }
    })

}
