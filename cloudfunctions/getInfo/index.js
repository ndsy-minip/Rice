// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database();
// 云函数入口函数
exports.main = async (event, context) => {
  const result = []
  const messages1 = await db
    .collection('movies')
    .get();
  const messages2 = await db
    .collection('books')
    .get();
  const messages3 = await db
    .collection('papers')
    .get();
  result.push(messages1,messages2,messages3)
  return result
}