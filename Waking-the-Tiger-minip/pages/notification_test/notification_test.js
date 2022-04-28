// pages/notification_test/notification_test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var date = new Date()
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var day = date.getDate()
    date = year + '-' + (month < 10 ? '0' + month : month) + '-' + (day < 10 ? '0' + day : day)
    this.setData({
      date
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },


  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },




  addNotification: function (e) {
    var _this = this
    wx.requestSubscribeMessage({
      tmplIds: ["M6pds0pSRZ0_QpDlzJrZJKcY8BYhhW141zoAeOay-Pc"],
      success(res) {
        console.log(res)
        if (res['M6pds0pSRZ0_QpDlzJrZJKcY8BYhhW141zoAeOay-Pc'] === 'accept') {
          var notificationData = {
            date2: { value: _this.data.date },
            thing1: { value: "test" },
            thing3: { value: "test" }
          }
          wx.cloud
            .callFunction({
              name: 'addNotificationMsg',
              data: {
                data: notificationData,
                templateId: "M6pds0pSRZ0_QpDlzJrZJKcY8BYhhW141zoAeOay-Pc"
              },
            })
            .then(() => {
              wx.showToast({
                title: '订阅成功',
                icon: 'success'
              });
            })
            .catch(() => {
            });

        }
      }
    })

  }

})