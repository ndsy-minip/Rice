// 云函数入口文件
const cloud = require('wx-server-sdk')
const rq = require('request-promise');
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  var location = event.location
  var key = 'AIWBZ-TLHL4-3LDUQ-DGQY7-S3B32-VFBIH'
  var url = "https://apis.map.qq.com/ws/geocoder/v1?location=" + location + "&key=" + key 
  return await rq(url)

}