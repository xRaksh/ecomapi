const { query } = require("express")
const Product = require("../models/M_produtcs")

const getAllproducts = async(req,res) =>{

    const {id,name,Suggested,Sponsor,Recommed,Top} = req.query
    const queryObject = {}
    
    if(id){
        queryObject.id = id
    }
    if(name){
        queryObject.name = { $regex:name, $options:"i" }
    }
    if(Suggested == "true"){
        queryObject.Suggested = Suggested
    }
    if(Sponsor == "true"){
        queryObject.Sponsor = Sponsor
    }
    if(Recommed == "true"){
        queryObject.Recommed = Recommed
    }
    if(Top == "ture"){
        queryObject.Top = Top
    }

    const Data = await Product.find(queryObject).sort('id -test');
    res.status(200).json({ Data })
    // console.log(Data);
}


module.exports = { getAllproducts}