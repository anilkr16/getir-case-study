const routes = require('express').Router();
const caseStudyRouter = require('./record');

routes.use('/records', caseStudyRouter)
module.exports = routes;