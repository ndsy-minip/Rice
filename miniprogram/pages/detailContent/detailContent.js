// pages/detailContent/detailContent.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabCur: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var info = JSON.parse(decodeURIComponent(options.info))
    this.setData({
      info: info
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

  /**
   * navigateBack
   */
  goBack: function () {
    wx.navigateBack({
      delta: 0,
    })
  },

  /**
   * 切换选项卡
   */
  switchTab: function (e) {
    this.setData({
      tabCur: parseInt(e.currentTarget.dataset.index)
    })
  }

})