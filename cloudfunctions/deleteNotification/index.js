const cloud = require('wx-server-sdk');
cloud.init();
const db = cloud.database();

exports.main = async (event, context) => {

  var _id = event._id.toString()
  const messages = await db.collection('notification-message').doc( _id ).remove();

  console.log(messages)
  return "Remove " + _id + " message success!"

};
