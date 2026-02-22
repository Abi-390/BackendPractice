const productModel = require("../models/product.model");

async function createProduct(req,res){

    try {
        const {image,title,description,price} = req.body;

    const product = await productModel.create({
        image,
        title,
        description,
        price
    })
    res.status(201).json({
        message:"Product created",product
    })
    } catch (error) {
        res.status(500).json({
            message : "failed to create product",error
        })
    }
    
}

module.exports={createProduct}