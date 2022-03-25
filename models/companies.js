import mongoose from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";

const companySchema = new mongoose.Schema({
    leid: Number,
    companyname: String,
    location: String,
    sector: String,
    turnover: Number,
    creditrating: String,
    totalcredit: Number,
    carbonrating: String,
    carbonvalue: Number,
    evimpact: Number,
    interestrate: Number,


})
companySchema.plugin(mongooseUniqueValidator);

const Company = mongoose.model('Company', companySchema);

export default Company;