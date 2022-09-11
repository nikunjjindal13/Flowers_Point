const express=require('express')
const app=express.Router();
const path =require('path')
const dataB= require("../database/contact")

app.use('/contact',(req,res,next)=>{
    res.render('contact')
})


// app.get('/contact',(req,res,next)=>{
//     res.render('contact')
// })

// app.post('/contact',(req,res,next)=>{
//     var a =  req.body.t1;
//     var b =  req.body.t2;
//     var c =  req.body.t3;
//     var d =  req.body.p1;
//     var sql="insert into contact(fname,lname,email,password) values('"+a+"','"+b+"','"+c+"','"+d+"')"
//     dataB.query(sql,(err,result)=>{
//         if (err) throw err;
//         console.log(result);
//         res.redirect('/');
//     })
// })

module.exports= app;