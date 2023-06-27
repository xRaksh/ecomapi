const express = require("express")
const router =  express.Router()
const { getAllproducts, getAllproductsTesting } = require("../controllers/C_Products")

router.route("/").get(getAllproducts)

module.exports = router