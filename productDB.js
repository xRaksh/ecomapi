const connectDB = require("./src/DB/Connect")
const Products = require("./product.json")
const Product = require("./src/models/M_produtcs")

const dot = require("dotenv")
dot.config().parsed
// const URL = process.env.MONGODB_URL

const DB = process.env.DB
const PASS = process.env.PASS

const URL = `mongodb+srv://varun:${PASS}@abhi.ba1das3.mongodb.net/${DB}?retryWrites=true&w=majority`


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