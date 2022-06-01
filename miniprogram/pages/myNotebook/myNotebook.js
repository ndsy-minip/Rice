// pages/myNotebook/myNotebook.js
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
    this.setData({
      userInfo: wx.getStorageSync('userInfo')
    })
    this.getMyNotebook()
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
    wx.stopPullDownRefresh()
    this.getMyNotebook()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (res) {
    
  },

  getMyNotebook: function () {
    var _this = this
    wx.showLoading({
      title: '正在加载',
    })
    wx.cloud.callFunction({
      name: "getNotebook",
      success(res) {
        for (var i in res.result.data) {
          if (res.result.data[i].text.length > 55) {
            res.result.data[i].isAbbreviation = true
            res.result.data[i].isExceed = true
          }
          else {
            res.result.data[i].isAbbreviation = false
            res.result.data[i].isExceed = false
          }
        }
        _this.setData({
          myNotebook: res.result.data
        })
        wx.hideLoading({
          success: (res) => { },
        })
      }
    })
  },

  deleteNotebook: function (e) {
    var _this = this
    wx.showModal({
      title: "删除",
      content: "确定删除这条日记吗",
      success(res) {
        if (res.confirm) {
          wx.showLoading({
            title: '正在删除',
          })
          wx.cloud.callFunction({
            name: "deleteNotebook",
            data: {
              _id: e.currentTarget.dataset._id
            },
            success(res) {
              wx.hideLoading({
                success: (res) => {
                  _this.getMyNotebook()
                },
              })
              console.log(res)
            }
          })
        }
      }
    })
  },


  navToAdd: function (e) {
    wx.navigateTo({
      url: '../timer/timer?newNotebook='+'1',
    })
  },

  navToDetail: function(e){
    wx.navigateTo({
      url: '../myNotebookDetail/myNotebookDetail?notebook='+JSON.stringify(this.data.myNotebook[e.currentTarget.dataset.index]),
    })
  }


})