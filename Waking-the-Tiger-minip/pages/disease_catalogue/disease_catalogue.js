// pages/disease_catalogue/disease_catalogue.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titleList: ["病害", "虫害"],
    tabCur: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getDiseaseInfo()
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



  switchTab: function (e) {
    this.setData({
      tabCur: e.currentTarget.dataset.index
    })
  },


  navToDetail: function (e) {
    wx.navigateTo({
      url: '../disease_detail/disease_detail',
    })
  },


  navBack: function (e) {
    wx.navigateBack({
      delta: 1,
    })
  },

  getDiseaseInfo: function (e) {
    var that = this
    wx.cloud.callFunction({
      name: "getDisease",
      success(res) {
        var data = res.result.data
        var diseaseInfo = []
        var insectInfo = []
        for (var i in data) {
          data[i].method = JSON.parse(data[i].method)
          // data[i].image_url = 'cloud://cloud1-3gp8ynahdb4ea1a5.636c-cloud1-3gp8ynahdb4ea1a5-1310409999/disease/' + data[i].image_url + '.jpg'
          if (data[i].type == "病害") {
            diseaseInfo.push(data[i])
          } else {
            insectInfo.push(data[i])
          }
        }
        that.setData({
          diseaseInfo,
          insectInfo
        })
      }
    })
  }
})