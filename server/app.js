const express = require("express")
const app = express()
const mongoose = require('mongoose')
const userModel = require("./model")
const cors = require('cors')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.post("/contact" , function(req , res){
   let {name, mobile , add} = req.body
    let user = userModel.create({
        name,
        mobile,
        add
    })
   
   
   

})

 const PORT = process.env.PORT || 3000;
app.listen(PORT,function(){
    console.log("server is running....");
    
})