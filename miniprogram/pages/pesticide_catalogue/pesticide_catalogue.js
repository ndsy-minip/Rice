// pages/pesticide_catalogue/pesticide_detail.js
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
    this.getPesticide()
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

  switchTab: function (e) {
    this.setData({
      tabCur: e.currentTarget.dataset.id,
      mainCur: e.currentTarget.dataset.id,
      verticalNavTop: (e.currentTarget.dataset.id - 1) * 50
    })
  },

  navToDetail: function (e) {
    console.log(e)
    wx.navigateTo({
      url: '../pesticide_detail/pesticide_detail?info='+JSON.stringify(e.currentTarget.dataset.info),
    })
  },


  getPesticide: function (e) {
    var that = this
    var pesticide = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]
    wx.cloud.callFunction({
      name: "getPesticide",
      success(res) {
        var data = res.result.data
        var index = 0
        for (var i in data) {
          if (i == 0 || data[i].type_id != data[i-1].type_id) {
            pesticide[index].push(data[i])
            index++
          } else {
            pesticide[index].push(data[i])
          }
        }
        that.setData({
          pesticide
        })
      }
    })
  }
})