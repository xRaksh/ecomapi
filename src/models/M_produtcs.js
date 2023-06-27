const mongoose = require("mongoose")
const productSchema = new mongoose.Schema({
    id: {
        type: Number,
        index: true,
        unique: true
    },
    category: {
        type: String,
        required: true
    },
    name: {
        type: String
    },
    Image: {
        type: String
    },
    Description: {
        type: String
    },
    price: {
        type: Number
    },
    Suggested: {
        type: String
    },
    Sponsor: {
        type: String
    },
    Recommed: {
        type: String
    },
    Top: {
        type: String
    }
})

module.exports = mongoose.model("Product", productSchema)