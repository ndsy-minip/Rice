// pages/module/MBTI/MBTI_quiz/MBTI_quiz.js

var mbti = require('../../../../utils/mbti');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    now_index: 0,
    showSelection: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var customResult = {}
    for (let i in mbti) {
      customResult[i] = 2
    }
    this.setData({
      mbti,
      customResult
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
   * 下一个问题
   */
  changeQuiz: function (e) {
    var now_index = this.data.now_index
    if (e.currentTarget.id == "next") {
      this.setData({
        now_index: now_index + 1
      })
    }
    if (e.currentTarget.id == "previous") {
      this.setData({
        now_index: now_index - 1
      })
    }
  },


  /**
   * 显示答题卡
   */
  showSelection: function (e) {
    var showSelection = this.data.showSelection
    this.setData({
      showSelection: !showSelection
    })
  }

})