const { query } = require("express")
const Product = require("../models/M_produtcs")

const getAllproducts = async(req,res) =>{

    const {id,name} = req.query
    const queryObject = {}
    
    if(id){
        queryObject.id = id
    }
    if(name){
        queryObject.name = { $regex:name, $options:"i" }
    }

    const Data = await Product.find(queryObject)
    res.status(200).json({ Data })
}


module.exports = { getAllproducts}