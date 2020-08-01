const express = require("express");  // first instal express module by the command (mpm instal express)
const app = express();
const  hostname  = '127.0.0.1';
const port = 8080;

app.get('/', (req,res)=>{
    res.send("hellow home github ")
})
app.get('/contact', (req,res)=>{
    res.send("hellow contact page github")
})
app.get('/about', (req,res)=>{
    res.send("hellow me github")
})
app.get('/shop', (req,res)=>{
    res.send("byy this product 100% free,..")
})
app.listen(port,hostname, ()=>{
    console.log(`server is running at port 8080....--> http://${hostname}:${port}`)

})