// pages/timer/timer.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    multiIndex: [0, 0],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var multiArray = [[], []]
    for (var i = 0; i < 60; i++) {
      multiArray[0].push(i.toString());
      multiArray[1].push(i.toString());
    }
    this.setData({
      multiArray
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
   * 计算时间
   */

  /**
   * 设置时间
   */
  bindMultiPickerChange: function (e) {
    this.setData({
      multiIndex: e.detail.value
    })
    var multiArray = this.data.multiArray
    var multiIndex = this.data.multiIndex
    var sec = parseInt(multiArray[0][multiIndex[0]])*60 + parseInt(multiArray[1][multiIndex[1]])
    console.log(sec)
  },
})