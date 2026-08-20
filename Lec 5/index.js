const fs = require("fs")

// fs.writeFile("data.txt", "hello", (err)=>{
//     if(err) console.log(err)
//         else console.log("file written")
// })

// fs.readFile("data.txt", "utf-8", (err,res)=>{
//     if(err) console.log(err)
//         else console.log(res)
// })

//to avoid the overwrite....to have the space...give sapce in the sentence
// fs.appendFile("data.txt", " hyyy gurlll", (err)=>{
//     if(err) console.log(err)
//         else console.log("file updated")
// })

//to delete the file
// fs.unlink("data.txt", (err)=>{
//     if(err) console.log(err)
//         else console.log("file deleted successfully")
// })

// fs.writeFile("db.md", "hyyy Anushka", (err)=>{
//     if(err) console.log(err)
//         else console.log("file written")
// })

// fs.readFile("db.md", "utf-8", (err,res)=>{
//     if(err) console.log(err)
//         else console.log(res)
// })

// // //to avoid the overwrite....to have the space...give sapce in the sentence
// fs.appendFile("db.md", " hey baby", (err)=>{
//     if(err) console.log(err)
//         else console.log("file updated")
// })

// fs.unlink("data.txt", (err)=>{
//     if(err) console.log(err)
//         else console.log("file deleted successfully")
// })

// fs.writeFile("dbms.json", "hyyy Anushka", (err)=>{
//     if(err) console.log(err)
//         else console.log("file written")
// })

// fs.readFile("dbms.json", "utf-8", (err,res)=>{
//     if(err) console.log(err)
//         else console.log(res)
// })

// // //to avoid the overwrite....to have the space...give sapce in the sentence
// fs.appendFile("dbms.json", " hey baby", (err)=>{
//     if(err) console.log(err)
//         else console.log("file updated")
// })

//json file mi append karana h 
// const data ={name: "Anushka", Age:20,city:"Delhi", class : "14th", lastname : "Tripathi", }
// fs.writeFile("dbms.json", JSON.stringify([data],null,2), (err)=>{ // json.stringify mi 3 arguments gaye hn...data toh h vo data variable k andr h ...data ko [] k andr rkha h ess se object aray k andr rhye
//     //null : for projection....jo b data h vo as it is  file k andr jaye ...if null ki jigh "name", "city" likha toh age vaali field nhi aaegi file mi
//     //2 : for indentation if 2 jigh 4 likha toh fields 4 space deke aaenge
//     if(err) console.log(err)
//         else console.log("file written")
// })

// //to append we have to amke it read and write both...json format ko aprse karana padega then write...phele data ko comment out krdo

// const newData ={status : "unmarried",Age : 23}

// //to read
// fs.readFile("dbms.json", "utf-8", (err,res)=>{
//     if(err) console.log(err)
//         else {
//     let temp = JSON.parse(res) //json.parse use kiya h jiss se ki jo phele data tha vo string mi tha but abh vo json mi hogya h 

//     temp.push(newData)
//     fs.writeFile("dbms.json", JSON.stringify(temp, null, 2), (err)=>{
//         if(err) console.log(err)
//             else console.log("file updated")
//     })
//     }
// })

// //to append
// fs.appendFile("dbms.json", JSON.stringify(newData,null,2), (err)=>{
//     if(err) console.log(err)
//         else console.log("file updated")
// })

//to delete
// fs.unlink("dbms.json", (err)=>{
//     if(err) console.log(err)
//         else console.log("file deleted successfully")
// })

// const path = require("path")

// const file = path.join("home", "data", "user.json")
// console.log(file)

// console.log(path.dirname("home/user/data/file.txt"))

// console.log(path.basename("home/user/data/file.txt"))

// console.log(path.extname("home/user/data/file.txt"))

// const filePath = path.join("home", "data", "user", "file.txt")
// // console.log(filePath)

// fs.mkdir(path.dirname(filePath), { recursive: true }, (err) => {
//     if (err) console.log(err)
//     else {
//         fs.writeFile(filePath, "hello", (err) => {
//             if (err) console.log(err)
//             else console.log("file written")
//         })
//     }
// });

// const crypto = require("crypto")

// let password1 = "1234"
// let password2 = "1234"

// const encrypt1 = crypto.createHash("sha256").update(password1).digest("hex")
// const encrypt2 = crypto.createHash("sha256").update(password2).digest("hex")

// console.log(encrypt1, "\n", encrypt2)

const dns = require("dns")

dns.lookup("www.google.com", (err, address, family) => {
    console.log("address: ", address)
    console.log("family: ", family)
})