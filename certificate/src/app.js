const express=require("express");
const app =express();
const port=process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.send("hello from the Naitik")
});

app.listen(port,() =>{
    console.log('Server is unning at port no ${port}')
});