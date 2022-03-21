const express = require("express");
const app = express();
const path = require("path");
app.use(express.static("public"));

app.listen(5000,()=>{
    console.log("El servidor está corriendo en el puerto 5000");
})

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/views/home.html")
})

app.get("/login", (req,res)=>{
    res.sendFile(__dirname + "/views/login.html")
})

app.get("/register", (req,res)=>{
    res.sendFile(__dirname + "/views/register.html")
})