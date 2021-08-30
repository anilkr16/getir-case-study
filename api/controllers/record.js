 'use strict';
// load the things we need
const utils = require('../../utils/index');
const { getSuccessResponse, getErrorResponse} = require('../../utils/responses');
// Required repos ======================================
const recordRepo = require('../repository/record');
const {validateParameters} = require('../validators/record')
/**
 * GET /casestudy/list
 * @param(data) - required to request data to filter the records.
 */
 const getRecords = (req, res) => {
	// Validating req body parameters.
	const {errors, isValid} = validateParameters(req.body);
	if (!isValid) {
		const response = {code:404, message: utils.errors.validationErrors, error: errors}
		res.json(getErrorResponse(response))
		res.end()
	} else {
		let {minCount, maxCount, startDate, endDate} = req.body;
		recordRepo.getRecords({minCount, maxCount, startDate, endDate})
			.then(result => {
				const response = {code: 0, records: result}
				res.json(getSuccessResponse(response))
			})
			.catch(err => {
				const response = {code:500, message: utils.errors.genericError, error: err}
				res.json(getErrorResponse(response))
			})
	}
}
module.exports = {
	getRecords: getRecords
}