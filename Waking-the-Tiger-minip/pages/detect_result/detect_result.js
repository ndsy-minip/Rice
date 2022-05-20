// pages/detect_result/detect_result.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img_url: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var insectInfo = wx.getStorageSync('insectInfo')
    var results = JSON.parse(options.results)
    var insectResult = []
    for (var i in insectInfo) {
      if (insectInfo[i].name == results[0].name || insectInfo[i].name == results[1].name) {
        insectResult.push(insectInfo[i])
      }
    }
    this.setData({
      img_url: options.img_url,
      results: results.splice(0,2),
      insectResult
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

  }
})