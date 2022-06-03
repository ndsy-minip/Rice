// pages/modern_agriculture/modern_agriculture.js
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
    this.getScientificArticle()
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



  navToDetail(e) {
    wx.navigateTo({
      url: '../articleConten/articleConten?article=' + JSON.stringify(e.currentTarget.dataset.article),
    })
  },

  getScientificArticle() {
    wx.showLoading({
      title: '正在加载中',
    })
    var that = this
    wx.cloud.callFunction({
      "name": "getScientificArticle",
      success(res) {
        that.setData({
          articleList: res.result.data
        })
        wx.hideLoading({
          success: (res) => { },
        })
      }

    })
  }
})