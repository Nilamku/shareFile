const express = require("express")
const app = express();

app.get("/", (request, response)=>{
    response.sendFile(__dirname+"/public/index.html")
})

app.get("/weather", (request, response)=>{
    if(request.query){
        console.log("Address")
    }
    response.send({message:"api hit"})
})

app.listen(9000, ()=>{
    console.log("Express server started at port 9000...");
})
