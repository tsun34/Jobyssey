const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    company: {
        type: Schema.Types.ObjectId,
        ref: 'companies'
    },
    body: {
        type: String,
        required: true
    }
},{
   timestamps: true 
})

module.exports = Review = mongoose.model('Review', ReviewSchema);