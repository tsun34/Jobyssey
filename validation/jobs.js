const Validator = require('validator');
const validText = require('./valid-text');


module.exports = function validateJobInput(data) {
    let errors = {};

    if (Validator.isEmpty(data.company_name)) {
        errors.text = 'Company name is required';
    }

    if (Validator.isEmpty(data.position_name)) {
        errors.text = 'Postion name is required';
    }

    if (Validator.isEmpty(data.stage)) {
        errors.text = 'Stage is required';
    }

    if (Validator.isEmpty(data.application_link)) {
        errors.text = 'Application link is required';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
}