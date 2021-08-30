const validator = require('validator');
const {isValidParam} = require('./common');

const validateParameters = data => {
    let errors = {};
    if ( isValidParam(data.minCount)) {
        errors.minCount = 'minCount is required';
    } else if (!validator.isInt(data.minCount.toString())) {
        errors.minCount = 'minCount should be integer';
    }

    if (isValidParam(data.maxCount)) {
        errors.maxCount = 'maxCount is required';
    } else if (!validator.isInt(data.maxCount.toString())) {
        errors.maxCount = 'maxCount should be integer';
    }

    if (isValidParam(data.startDate)) {
        errors.startDate = 'startDate is required';
    } else if (!validator.isISO8601(data.startDate)) {
        errors.startDate = 'StartDate should be YYYY-MM-DD format.';
    }
    

    if (isValidParam(data.endDate)) {
        errors.endDate = 'endDate is required';
    } else if (!validator.isISO8601(data.endDate)) {
        errors.endDate = 'EndDate should be YYYY-MM-DD format.';
    }

    if (!isValidParam(Date.startDate) && !isValidParam(Date.endDate)) {
        if (!validator.isBefore(data.startDate, data.endDate)) {
            errors.minCount = 'endDate must be after than start date';
        }
    }
    return {errors: errors, isValid: isValidParam(errors)}
}


module.exports = {
    validateParameters: validateParameters
}