import Consumers from "../models/consumer.js"

async function getAllConsumers(req, res, next){
    
    try{
        const consumers =  await Consumers.find();
        return res.status(200).json(consumers)
    }
    catch (err){
        next(err)
    }
}
async function createConsumers(req, res, next){
    try{
        const newConsumers= await Consumers.create(req.body);
        return res.status(201).send(newConsumers)
    }
    catch(err){
        next (err)
    }
}

export default {getAllConsumers, createConsumers }