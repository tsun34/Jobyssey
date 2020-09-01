const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CompanySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    
},{
   timestamps: true 
})

module.exports = Company = mongoose.model('Company', CompanySchema)