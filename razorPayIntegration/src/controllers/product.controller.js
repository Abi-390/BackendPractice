const productModel = require("../models/product.model");

async function createProduct(req,res){

    try {
        const {image,title,description,price:{amount,currency}} = req.body;

    const product = await productModel.create({
        image,
        title,
        description,
        price:{amount,currency}
    })
    res.status(201).json({
        message:"Product created",product
    })
    } catch (error) {
        res.status(500).json({
            message : "Failed to create product",error
        })
    }
    
}

async function getItem(req,res){
    try {
        const products = await productModel.findOne();

        res.status(200).json({
            message:"Products fetched successfully",products
        })
    } catch (error) {
        res.status(500).json({
            message:"Something went wrong in product fetching",
            error:error.message
        })
    }
}

module.exports={createProduct,getItem}