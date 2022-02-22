const express = require("express")
const mongoose = require("mongoose")

const sessionController = require("./controller/session-controller")
const roleController =require("./controller/roll-controller")
const userController = require("./controller/user-controller")
const projectController = require("./controller/project-controller")
const bugController = require("./controller/bug-controller")
const projectteamController = require("./controller/projectteam-controller")
const statusController = require("./controller/status-controller")
const taskController = require("./controller/task-controller")
const taskbedgeController = require("./controller/taskbedge-controller")
const projectmoduleController = require("./controller/projectmodule-controller")
const usertaskController = require("./controller/usertask-controller")

const app = express()
//middle ware
app.use(express.json())
app.use(express.urlencoded({extended:true}))


//database
mongoose.connect('mongodb://localhost:27017/BTS',function(err){
    if(err){
        console.log("db connection fail....");
        console.log(err);
    }else{
        console.log("db Connected...");
    }
})

//urls
app.get("/",function(req,res){
    res.write("welcome...")
    res.end()
})

app.get("/login",sessionController.login)
app.get("/signup",sessionController.signup)
app.post("/saveuser",sessionController.saveuser)

//role
app.post("/roles",roleController.addRole)
app.get("/roles",roleController.getAllRoles)
app.delete("/roles/:roleId",roleController.deleteRole)
app.put("/roles",roleController.updateRole)

//user
app.post("/users",userController.addUser)
app.get("/users",userController.getAllUsers)
app.delete("/users/:userId",userController.deleteUser)
app.put("/users",userController.updateUser)

//project
app.post("/projects",projectController.addProject)
app.get("/projects",projectController.getAllProject)
app.delete("/projects/:projectId",projectController.deleteProject)
app.put("/projects",projectController.updateProject)

//projectteam
app.post("/projectteams",projectteamController.addProjectteam)
app.get("/projectteams",projectteamController.getAllProjectteams)
app.delete("/projectteams/:projectteamId",projectteamController.deleteProjectteam)
app.put("/projects",projectteamController.updateProjectteam)

//bug
app.post("/bugs",bugController.addBug)
app.get("/bugs",bugController.getAllBug)
app.delete("/bugs/:bugId",bugController.deleteBug)
app.put("/bugs",bugController.updateBug)


//status
app.post("/statuses",statusController.addStatus)
app.get("/statuses",statusController.getAllStatus)
app.delete("/statuses/:statusId",statusController.deleteStatus)
app.put("/statuses",statusController.updateStatus)

//projectmodule
app.post("/projectmodules",projectmoduleController.addProjectmodule)
app.get("/projectmodules",projectmoduleController.getAllProjectmodule)
app.delete("/projectmodules/:projectmoduleId",projectmoduleController.deleteProjectmodule)
app.put("/projectmodules",projectmoduleController.updateProjectmodule)

//task
app.post("/tasks",taskController.addTask)
app.get("/tasks",taskController.getAllTasks)
app.delete("/tasks/:taskId",taskController.deleteTask)
app.put("/tasks",taskController.updateTask)

//taskbedge
app.post("/taskbedges",taskbedgeController.addTaskbedge)
app.get("/taskbedges",taskbedgeController.getAllTaskbedge)
app.delete("/taskbedges/:bedgeId",taskbedgeController.deleteTaskbedge)
app.put("/taskbedges",taskbedgeController.updateTaskbedge)

//usertask
app.post("/usertasks",usertaskController.addUsertask)
app.get("/usertasks",usertaskController.getAllUsertasks)
app.delete("/usertasks/:usertaskId",usertaskController.deleteUsertask)
app.put("/usertasks",usertaskController.updateUsertask)

//login
app.post("/login",userController.login)

//server           

app.listen(3000,function(){
    console.log("server started on 3000");
})
