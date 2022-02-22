const BugModel = require("../model/bug-model")

//add project
module.exports.addBug = function(req,res){
    let bugName = req.body.bugName
    let bugPriority = req.body.bugPriority
    let setPriority = req.body.setPriority
    let bugDesc = req.body.bugDesc
    let date = req.body.date
    
    let bug = new BugModel({
        bugName : bugName,
        bugPriority : bugPriority,
        setPriority : setPriority,
        bugDesc : bugDesc,
        date : date
    })

    bug.save(function(err,data){
        if(err){
            res.json({msg:"Somthing went wrong",status:-1,data:err})
        }else{
            res.json({msg:"bug added",status:200,data:data})
        }
    })

}
//list

module.exports.getAllBug = function (req, res) {

    BugModel.find(function (err, data) {
        if (err) {
            res.json({ msg: "Something went wrong", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "bug ret...", data: data, status: 200 })//http status code 
        }
    })
}

//delete
module.exports.deleteBug = function(req,res){
    //params userid 
    let bugId = req.params.bugId //postman -> projectid 

    BugModel.deleteOne({_id:bugId},function (err, data) {
        if (err) {
            res.json({ msg: "Something went wrong", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "bug removed...", data: data, status: 200 })//http status code 
        }
    })
}

//update
module.exports.updateBug = function(req,res){
    let bugId = req.body.bugId
    let bugName =req.body.bugName
    let bugPriority = req.body.bugPriority
    let setPriority = req.body.setPriority
    let bugDesc = req.body.bugDesc
    let date = req.body.date

    BugModel.updateOne({_id:bugId},{bugName:bugName,bugPriority:bugPriority,bugDesc:bugDesc,setPriority:setPriority,date:date},function(err,data){
        if(err){
            res.json({msg:"Something want to wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated...",status:200,data:data})
        }
    })

}
