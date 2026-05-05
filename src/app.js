const express = require("express")

const userContoller = require("./controllers/userControler")

const app = express() 

function callbackDaRaiz (request,response){
    response.send("Estamos funcionando")
}

app.get("/",callbackDaRaiz)

app.get("/users", userContoller.getAllusers)

module.exports = app