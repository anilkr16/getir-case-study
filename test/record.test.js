const supertest = require('supertest')
const app = require('../server')
const request = supertest(app)
const assert = require('chai').assert
const config = {
  headers: {
    'Content-type': 'application/json'
  }
}
describe('/records POST API', () => {
    it('Only Post record end point shoulld allow', async () => {
      const result = await request.get('/records')
      assert.equal(result.status, 404)
    })
    // it('POST record end point should return code 0 for success', function (done) {      
    //   request.post('/records', config)
    //     .send({
    //       "startDate": "2016-01-26",
    //       "endDate": "2018-02-02",
    //       "minCount": 2700,
    //       "maxCount": 3000
    //     })
    //     .expect(200)
    //     .end((err, res) => {
    //       if (err) {
    //         return done(err)
    //       } else {
    //         assert.equal(res.body.code, 0)          
    //         done()
    //       }
    //     })
    // })
    it('POST record end point should be failed with missing/invalid parameters with code 404 ', async () => {
      const result = await request.post('/records').send({
          startDate: '2016-01-26'
        })
        assert.equal(result.status, 404)
    })
  })