// pages/notification/notification.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    this.getMyNotifycation()
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



  navToAdd: function () {
    wx.navigateTo({
      url: '../addNotification/addNotification',
    })
  },


  showActionSheet: function (e) {
    var _id = e.currentTarget.dataset._id
    var _this = this
    wx.showActionSheet({
      itemList: ["删除"],
      success(res) {
        if (res.tapIndex == 0) {
          wx.showLoading({
            title: '正在删除中',
          })
          wx.cloud.callFunction({
            name: 'deleteNotification',
            data: {
              _id: _id
            },
            complete(res) {
              console.log(res)
              _this.getMyNotifycation()
            }
          })
        }
      },
    })
  },


  getMyNotifycation(e) {
    wx.showLoading({
      title: '正在加载中',
    })
    var _this = this
    wx.cloud.callFunction({
      name: 'getNotification'
    }).then(res => {
      _this.setData({
        myNotifycation: res.result.data
      })
      wx.hideLoading({
        success: (res) => { },
      })
    }).catch(err => {
      // handle error
    })
  }
})