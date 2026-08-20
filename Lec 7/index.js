const http = require("http") 

const server = http.createServer((req,res)=>{ 

    res.write("<h1>Hello World</h1>") 
    res.write("<p>This is a simple Node.js server</p>")
    res.write("<span>3rd Sem</span>") 
    res.end()  //this ends the response

    console.log(req.url) 
    res.end()

    if (req.url=="/"){
        res.write("<h1>Home Page</h1>")
        res.end();
    }

    if(req.url==="/about"){
        res.write("<h1>About Page</h1>")
        res.end();
    }

    console.log(req.method)  

    if(req.url==="/user" && req.method==="GET"){
        res.write("<h1> GET METHOD <h1>")
        res.write("<h1> Data Retrieved <h1>")
        res.end()
    }

    if(req.url==="/user" && req.method==="POST"){  //&&-> this means if both condition are true then only it will work 
        res.write("<h1> POST METHOD <h1>")
        res.write("<h1> Data Created <h1>")
        res.end()
    }

    if(req.method==="PUT"){
        res.write("<h1> PUT METHOD <h1>")
        res.end()
    }

    if(req.method==="DELETE"){
        res.write("<h1> DELETE METHOD <h1>")
        res.end()
    }

    console.log(req.headers)
    console.log(req.headers.host)
    res.end()

   
    let body = ""
    req.on("data", (chunk)=>{
        body+=chunk     })

    req.on("end",()=>{ 
        console.log(body)
    })  
    res.end()
    
})

server.listen(3000,()=>{ 
    console.log("Server is running on PORT 3000")
})