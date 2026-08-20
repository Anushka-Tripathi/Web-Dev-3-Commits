const express= require("express")
const app = express() 
app.use(express.json())
app.get("/",(req,res)=>{
    return res.status(200).send("hello world")
}) 

let students = ["Alex","Jay","Sara","Rahi","avni"]

// CRUD Operation
app.get("/student",(req,res)=>{
    res.status(200).send(students)
})

app.post("/student",(req,res)=>{
    let data = req.body.name 
    students.push(data) 

    res.status(200).send("Student Added successfully") 
})
app.put("/student/:index",(req,res)=>{ 
    let ind = req.params.index 
    let data = req.body.name

    students[ind] = data 
    res.status(200).send("Student Updated successfully")
})


app.delete("/student/:index", (req,res)=>{
    let ind= req.params.index
    students.splice(ind,1)
    res.status(200).send("Deleted successfully")
})

app.listen(3000,()=>{
    console.log("Server is running on Port: 3000")
})