const dot = require("dotenv")
const express = require("express")

const routes = require("./src/routes/R_products")
const connectDB = require("./src/DB/Connect")

const app = express()
dot.config().parsed
const PORT = process.env.PORT
const URL = process.env.MONGODB_URL

app.get("/",(req,res) =>{
    res.send("hello NEM")
})

// middlewereor to set router from express

app.use("/api/products",routes)

const start = async () =>{
    try{
        await connectDB(URL)
        app.listen(PORT,() =>{
            console.log(`connect to ${PORT}`)
        })
    }catch(e){
        console.log(e)
    }
}

start();