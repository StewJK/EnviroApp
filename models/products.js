import mongoose from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";

const products = new mongoose.Schema({
    productName: String,
    leid: Number,
    leid2: Number,
    source: String,
    unitsSold: Number,
    environmentImpact: Number,
})
products.plugin(mongooseUniqueValidator);

const Products = mongoose.model('Product', products);

export default Products;