const cloud = require('wx-server-sdk')
const { sub_mch_id } = require('key.json')
cloud.init()
const db = cloud.database();
exports.main = async (event, context) => {
	function randomString(length) {
		var str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
		var result = '';
		for (var i = length; i > 0; --i) 
			result += str[Math.floor(Math.random() * str.length)];
		return result;
	}
	const uid = randomString(16);
	const res = await cloud.cloudPay.unifiedOrder({
		body: "打赏",
		outTradeNo: uid,
		spbillCreateIp: '127.0.0.1',
		subMchId: sub_mch_id,
		totalFee: parseInt(event.amount) * 100,
		envId: "WakingTheTiger-01",
		functionName: "back_pay",
		tradeType: 'JSAPI'
	})
	if (res.resultCode != 'SUCCESS') {
		return {
			code: 1,
			returnMsg: res.returnMsg
		}
	}
	await db.collection('pay').where({
		_id: event.userInfo.openId
	}).update({
		data: {
			uuid: uid
		}
	})
	await db.collection('pay_order').add({
		data: {
			_id: uid,
			cdue: new Date(),
			payment:res.payment,
			type:'NOTPAY'
		}
	})
	return {
		code: 0,
		uuid:uid,
		pay: res.payment
	}
}