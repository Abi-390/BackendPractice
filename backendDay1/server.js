const http = require("http");

const server =http.createServer((req,res)=>{
    res.end("hello from server")
});

server.listen(3000,()=>{
   
console.log("Server is running on port 3000")
})