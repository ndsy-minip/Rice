const app = getApp()
var that = null

Page({
	data: {
		amount: ''
	},
	onLoad() {
		that = this;
	},
	onShow() {

	},

	do_pay() {
		wx.showLoading({
			title: '正在加载',
			mask: true
		})
		app.calls({
			name: "do_pay",
			data: { "amount": that.data.amount},
			success(res) {
				wx.hideLoading();
				if (res.code == 0) {
					wx.requestPayment({
						...res.pay,
						success(res) {
							wx.showToast({
								title: '打赏成功~',
							}),
								that.setData({
									amount: ''
								})
						},
						fail(err) {
							console.log('支付失败！')
						}
					})
				} else if (res.code == 1) {
					wx.showModal({
						title: '下单失败',
						content: res.returnMsg,
						showCancel: false
					})
				}
			}
		})
	},

	amountInput(e) {
		this.setData({
			amount: e.detail.value
		})
	}


})