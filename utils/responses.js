const utils = require('./index')
module.exports = {
  getErrorResponse: function(responseData) {
    const {code, message, error} = responseData
    let resp = {}
    Object.assign(resp, response)
    if (!message) {
      message = utils.errors.genericError
    }
    resp.code = code || null
    resp.msg = message || null
    resp.error = error || null
    delete resp.records
    return resp
  },

  getSuccessResponse: function(responseData) {
    const {code, records} = responseData
    const resp = {}
    Object.assign(resp, response)
    resp.code = code
    resp.msg = code === 0 ? 'success' : 'failure'
    resp.records = records || null
    if (!resp.records) {
      delete resp.records
    }
    if (!resp.msg) {
      delete resp.msg
    }
    return resp
  }
}

const response = {
  code: 1,
  msg: '',
  records: {}
}
