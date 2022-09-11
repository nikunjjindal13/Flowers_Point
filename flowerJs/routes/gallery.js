const express=require('express')
const app=express.Router();
const path =require('path')

app.use('/gallery',(req,res,next)=>{
    res.render('gallery')
})
module.exports= app;