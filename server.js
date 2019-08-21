var http = require("http");

http.createServer((req,res)=>

{
res.writeHead(202,{'content-type': 'text/html'});
res.end("Hello! Welcome to My Node Server...\n");
console.log("Hello Friends! Welcome to My Node Server...");
}).listen(9090);