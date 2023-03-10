const express=require('express');
const app=express();
const mongoose = require('mongoose');
const path=require('path');
const seedDB=require('./seed');
const productRoute=require('./routes/productRoutes');
const methodOverride=require('method-override');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'view'));
app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

app.use(productRoute);

mongoose.connect('mongodb://127.0.0.1:27017/shopApp').then(()=>{
    console.log("db connected");
}).catch((err)=>{
    console.log(err);
})

seedDB();

app.get('/',(req,res)=>{
    res.send("connected");
})

app.listen(3000,()=>{
    console.log("Server is running");
})
