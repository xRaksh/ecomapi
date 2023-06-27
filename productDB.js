const connectDB = require("./src/DB/Connect")
const Products = require("./product.json")
const Product = require("./src/models/M_produtcs")

const dot = require("dotenv")
dot.config().parsed
const URL = process.env.MONGODB_URL



const push = async() =>{
    try {
        await connectDB(URL)
        await Product.create(Products)
        await Product.deleteMany()
        // console.log(Products);
    } catch (error) {
        console.log(error);
    }
}
push();