const http = require("http")


http.createServer(function(req,res){
    console.log("hrllo")
    res.write("Hello Node !!!!!")
    res.end()
}).listen(8000,()=>console.log("server is running on port 8000"))