const cloud = require('wx-server-sdk');
cloud.init();
const db = cloud.database();

exports.main = async (event, context) => {
  var date = new Date()
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()
  date = year + '-' + (month < 10 ? '0' + month : month) + '-' + (day < 10 ? '0' + day : day)
  console.log(date)
  try {
    // 从云开发数据库中查询等待发送的消息列表
    const messages = await db
      .collection('notification-message')
      .where({
        isSend: false,
        date: date
      })
      .get();

    // 循环消息列表依次处理下发订阅操作
    const sendPromises = messages.data.map(async message => {
      try {
        console.log(message.data)
        // 发送订阅消息
        await cloud.openapi.subscribeMessage.send({
          touser: message.touser,
          page: message.page,
          data: message.data,
          templateId: message.templateId,
        });
        // 发送成功后将消息的状态改为已发送
        return db
          .collection('notification-message')
          .doc(message._id)
          .update({
            data: {
              isSend: true,
            },
          });
      } catch (e) {
        return e;
      }
    });

    return Promise.all(sendPromises);
  } catch (err) {
    console.log(err);
    return err;
  }
};
