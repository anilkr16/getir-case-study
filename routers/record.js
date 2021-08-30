const router = require('express').Router()
const controller = require('../api/controllers/record')

router.route('/') 
  .post((req, res) => {
    return controller.getRecords(req, res)
  })
  
module.exports = router