import express from 'express'
var app=express();

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    console.log("running");
    res.render('index')
})
app.listen(3000 , ()=>{
    console.log("running... ")
});