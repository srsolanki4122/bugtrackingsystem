const UserModel = require("../model/user-model")
const bcrypt = require("bcrypt")


module.exports.addUser = function(req,res){
    let firstName = req.body.firstName
    let email = req.body.email
    let password = req.body.password
    let role = req.body.role

    let encPassword = bcrypt.hashSync(password,10)

    let user = new UserModel({
        firstName : firstName,
        email : email,
        password : password,
        role : role

    })

    user.save(function(err,data){
        if(err){
            res.json({msg:"Something want wrong",data:err,status:-1})
        }else{
            res.json({msg:"signup done",data:data,status:200})
        }
    })

}

//list
module.exports.getAllUsers = function(req,res){

    UserModel.find().populate("role").exec(function(err,data){
        if(err){
            res.json({msg:"Something want wrong",data:err,status: -1})
        }else{
            res.json({msg:"users ret...",data:data,status:200})
        }
    })
} 

//delete
module.exports.deleteUser = function(req,res){
    let userId = req.params.userId
    UserModel.deleteOne({_id:userId},function(err,data){
        if(err){
            res.json({msg:"Something want wrong",data:err,status:-1})
        }else{
            res.json({msg:"user removed",data:data,status:200})
        }
    })
}

//update 
module.exports.updateUser = function(req,res){
    let userId = req.body.userId
    let firstName =req.body.firstName
    let email =req.body.email
    let password =req.body.password
    let role = req.body.role

    UserModel.updateOne({_id:userId},{firstName:firstName,email:email,password:password,role:role},function(err,data){
        if(err){
            res.json({msg:"Something want to wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated...",status:200,data:data})
        }
    })

}


//login
module.exports.login = function(req,res){
    let email = req.body.email
    let password = req.body.password

    let isCorrect = false;

    UserModel.findOne({email:email},function(err,data){
        if(data){
            let ans = bcrypt.compareSync(password,data.password)
            if(ans == true){
                isCorrect = true
            }
        }

        if(isCorrect == false){
            res.json({msg:"Invalid Credentials...",data:req.body, status:-1})
        }else{
            res.json({msg:"Login...",data:data,status: 200})
        }
    })
}