const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JobSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    company_name: {
        type: String,
        required: true
    },
    position_name: {
        type: String,
        required: true
    },
    stage: {
        type: String, //['wishlist', 'applied', 'interviewing', 'decision']
        required: true
    },
    application_link: {
        type: String,
        required: true
    },
    salary: {
        type: Number
    },
    location: {
        type: String
    },
    deadline: {
        type: Date
    },
    date_applied: {
        type: Date
    },
    interview_date: {
        type: Date
    },
    decision_date: {
        type: Date
    },
    decision: {
        type: Boolean
    },
    notes: {
        type: String
    },
    networking_contacts: {
        type: String
    },
    studying_preparation: {
        type: String
    }
},{
   timestamps: true 
})

module.exports = Job = mongoose.model('Job', JobSchema)