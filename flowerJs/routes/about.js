const express=require('express')
const app=express.Router();
const path =require('path')

app.use('/about',(req,res,next)=>{
    res.render('about')
})
module.exports= app;