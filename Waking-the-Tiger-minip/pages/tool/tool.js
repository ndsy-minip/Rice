// pages/tool/tool.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tools: [[
      {
        "img":"cloud://cloud1-3gp8ynahdb4ea1a5.636c-cloud1-3gp8ynahdb4ea1a5-1310409999/william-shakespeare.png",
        "path":"",
        "title":"测评",
        "bgColor":"#ab8fca"
      }, {
        "img":"cloud://cloud1-3gp8ynahdb4ea1a5.636c-cloud1-3gp8ynahdb4ea1a5-1310409999/illustrations/illustrations_books.png",
        "path":"",
        "title":"直播",
        "bgColor":"#866cb9"
      }, {
        "img":"cloud://cloud1-3gp8ynahdb4ea1a5.636c-cloud1-3gp8ynahdb4ea1a5-1310409999/illustrations/illustrations_aircraft.png",
        "path":"",
        "title":"职业宝典",
        "bgColor":"#8f6eae"
      }, {
        "img":"cloud://cloud1-3gp8ynahdb4ea1a5.636c-cloud1-3gp8ynahdb4ea1a5-1310409999/illustrations/illustrations_pi.png",
        "path":"",
        "title":"冥想",
        "bgColor":"#8980bc"
      }
    ], 
    [{
      "img":"",
      "path":"",
      "title":"冥想",
      "bgColor":"#c0a2c7"
    }, {
      "img":"",
      "path":"",
      "title":"冥想",
      "bgColor":"#896d8d"
    }]]
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
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 1
      })
    }
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



})