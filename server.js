const express = require("express")

const app = express() 

function callbackdaRaiz(request, response){
    response.send("Lívia a mais mais patroa linda demais!!!🤷‍♀️")


}

app.get("/", callbackdaRaiz  )

app.listen(3000, () => {
    console.log ("API RODANDO em http://localhost:3000")
})

