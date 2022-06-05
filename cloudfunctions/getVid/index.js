// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database();
// 云函数入口函数
exports.main = async (event, context) => {
  const messages = await db
  .collection('shorts')
  .field({
    vid: true,
    _id: false
  })
  .get()
  var list = []
  for(var i in messages.data){
    list.push({"id":i+1,"url":messages.data[i].vid})
  }
  return list
}