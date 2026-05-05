const userModel = require("../models/userModel")

function getAllusers(request, response){
    const users = userModel.findAll()
    
    response.json(users)
}
module.exports ={
    getAllusers
}