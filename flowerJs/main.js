const http =require("http");
const express =require('express');
const app = express();
const path =require('path');
const bodyParser = require('body-parser');

const login = require('./routes/login')
const reg = require('./routes/register')
const index = require('./routes/index')
const about = require('./routes/about')
const contact = require('./routes/contact')
const gallery = require('./routes/gallery')
const product = require('./routes/product');
app.use(bodyParser.urlencoded({extended :false}));
app.use(express.static(path.join(path.dirname(process.mainModule.filename))))


app.set('view engine','ejs'); 
app.set('views','views');

app.use(login);
app.use(reg);
app.use(index);
app.use(about);
app.use(contact);
app.use(gallery);
app.use(product);




app.use((req,res,next)=>{
    res.status(404).send("<h1>SORRY PAGE NOT FOUND</h1>")
})
http.createServer(app).listen(3000);