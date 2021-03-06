// pages/myNotebookDetail/myNotebookDetail.js
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
    var _this = this
    var notebook = JSON.parse(options.notebook)
    this.setData({
      notebook,
      userInfo: wx.getStorageSync('userInfo')
    })
    console.log(notebook.openid)
    if (notebook.openid == wx.getStorageSync('openid')) {
      _this.setData({
        isBack: true
      })
    } else {
      _this.setData({
        isBack: false
      })
    }


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
    return {
      title: "我的桃园日记，只分享给你哦",
      imageUrl:'cloud://cloud1-3gp8ynahdb4ea1a5.636c-cloud1-3gp8ynahdb4ea1a5-1310409999/推广图片.png',
    }
  },

  unfold: function (e) {
    var notebook = this.data.notebook
    notebook.isAbbreviation = !notebook.isAbbreviation
    this.setData({
      notebook
    })
  },
})