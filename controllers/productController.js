import Products from "../models/products.js"

async function getAllProducts (req, res, next){
    
    try{
        const products =  await Products.find();
        return res.status(200).json(products)
    }
    catch (err){
        next(err)
    }
}
async function createProducts(req, res, next){
    try{
        const newProduct = await Products.create(req.body);
        return res.status(201).send(newProduct)
    }
    catch(err){
        next (err)
    }
}

export default {getAllProducts, createProducts }