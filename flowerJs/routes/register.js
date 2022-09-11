const express=require('express')
const app=express.Router();
const path =require('path')
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

// app.use('/register',(req,res,next)=>{
//     res.render('register')
// })
// module.exports= app;

app.get('/register',(req,res,next)=>{
    // res.render("register")
    res.render("reg2",{err1:"",err2:"",err3:""})
})

app.post('/register',(req,res,next)=>{
    var a = req.body.username;
    var b = req.body.email;
    var c = req.body.password;
    var username_format= /^[A-Za-z]+$/; 
    var email_format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var password_format=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;


if(a=="")
{
  res.render("reg2",{err1:"Plaese Fill Username",err2:"",err3:""});
}
else if(!(a.match(username_format)))
{

  res.render("reg2",{err1:"Enter Characters Only",err2:"",err3:""});
}
else if(b=="")
{
  res.render("reg2",{err1:"",err2:"Please Enter Email",err3:""});
}
else if(!(b.match(email_format)))
{

  res.render("reg2",{err1:"",err2:"Enter Correct Email Syntax",err3:""});

}
else if(c=="")
{
  res.render("reg2",{err1:"",err2:"",err3:"Please Enter Password"});
}
else if(!(c.match(password_format)))
{

  res.render("reg2",{err1:"",err2:"",err3:"password must be of 8 to 15 length<br>Password must contain one digit,one special character,one uppercase letter and lowercase letter"});
}
    
else{
    MongoClient.connect(url, function(err, db) {
    var data = {username:a,email :b,password:c};
    var dbo = db.db("Flowers_Point")
    
    dbo.collection("Registration").insertOne(data,(err,result)=>{
        if(err) throw err;
        console.log("DATA ENTERED");
        db.close();
       
    })

})
res.redirect('/');
}
})
module.exports=app;