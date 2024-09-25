const fs=require('fs')


fs.writeFileSync("welcome.txt","hello node")

fs.readFile("hello.txt","utf8",function(err,data){
    if(!err){
        console.log(data)
    }
})

const data=fs.readFileSync("hello.txt","utf8")
console.log(data)