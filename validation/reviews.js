const Validator = require('validator');

module.exports = function validateReviewInput(data) {
    let errors = {};

    if (Validator.isEmpty(data.company)) {
        errors.text = 'Company name is required';
    }

    if (Validator.isEmpty(data.body)) {
        errors.text = 'Body is required';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
}