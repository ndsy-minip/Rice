// 云函数入口文件
const cloud = require('wx-server-sdk')
const rq = require('request-promise');
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const appid = 'wx70fa40832126b33a',
    secret = '0c29884f4fb90a96c4ad3dbe88bd1917';
  const AccessToken_options = {
    method: 'GET',
    url: 'https://api.weixin.qq.com/cgi-bin/token',
    qs: {
      appid,
      secret,
      grant_type: 'client_credential'
    },
    json: true
  };
  //获取AccessToken
  var res = await rq(AccessToken_options);
  var options = {
    method: 'POST',
    uri: 'https://api.weixin.qq.com/wxa/business/getliveinfo?access_token=' + res.access_token,
    body: {
      "start": 0, // 起始拉取房间，start = 0 表示从第 1 个房间开始拉取
      "limit": 10 // 每次拉取的个数上限，不要设置过大，建议 100 以内
    },
    json: true // Automatically stringifies the body to JSON
  };
  return await rq(options)

}