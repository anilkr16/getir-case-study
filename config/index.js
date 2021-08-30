module.exports = {
  env: process.env.NODE_ENV || 'dev',
  dburl: function() {
    url='mongodb+srv://challengeUser:WUMglwNBaydH8Yvu@challenge-xzwqd.mongodb.net/getir-case-study?retryWrites=true'
    return url
  }
};

