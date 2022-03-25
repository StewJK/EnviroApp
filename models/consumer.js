import mongoose from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";

const consumer = new mongoose.Schema({
    Name: String,
    id: Number,
    purchaseTotal: Number,
    environmentImpactScore: Number,
    creditScore: Number,
    
})
consumer.plugin(mongooseUniqueValidator);

const Consumer = mongoose.model('Consumer', consumer);

export default Consumer;