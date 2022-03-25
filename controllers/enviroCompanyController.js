import Company from "../models/companies.js"

async function getAllCompanies (req, res, next){
    
    try{
        const companies =  await Company.find();
        return res.status(200).json(companies)
    }
    catch (err){
        next(err)
    }
}
async function createCompany(req, res, next){
    try{
        const newCompany = await Company.create(req.body);
        return res.status(201).send(newCompany)
    }
    catch(err){
        next (err)
    }
}
async function getCompanyById(req, res, next){
    const {id} = req.params

    try{
        const newCompany = await Company.findById(id)
        return res.status(200).send(newCompany)
    }
    catch (err){
        next (err)
    }
}
async function updateCompany(req, res, next){
    const {id} = req.params
    const {body} = req

    try{
        const newCompany = await Company.findById(id);
        newCompany.set(body)

        newCompany.save();

        return res.status(200).json(newCompany)

    }
    catch (err){
        next(err)
    }
}
export default {getAllCompanies, createCompany, updateCompany, getCompanyById}