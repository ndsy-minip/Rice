// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  await cloud.openapi.subscribeMessage.send({
    "touser": "oXXcl5KX3bmG7Mm2xP_YUtGAXZ2w",
    "templateId": "M6pds0pSRZ0_QpDlzJrZJKcY8BYhhW141zoAeOay-Pc",
    "data": {
      "thing1": {
        "value": "收割"
      },
      "date2": {
        "value": "2022-06-06"
      },
      "thing3": {
        "value": "西瓜地收割"
      }
    }
  })

}