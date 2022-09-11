const express=require('express')
const app=express.Router();
const path =require('path')

app.use('/product',(req,res,next)=>{
    res.render('product')
})
module.exports= app;