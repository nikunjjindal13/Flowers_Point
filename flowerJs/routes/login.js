const express=require('express')
const app=express.Router();
const path =require('path')
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

// app.get('/',(req,res,next)=>{
//     res.render('login')
// })
// module.exports= app;

app.get('/',(req,res,next)=>{
    res.render("login",{err1:"",err2:""})
})
app.post('/',(req,res,next)=>{
    var a = req.body.username;
    var b = req.body.password;
    var format= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var format1=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
	 
	  
	  
if(a=="")
{
  res.render("login",{err1:"plaese fill username",err2:""});
}
else if(!(a.match(format)))
{

  res.render("login",{err1:"Enter valid email syntax",err2:""});
}
else if(b=="")
{
  res.render("login",{err2:"plaese fill Password",err1:""});
}
// else if(!(b.match(format1)))
// {

//   res.render("login",{err1:"",err2:"password must be of 8 to 15 length<br>Password must contain one digit,one special character,one uppercase letter and lowercase letter"});
// }
else
{

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("Flowers_Point")
    var query = { email:a, password:b};
    dbo.collection("Registration").find(query).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      if (result.length>0)
              {
              res.redirect('/home');
              }
              else{
                  res.send("<h1 style='text-align:center'>Please Register First</h1><h2 style='text-align:center'><a href='/register'>Click Here</a>  To Register</h2>")
                //   res.send("<h1>Click Here TO Register<a href='/register'>Click Here</a></h1>")
                 
              }
      db.close();
    });
})
}
})
module.exports=app;