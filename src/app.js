const express=require("express");
const app=express();
const port= process.env.PORT ||3000;

//routing

app.get("/",(req,res)=>{
    res.send("hello how are you")   
})

//server create
app.listen(port,()=>{
    console.log(`server is runnig on port number ${port}`)
})