const express = require('express');
const path = require('path')
const fs = require('fs');
const { title } = require('process');
const app = express();
app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname,'views')))
app.use(express.static(path.join(__dirname,'file')));

app.get('/',(req,res)=>{
    fs.readdir(`./file`,(err,files)=>{
        res.render('index',{
            files: files
        });
})
 });
app.post('/docs',(req,res)=>{
    const {title , docs }=req.body;
    fs.writeFile(`./file/${req.body.title.split('').join('')}.txt`,docs,(err)=>{
        res.redirect('/');
    })
});

app.listen(3000,()=>{
    console.log("Server is LIstening on Port 3000 - Thank you");
})