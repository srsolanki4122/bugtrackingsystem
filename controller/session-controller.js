const fs = require("fs")

function login(req,res){
    res.write("login")
    res.end()
}

function signup(req,res){
    let SignupHtml = fs.readFileSync("./views/Signup.html")
    res.write(SignupHtml)
    res.end()
}

function saveUser(req,res){
    console.log(req.body)
    
    res.json({
        msg:"done danadone",
        status:200,
        data:req.body
    })
}

module.exports.login = login
module.exports.signup = signup
module.exports.saveuser = saveUser