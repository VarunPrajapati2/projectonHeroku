var http = require("http");
const express =require('express');
const app=express();
const port =process.env.PORT || 9090
http.createServer((req,res)=>

{
res.writeHead(202,{'content-type': 'text/html'});
res.end("Hello! Welcome to My Node Server...\n");
console.log("Hello Friends! Welcome to My Node Server...");
});

app.get('/',(req,res)=>{
res.send('hello world')
})
app.listen(port,(req,res)=>{
    console.log('server runging on port no '+port)
    })