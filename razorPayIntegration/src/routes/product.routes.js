const express = require("express");
const router = express.Router();
const {createProduct,getItem} = require("../controllers/product.controller")


router.post("/",createProduct);
router.get("/get-item",getItem);



module.exports = router;