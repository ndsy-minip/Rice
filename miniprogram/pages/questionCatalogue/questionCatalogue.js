// pages/questionCatalogue/questionCatalogue.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {


    var that = this

    var today = new Date()
    var quiz = []
    for (var i in wx.getStorageSync('quiz')) {
      if (today - new Date(wx.getStorageSync('quiz')[i].date) > 0) {
        quiz.push(wx.getStorageSync('quiz')[i])
      }
    }
    this.setData({
      quiz: quiz.reverse()
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  navToQuiz(e) {
    wx.navigateTo({
      url: "../module/module_MBTI/MBTI_quiz/MBTI_quiz?quiz=" + JSON.stringify(e.currentTarget.dataset.quiz),
    })
  }
})