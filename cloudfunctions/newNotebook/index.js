const cloud = require('wx-server-sdk');
cloud.init();
const db = cloud.database();

exports.main = async (event, context) => {
  console.log("Function newNoteBook")
  try {
    const { OPENID } = cloud.getWXContext();
    var timestamp = Date.parse(new Date());
    var date = new Date(timestamp);
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    var D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
    var h = (parseInt(date.getHours())+8 < 10 ? '0' + parseInt(date.getHours())+8 : parseInt(date.getHours())+8) + ':';
    var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
    var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    date = Y + M + D + h + m + s;
    var weekday = "周" + "日一二三四五六".charAt(new Date().getDay())
    const result = await db.collection('notebook').add({
      data: {
        openid : OPENID, // 订阅者的openid
        text : event.text,
        time : date,
        weekday: weekday
      },
    });
    return result;
  } catch (err) {
    console.log(err);
    return err;
  }
};
