const express=require('express')
const app=express.Router();
const path =require('path')

app.get('/home',(req,res,next)=>{
    res.render('index')
})
module.exports= app;