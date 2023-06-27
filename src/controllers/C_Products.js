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

    const Data = await Product.find(queryObject).sort('id -test');
    res.status(200).json({ Data })
    console.log(Data);
}


module.exports = { getAllproducts}